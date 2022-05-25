import * as React from 'react';
import {useParams,useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
 
const RepositoryDetails = (props) => {

    const repos = props.repos;

    const params = useParams();
    const navigate = useNavigate();

    const repositoryId = params.repositoryId ?? 'Default Id';
    const repository = repos.filter(repos => repos.id == repositoryId.toString());
    console.log(repository);


    const [idRepo, setIdRepo] = React.useState('');

    const handleChange = (event) => {
        setIdRepo(event.target.value);
        navigate(`/repos/`+idRepo)
    };

    const selectPart =(<div> {/* Select component */}
<Box sx={{ minWidth: 120 }}>
<h3> Select another Repository ID:  </h3>
  <FormControl sx={{ m: 1, minWidth: 80 }}>
    <InputLabel id="demo-simple-select-label">idRepo</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={idRepo}
      label="Id Repo"
      onChange={handleChange} 
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>

      {repos.map((repo,index) => (
        <MenuItem value={repo.id} key={repo.id}>{repo.id}</MenuItem>

     ))}
      
    </Select>
  </FormControl>
  </Box></div>);

 
  


    if(repository[0] !== undefined)
    return (
        <div>
        <br/>
            <h1> REPOSITORY DETAILS </h1>



        <div >Repository ID : {repository[0].id}</div>
        <div >Repository Name : {repository[0].name}</div>
        <div >Reopsitory URL : {repository[0].html_url}</div>
        <div >Size : {repository[0].size}</div>
        <div >Visibility : {repository[0].visibility}</div>

        `{selectPart}`

        </div>

    )
    else //console.log("Array is empty!");
    return(<div><br/>
        <strong >This Repository ID does NOT Exitst !</strong>
        `{selectPart}`
    </div>);
};




export default RepositoryDetails;

