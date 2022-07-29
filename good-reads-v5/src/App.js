
import "./App.css";
import AddBookAdmin from "./components/add-book/AddBookAdmin";
import AddBookAuthor from "./components/add-book/AddBookAuthor";
import BooksListAdmin from "./components/books-list/BooksListAdmin";
import BooksListAuthor from "./components/books-list/BooksListAuthor";
import Menu from "./components/menu/Menu";
import {Routes, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import Grid from "@mui/material/Grid";
import { BrowserRouter } from 'react-router-dom';
import Home from "./components/home/Home";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { login } from "./components/redux/actions/actions";
import BooksListReader from "./components/books-list/BooksListReader";
import ProfileAuthor from "./components/profile/ProfileAuthor";


function App() {

    const loginState = useSelector((state) => state.login);
    const dispatch = useDispatch();

    const signOutUI = () => {
        dispatch(login(undefined,undefined, undefined));
    };

    return (
      <div className="App">
       
        {loginState.email==null && <Home />}
        {loginState.email!=null && loginState.role == "ADMIN" &&
        <Grid container direction={"row"} spacing={12}>
            <Grid item xs={11}>
                <BrowserRouter>
                    <Menu/>
                        <Routes>
                            <Route path="/addBook" element={<AddBookAdmin/>}/>
                        </Routes>
                        <Routes>
                            <Route path="/Dashboard" element={<BooksListAdmin/>}/>
                        </Routes>
                        <Routes>
                            <Route path="/profile" element={<Profile/>}/>
                        </Routes>
                </BrowserRouter>
            </Grid>
            <Grid item xs={1} >
                <Button onClick={signOutUI} variant="text">
                    {" "}
                    Sign OUT 
                </Button>
            </Grid>
        </Grid>
        
    }


    {loginState.email!=null && loginState.role == "READER" &&
        <Grid container direction={"row"} spacing={12}>
            <Grid item xs={11}>
                <BrowserRouter>
                    <Menu/>
                        <Routes>
                            <Route path="/Dashboard" element={<BooksListReader/>}/>
                        </Routes>
                        <Routes>
                            <Route path="/profile" element={<Profile/>}/>
                        </Routes>
                </BrowserRouter>
            </Grid>
            <Grid item xs={1} >
                <Button onClick={signOutUI} variant="text">
                    {" "}
                    Sign OUT 
                </Button>
            </Grid>
        </Grid>
     
    }



    {loginState.email!=null && loginState.role == "AUTHOR" &&
        <Grid container direction={"row"} spacing={12}>
            <Grid item xs={11}>
                <BrowserRouter>
                    <Menu/>
                        <Routes>
                            <Route path="/addBook" element={<AddBookAuthor/>}/>
                        </Routes>
                        <Routes>
                            <Route path="/Dashboard" element={<BooksListAuthor/>}/>
                        </Routes>
                        <Routes>
                            <Route path="/profile" element={<ProfileAuthor/>}/>
                        </Routes>
                </BrowserRouter>
            </Grid>
            <Grid item xs={1} >
                <Button onClick={signOutUI} variant="text">
                    {" "}
                    Sign OUT 
                </Button>
            </Grid>
        </Grid>     
    }
      </div>
  );
}

export default App;

