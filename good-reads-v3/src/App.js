
import "./App.css";
import AddBook from "./components/add-book/AddBook";
import BooksList from "./components/books-list/BooksList";
import Menu from "./components/menu/Menu";
import {Routes, Route} from "react-router-dom";
import Book from "./components/book/Book";

import { BrowserRouter } from 'react-router-dom';
import Register from "./components/register/Register";

function App() {
  return (
      <div className="App">
        {/* <Menu />
        <AddBook />
        <BooksList /> */}
        <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path="/addBook" element={<AddBook/>}/>
                </Routes>
                <Routes>
                    <Route path="/Dashboard" element={<BooksList/>}/>
                </Routes>
                <Routes>
                    <Route path="/profile" element={<Book/>}/>
                </Routes>
                <Routes>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;


const notes = [
    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },
    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },
    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },
    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },

    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },
    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },
    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },
    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },
    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },
    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },
    {
        title: "sal",
        description:
            "dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss dadasdss, f5b042 f5b042, dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdss dadasdssdadasdss",
    },
];