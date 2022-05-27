import {Routes, Route, useRoutes, BrowserRouter } from "react-router-dom";
import './App.css';
import HomeComponent from "./components/HomeComponent";
import ReposComponent from "./components/ReposComponent";
import { getAllPosts } from "./components/PostsAPI";
import { getAllInfoGithub, getAllMyRepositoriesGithub } from "./components/RepositoriesAPI";
import RepositoryDetails from "./components/RepositoryDetails";
import PostsComponent from "./components/PostsComponent";
import RestController from "./components/RestController";

import NavBar from "./NavBar";
import {useEffect, useState} from "react";





function App() {

  const [data, setData] = useState(undefined);

  const [repos, setRepos] = useState(undefined);

  const [posts, setPosts] = useState(undefined);






  useEffect(() => {
    getAllInfoGithub().then((response) => {
        setData(response.data);
    });

    getAllMyRepositoriesGithub().then((response) => {
      setRepos(response.data);
      // console.log(response.data);
  });


  getAllPosts().then((response) => {
    setPosts(response.data);
    // console.log(response.data);
});

  }, []);


  // useEffect(() => {

  //   fetch('https://jsonplaceholder.typicode.com/posts', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			title: 'New title added',
	// 			body: 'New body added. Hello body.',
	// 			userId: 2
	// 		}),
	// 		headers: {
	// 			"Content-type": "application/json; charset=UTF-8"
	// 		}
	// 	}).then(response => {
	// 			return response.json()
	// 		}).then(json => {
	// 			setPosts({
	// 				posts:json
	// 			});
	// 		});
  // }, [posts]);
  
  


  if (!data) return "Issue"
  else
  return (
    <div>


    <BrowserRouter >
    <NavBar/>
      <Routes>
      <Route path="/home/" element={<HomeComponent 
                        name={data.name}
                        public_repos={data.public_repos}
                        followers={data.followers}
                        following={data.following}
                        avatar_url ={data.avatar_url}/>}/>
      <Route path="/" element={<HomeComponent 
                        name={data.name}
                        public_repos={data.public_repos}
                        followers={data.followers}
                        following={data.following}
                        avatar_url ={data.avatar_url}/>}/>

      <Route path="/repos" element={
                        <ReposComponent repos={repos}
                        />}/>

      <Route path="/repos/:repositoryId" element={<RepositoryDetails 
                       repos={repos}/>}/>

      <Route path="/posts" element={
                        <PostsComponent posts={posts}
                        />}/>

      <Route path="/posts/add" element={
                        <RestController 
                        />}/>

      </Routes> 
          

      RestController
      </BrowserRouter >   

      
      {/* <div>
				<p><b>New Resource created in the server as shown below</b></p>
				<p>Id : {this.state.user.id}</p>
				<p>Title : {this.state.user.title}</p>
				<p>Body : {this.state.user.body}</p>
				<p>UserId : {this.state.user.userId}</p>
			</div> */}


     </div>
  );
}

export default App;
