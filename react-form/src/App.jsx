import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const list = [
  { id: 1, title: " Dazi, caos e ricorsi" },
  { id: 2, title: " Milan, regalo all'inter" },
  { id: 3, title: " Trump, l'incubo dell'attentato" },
  { id: 4, title: " Arbitri altro FLOP!" },
];


function handleSubmit(event) {
  event.preventDefault()
}

function App() {
  const [articles, setArticles] = useState(list)
  const [text, setText] = useState("")    // utilizzo usestate per l'aggiornamento del testo dell'input del form 

  return (
    <div className="container">
      <div className="row">


        {articles.map((element) =>
          <div key={element.id} className="col pt-3">
            <div className="card card-body">
              <ul className='list-unstyled'>
                <li> {element.title}</li>
              </ul>
            </div>
          </div>)}
        <form>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onSubmit={handleSubmit} />

        </form>

      </div>
    </div >


  )
}

export default App
