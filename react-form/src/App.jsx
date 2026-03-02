import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const list = [
  { id: 1, title: " Dazi, caos e ricorsi" },
  { id: 2, title: " Milan, regalo all'inter" },
  { id: 3, title: " Trump, l'incubo dell'attentato" },
  { id: 4, title: " Arbitri altro FLOP!" },
];




function App() {
  const [articles, setArticles] = useState(list)
  const [text, setText] = useState("")    // utilizzo usestate per l'aggiornamento del testo dell'input del form 

  function handleSubmit(event) {
    event.preventDefault()
    const newArticle = {
      id: articles.length + 1,
      title: text
    }
    setArticles([...articles, newArticle])  //setarticle aggiorna lo stato creando un nuovo array composto da articles piu newarticles
  }


  function handleDelete(id) {
    setArticles(articles.filter(article => article.id !== id))
  }
  return (
    <div className="container">
      <div className="row">


        {articles.map((element) =>
          <div key={element.id} className="col pt-3">
            <div className="card card-body">
              <ul className='list-unstyled'>
                <li> {element.title}</li>
                <button onClick={() => handleDelete(element.id)}> Rimuovi</button>
              </ul>
            </div>
          </div>)}
        <form className="pt-5" onSubmit={handleSubmit} >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Aggiungi</button>


        </form>

      </div>
    </div >


  )
}

export default App
