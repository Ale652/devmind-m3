import React from "react";
import {Box, Button, Modal, TextField} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';



const CommentOfPostModal = (props) => {
    const onClose = props.onClose;
    const postData = props.modalData.post;
    const commentsData = props.modalData.comments;


    const columns = [
        // {field: "postId", headerName: "postId"},
        {field: "id", headerName: "comment id"},
        {field: "name", headerName: "name", width: 400},
        {field: "email", headerName: "email", width: 400},
        {field: "body", headerName: "body", width:1500},
    ];

 
    return (
        <Modal open onClose={() => onClose(undefined)}>
            <Box
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    position="relative"
                    borderRadius="15px"
                    width="50%"
                    height="50%"
                    bgcolor="#f5aa7f"
                    display="flex"
                    flexDirection="column"
                    p={3}
                >
                    <Box fontWeight="bold" py={1}>Post Info:</Box>
                    <Box width="100%" display="flex" alignItems="center"> Post Id : 
                        <span>{postData.id}</span>
                    </Box>
                    <Box width="100%" display="flex" alignItems="center">Title :
                        <span>{postData.title}</span>
                    </Box>
                    <Box width="100%" display="flex" alignItems="center">userId :
                        <span>{postData.userId}</span>
                    </Box>

                    <Box fontWeight="bold" py={1}>Comments Info:</Box>
                    <DataGrid autoHeight {...commentsData}  rows={commentsData} columns={columns}/>
                    {/* <Box width="100%" display="flex" alignItems="center">
                        {
                            commentsData.map((row) => ( 
                                <Box width="100%" display="flex" alignItems="center">comment name :
                                    <span>{row.name}</span>
                                    <span>{row.email}</span>
                                </Box>
                                ))}
                    </Box> */}
 
                    <Button variant="contained" onClick={onClose}>Close Modal</Button>
                </Box>
            </Box>
        </Modal>
    );
};
 
export default CommentOfPostModal;