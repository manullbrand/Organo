import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";

import "./Formulario.css";
import { useState } from "react";

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("Done ", nome, cargo, imagem, time);

    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Fill in to create your employee card:</h2>
        <Campo
          obrigatorio={true}
          label="Name"
          placeholder="Enter your name"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="IT Position"
          placeholder="Enter your position in the company"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label="Picture"
          placeholder="Enter your GitHub URL .png "
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Teams"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Create card" />
      </form>

      <form
        className="formulario"
        onSubmit={(evento) => {
          {
            evento.preventDefault();
            cadastrarTime({ nome: nomeTime, cor: corTime });
          }
        }}
      >
        <h2>Fill in the data to create a new team</h2>
        <Campo
          obrigatorio={true}
          label="Team"
          placeholder="Enter the new team"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio={true}
          type="color"
          label="Color"
          placeholder="Enter the team color "
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />

        <Botao texto="Create a new team" />
      </form>
    </section>
  );
};

export default Formulario;
