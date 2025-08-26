import './Galeria.css'
import icon from "./../../assets/img/upload.svg"
import { useState, useEffect } from 'react'
import { Botao } from '../../components/botao/Botao'
import { Card } from './../../components/card/Card'
import api from '../../Services/services'

export const Galeria = () => {
    const [cards, setCards] = useState([]);
    const [imagem, setImagem] = useState(null);
    const [nomeImagem, setNomeImagem] = useState("");

    // Listar Cards.
    async function listarCards() {
        try {
            const resposta = await api.get("/Imagem");
            setCards(resposta.data);
        } catch (error) {
            console.error(error);
            alert("Erro ao listar.");
        }
    }

    // Cadastrar Cards.
    async function cadastrarCard(e) {
        e.preventDefault();
        if (imagem && nomeImagem) {
            try {
                // o FormData é uma interface JavaScript que permite construir um conjunto de pares chave/valor representando
                // os dados de um formulário HTLML.

                const formData = new FormData();

                // APPEND: anexar/acrescentar/adicionar
                formData.append("Nome", nomeImagem);
                formData.append("Arquivo", imagem);

                await api.post("/Imagem/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });

                alert("Cadastro concluído com sucesso!")

            } catch (error) {
                alert("Não foi possível realizar o cadastro.");
                console.error(error);
            }
        } else {
            alert("Preencha os campos de Nome e Imagem!")
        }
    }

    // Editar Cards.
    async function editarCard(id, nomeAntigo) {
        try {
            const novoNome = prompt("Digite o novo nome da imagem: ", nomeAntigo);

            const inputArquivo = document.createElement("input");
            inputArquivo.type = "file";
            // Aceita imagens INDEPENDENTE das extensões.
            inputArquivo.accept = "image/*";

            // Define o que aconrece quando o usuário selecionar um arquivo.
            inputArquivo.onChange = async (e) => {
                const novoArquivo = e.target.file[0];
                const formData = new FormData();

                // Adicionar o novo nome no formData:
                formData.append("Nome", novoNome);
                formData.append("Arquivo", novoArquivo);

                if (formData) {
                    try {
                        await api.put(`Imagem/${id}`, formData, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        })
                        alert("Eba, deu certo!")
                        listarCards();
                    } catch (error) {
                        alert("Não foi possível editar o card.");
                        console.error(error);
                    };

                }
            };
        } catch (error) {
            alert("Não foi possível editar o card.")
        }
    }

    // Excluir Cards.
    async function excluirCard(id) {
        try {
            await api.delete(`/Imagem/${id}`);
            alert("Excluído com sucesso.");
            listarCards();
        } catch (error) {
            alert("Erro ao excluir card.");
            console.error(error);
        }
    }

    // Use Effect.
    useEffect(() => {
        listarCards();
    }, []);

    return (
        <>
            <h1 className='tituloGaleria'>Galeria Online</h1>

            <form className='formulario' onSubmit={cadastrarCard}>
                <div className='campoNome'>
                    <label>Nome</label>
                    <input type="text" className='inputNome'
                        onChange={(e) => setNomeImagem(e.target.value)}
                        value={nomeImagem} />
                </div>
                <div className='campoImagem'>
                    <label className='arquivoLabel'>
                        <i>
                            <img src={icon} alt="Ícone de upload de imagem" />
                        </i>
                        <input type="file" className="arquivoInput"
                            onChange={(e) => setImagem(e.target.files[0])} />
                    </label>
                </div>
                <Botao nomeBotao="Cadastrar" />
            </form>

            <div className='campoCards'>
                {cards.length > 0 ? (
                    cards.map((e) => (
                        <Card
                            key={e.id} // 
                            tituloCard={e.nome}
                            imgCard={`https://localhost:7218/${e.caminho.replace("wwwroot/", "")}`}
                            funcaoEditar={() => editarCard(e.id, e.nomeAntigo)}
                            funcaoExcluir={() => excluirCard(e.id)}

                        />
                    ))
                ) : (
                    <p>Nenhum Card cadastrado</p>
                )}
            </div>
        </>
    );
};