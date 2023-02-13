import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {
  // Não precisa mais dessa lista. Deixei ela dinâmica direto no arquivo App.js
  // const times = [
  //   "Programação",
  //   "Front-End",
  //   "Data Science",
  //   "Devops",
  //   "UX e Design",
  //   "Mobile",
  //   "Inovação e Gestão",
  // ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido => ", nome, cargo, imagem, time);
    //Estou criando um objeto aqui embaixo:
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    // Limpando os eventos após um cadastro:
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Fill in to create your employee card:</h2>
        <CampoTexto
          obrigatorio={true}
          label="Name"
          placeholder="Enter your name"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Job position"
          placeholder="Enter your position"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Photo"
          placeholder="GitHub address followed by .png"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Team"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Create card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
