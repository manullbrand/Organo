import "./Banner.css";

function Banner() {
  //JSX
  return (
    //className é o nome que o class do CSS recebe dentro do React, já que class é uma palavra reservada do JS.
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="O banner principal da página do Organo."
      />
    </header>
  );
}

export default Banner;
