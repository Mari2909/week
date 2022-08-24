import logo from './logo.svg';
import './App.css';
import './superhero/superhero.css';
import './data.json';
import Superhero from './superhero/superhero';


let articles = JSON.parse('./data.json');

function App() {
  return (
    <div className="App">
      {
        articles.map((article) =>
          <Superhero
            superhero={article.superhero}
            src={article.src} universe={article.universe}
            alter_ego={article.alter_ego} occupation={article.occupation}
            friends={article.friends} superpowers={article.superpowers}
            more={article.more}></Superhero>
        )
      }
    </div>
  );
}

export default App;
