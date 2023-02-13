import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    //aqui embaixo está uma forma de fazer um renderização condicional dentro do React. Caso a condição (tudo que vem antes do &&), ele irá me retornar então o que vem depois. No caso, se a 'section' irá aparecer (caso tenha algum colaborador cadastrado ali) ou não.
    props.colaboradores.length > 0 && <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
