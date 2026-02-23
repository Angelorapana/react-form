import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const list = [
  { id: 1, title: " Dazi, caos e ricorsi" }
  { id: 2, title: " Milan, regalo all'inter" }
  { id: 3, title: " Trump, l'incubo dell'attentato" }
  { id: 4, title: " Arbitri altro FLOP!" }
];

function App() {
  const [articles, setArticles] = useState(list)
  return (
  )
}

export default App
