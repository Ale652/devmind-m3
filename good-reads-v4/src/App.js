
import "./App.css";
import AddBook from "./components/add-book/AddBook";
import BooksList from "./components/books-list/BooksList";
import Menu from "./components/menu/Menu";
import {Routes, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";

import { BrowserRouter } from 'react-router-dom';
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { useSelector } from "react-redux";


function App() {

    const login = useSelector((state) => state.login);

    console.log(login);

  return (
      <div className="App">
       
        {login.email==null && <Home />}
        {login.email!=null && 
        <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path="/addBook" element={<AddBook/>}/>
                </Routes>
                <Routes>
                    <Route path="/Dashboard" element={<BooksList/>}/>
                </Routes>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
                <Routes>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
        </BrowserRouter>
    }
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