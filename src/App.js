import { useEffect, useState } from 'react'
import './style.css'

function App() {
  const [nutri, setNutri] = useState([])

  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
        .then(r => r.json())
        .then(json => {
          setNutri(json)
        })
    }
    loadApi()
  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map(item => {
        return (
          <article className="post" key={item.id}>
            <strong className="titulo">{item.titulo}</strong>
            <img className="capa" src={item.capa} alt={item.titulo} />
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao" href="#">
              Acessar
            </a>
          </article>
        )
      })}

      <footer>
        <p>Todos os Direitos Reservados ©</p>
      </footer>
    </div>
  )
}

export default App
