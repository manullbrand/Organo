import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programing",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX and Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovation",
      cor: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Software Developer and Teacher",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Software Engineer",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "MANUELA BRANDÃO",
      cargo: "JavaScript Developer",
      imagem: "	https://github.com/manullbrand.png",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster and CEO of Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Software Developer and Teacher",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Software Engineer",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "MANUELA BRANDÃO",
      cargo: "JavaScript Developer",
      imagem: "	https://github.com/manullbrand.png",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster and CEO of Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Software Developer and Teacher",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Software Engineer",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Python and JavaScript Developer",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster and CEO of Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Software Developer and Teacher",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Software Engineer",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Python and JavaScript Developer",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster and CEO of Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Software Developer and Teacher",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Software Engineer",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Python and JavaScript Developer",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster and CEO of Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Software Developer and Teacher",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Software Engineer",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Python and JavaScript Developer",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster and CEO of Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[5].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />

      <section className="times">
        <h1>List of teams</h1>
        {times.map((time, indice) => (
          <Time
            mudarCor={mudarCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            aoFavoritar={resolverFavorito}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
