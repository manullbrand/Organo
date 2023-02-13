import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido => ", nome, cargo, imagem, time);

    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });

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
