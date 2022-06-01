
// import * as React from 'react';
import { useState, useEffect, Fragment } from "react";
import {Box} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import CommentOfPostModal from "./CommentOfPostModal";
import { getPostDetails,createPost } from "./PostsAPI";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



const PostsComponent = (props) => {

    const [postsOnComponent, updateRows] = useState(props.posts);
    const [modalData, setModalData] = useState(undefined);

    const [open, setOpen] = useState(false);

    const columns = [
        {field: "userId", headerName: "userId"},
        {field: "id", headerName: "id"},
        {field: "title", headerName: "title", width: 400},
        {field: "body", headerName: "body", width:1500},
    ];



    const onCellClick = (cellInfo) => {
        const id = cellInfo.row.id;
        getPostDetails(id)
            .then((postComments) => {
                setModalData({
                    comments: postComments.data,
                    post: cellInfo.row,
                });
            })
            .catch(() => {
                console.error("Something went wrong");
            });
    };


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };


    const onPostDone = () =>{

        fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'New title added',
				body: 'New body added. Hello body.',
				userId: 2
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
                json.id = postsOnComponent.length+1;
				updateRows([...postsOnComponent,
                    json
                ]
				);
                setOpen(true);
			});

        console.log("clicked add post");

    }




    return (
        <Box>
            <Button color="secondary" size="small" onClick={onPostDone}>
                Add Post
            </Button>
            <Box width="100%" height="100%" display="flex" justifyContent="center">
            
                {postsOnComponent === undefined && <div>There is no post yet</div>}
                {/* {console.log("Checking if we have posts in the component PostsComponent : ")} */}
                {/* {console.log(postsOnComponent)} */}
                {postsOnComponent && (
                    <Box width="80%">
                        <DataGrid autoHeight {...postsOnComponent} onCellClick={onCellClick} rows={postsOnComponent} columns={columns}/>
                        {/* if want to have only 5 per page use slice as following : 
                        <DataGrid autoHeight {...postsOnComponent} onCellClick={onCellClick} rows={postsOnComponent.slice(0, 5)} columns={columns}/> */}
                    </Box>
                )}  
                {modalData && <CommentOfPostModal modalData={modalData} onClose={() => setModalData(undefined)}/>}
            </Box>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Post added"
                action={<Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                                POST Added
                            </Button>
                            <IconButton
                                size="small"
                                aria-label="close"
                                color="inherit"
                                onClick={handleClose}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                            </Fragment>}
            />
        </Box>
    );


}
export default PostsComponent;