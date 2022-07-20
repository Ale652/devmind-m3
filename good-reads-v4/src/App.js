
import "./App.css";
import AddBook from "./components/add-book/AddBook";
import BooksList from "./components/books-list/BooksList";
import Menu from "./components/menu/Menu";
import {Routes, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import Grid from "@mui/material/Grid";
import { BrowserRouter } from 'react-router-dom';
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { login } from "./components/redux/actions/actions";


function App() {

    const loginState = useSelector((state) => state.login);
    const dispatch = useDispatch();

    const singOutUI = () => {
        dispatch(login(undefined,undefined, undefined));
    };

  return (
      <div className="App">
       
        {loginState.email==null && <Home />}
        {loginState.email!=null && 
        <Grid container direction={"row"} spacing={12}>
        <Grid item xs={11}>
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
                {/* <Routes>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                </Routes> */}
        </BrowserRouter>
        </Grid>
        <Grid item xs={1} >
        <Button onClick={singOutUI} variant="text">
            {" "}
                Sing OUT 
            </Button>
            </Grid>
        </Grid>
        
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