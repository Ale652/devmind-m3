import React from "react";
import {useParams} from "react-router-dom";
 
const RepositoryDetails = (props) => {

    const repos = props.repos;

    const params = useParams();

 
    const repositoryId = params.repositoryId ?? 'Default Id';
    const repository = repos.filter(repos => repos.id == repositoryId.toString());
    console.log(repository);

    if(repository[0] !== undefined)
    return (
        <div>
        <br/>
            {/* <h3>{`Reposotory Id : ${repositoryId} !`}</h3>*/}
            <h1> REPOSITORY DETAILS </h1> 

        <div >Repository ID : {repository[0].id}</div>
        <div >Repository Name : {repository[0].name}</div>
        <div >Reopsitory URL : {repository[0].html_url}</div>
        <div >Size : {repository[0].size}</div>
        <div >Visibility : {repository[0].visibility}</div>
        </div>
    )
    else //console.log("Array is empty!");
    return(<div><br/>
        <strong >This Repository ID does NOT Exitst !</strong>
    </div>);
};

export default RepositoryDetails;

