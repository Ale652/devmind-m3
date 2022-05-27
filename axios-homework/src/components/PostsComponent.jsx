import {useState, useEffect} from "react";
import {Box} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import CommentOfPostModal from "./CommentOfPostModal";
import { getPostDetails } from "./PostsAPI";



const PostsComponent = (props) => {

    const [postsOnComponent, updateRows] = useState(props.posts);
    const [modalData, setModalData] = useState(undefined);

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


    return (
        <Box width="100%" height="100%" display="flex" justifyContent="center">
            {postsOnComponent === undefined && <div>There is no post yet</div>}
            {console.log("Checking if we have posts in the component PostsComponent : ")}
            {console.log(postsOnComponent)}
            {postsOnComponent && (
                <Box width="80%">
                    <DataGrid autoHeight {...postsOnComponent} onCellClick={onCellClick} rows={postsOnComponent} columns={columns}/>
                    {/* if want to have only 5 per page use slice as following : 
                    <DataGrid autoHeight {...postsOnComponent} onCellClick={onCellClick} rows={postsOnComponent.slice(0, 5)} columns={columns}/> */}
                </Box>
            )}  
            {modalData && <CommentOfPostModal modalData={modalData} onClose={() => setModalData(undefined)}/>}
        </Box>
    );


}
export default PostsComponent;