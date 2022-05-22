import { useState } from 'react';
import './App.css';
import Book from '../src/components/Book/Book';
import Exclude from '../src/components/Exclude/Exclude'

function App() {

  const [books, setBooks] = useState( [
    {
      name: "A descoberta do mundo",
      author: "Clarice Lispector",
      pages: "480",
      linkImage:"https://images-na.ssl-images-amazon.com/images/I/81zFcHJLykL.jpg"
      
    },
    {
      name: "Gênero e desigualdades",
      author: "Flávia Biroli",
      pages: "210",
      linkImage:"https://boitempo-img.f1cdn.com.br/resizer/view/900/900/false/true/542.jpg"
      
    },
  ]);

  const onHandleBook = (event) => {
    event.preventDefault(event);
    setBooks([...books,
      {
        name: event.target.name.value,
        author: event.target.author.value,
        pages: event.target.pages.value,
        linkImage: event.target.linkImage.value
      }
    ]);
   
  }

  const onDeleteHandler = () =>{
    console.log("Exec");
  }
 
  return (
    <div className="App">
      <h1>Meu primeiro exemplo React</h1>
      <form onSubmit={onHandleBook}>
        <input type="text" id="name" placeholder="Digite o nome do livro" />
        <input type="text" id="author" placeholder="Digite o nome do autor(a)" />
        <input type="text" id="pages" placeholder="Número de páginas" />
        <input type="text" id="linkImage" placeholder="link da imagem" />
        <input type="submit" value="Enviar" />
      </form>
      {books.map((book, index) => {
        return (
          <Book key={index}name={book.name} linkImage={book.linkImage} author={book.author} pages={book.pages} onDeleteHandler={book.onDeleteHandler}/>
        )
      })}
    </div>

      
);
}

export default App;
