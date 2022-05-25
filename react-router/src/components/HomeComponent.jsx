import {useParams, useNavigate} from "react-router-dom";


const HomeComponent = (props) => {
  const navigate = useNavigate();
  const params = useParams();


    const name = props.name;
    const public_repos = props.public_repos;
    const followers = props.followers;
    const following = props.following;
    const avatar_url = props.avatar_url;


    return (
      <div className="home-container">
        <div><button onClick={() => navigate('/repos')}>Go to repos</button></div>
        <img src={avatar_url}></img>
        <div >Name : {name}</div>
        <div >Public Repos : {public_repos}</div>
        <div >Followers : {followers}</div>
        <div >Following : {following}</div>
      </div>
    );
  };
  
  export default HomeComponent;