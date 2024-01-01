import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

function App() {
  return (
    <>
      <Header
      imgLogo="./src/assets/img/logotipo.png"
      home="inicio"
      contact="contato"
      about="sobre"
      agend="agendar"
      />
      <Main
      bgDiv1="./src/assets/img/bg-div1.jpg"
      />

    </>
  )
}

export default App
