import "./CampoTexto.css";

const CampoTexto = (props) => {

  // let valor = 'Manu Brandao'
  // const [valor, setValor] = useState('Manu Brandao')

  const aoDigitado = (evento) => {
    // setValor(evento.target.value)
    // console.log(valor);

    props.aoAlterado(evento.target.value)

  };

  // console.log(props);
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
