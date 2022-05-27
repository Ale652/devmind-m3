
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState, useRef, useEffect } from "react";

const ReposComponent = (props) => {
    
    const [rows, updateRows] = useState(props.repos);

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: '#f5ea98',
        },
        '&:nth-of-type(even)': {
          backgroundColor: ' #85c1e9',
        },
        // hide last border
        // '&:last-child td, &:last-child th': {
        //   border: 6,
        // },
      }));


    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label="simple table">
            <TableHead>
                <TableCell align="left" >REPO NAME</TableCell>
                <TableCell align="left" >OWNER NAME</TableCell>
                <TableCell align="left" >LINK REPO&nbsp;</TableCell>
                <TableCell align="left" >DESC REPO&nbsp;</TableCell>
                <TableCell align="left" >DEFAULT BRANCH&nbsp;</TableCell>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow 
                
                   key={row.id}
                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                   style={{cursor:"pointer"}}
                //    onClick={handleOpen}
                >
               
                  <TableCell align="left" >{row.name}&nbsp;</TableCell>
                  <TableCell align="left" >{row.owner.name}&nbsp;</TableCell>
                  <TableCell align="left" > {row.html_url}&nbsp;</TableCell>
                  <TableCell align="left" >{row.description}&nbsp;</TableCell>
                  <TableCell align="left" >{row.default_branch}&nbsp;</TableCell>
                  {/* <TableCell align="left" > <button onClick={(event) => handleRemoveItem(row,event)}>Delete</button></TableCell> */}
                    
         
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );



    // return (
    //   <div className="home-container">
    //     Repos hello
    //   </div>
    // );
  };
  
  export default ReposComponent;