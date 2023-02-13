import { useEffect, useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import axios from "axios";

function App() {
  const times = [
    {
      nome: "Programming",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8f8ff",
    },
    {
      nome: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Devops",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "UX & Design",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Innovation & Management",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {/* Aqui embaixo significa: pra cada time dentro da nossa lista de times, quero criar (mapear) um componente como passado dentro dos sinais de maior e menor */}
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>Olá, Mundo</h1>
//       <Card titulo="Manuela é uma menina legal" texto="café" />
//     </div>
//   );
// }

// function Card({ titulo, texto }) {
//   // const state = useState(0);

//   // function minhaFuncao() {
//   //   state[1](state[0] += 1)
//   // } Isso aqui é a mesma coisa que ali embaixo:

//   const [contador, setContador] = useState(0);
//   const [countryList, setCountryList] = useState([]);

//   function minhaFuncao() {
    
//     setContador(contador + 1);
//   }

//   function getProbabilitiesUsingName() {
//     axios
//       .get("https://api.nationalize.io/?name=manuela")
//       .then(function (response) {
//         // handle success
//         setCountryList(response.data.country);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       });
//   }

//   useEffect(getProbabilitiesUsingName, []);

//   return (
//     <div>
//       <h2>{titulo}</h2>
//       <p>{texto}</p>
//       <button onClick={minhaFuncao}>Clique em mim</button>
//       <h2>{contador}</h2>
//       {countryList.map((item) => (
//         <ProbabilityInformation
//           country={item.country_id}
//           probability={item.probability}
//           key={item.country_id}
//         />
//       ))}
//     </div>
//   );
// }

// function ProbabilityInformation({ country, probability }) {
//   return (
//     <p>
//       {country}/{probability}
//     </p>
//   );
// }

export default App;
