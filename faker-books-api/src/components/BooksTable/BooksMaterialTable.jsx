import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { hover } from '@testing-library/user-event/dist/hover';
// import { color, fontSize } from '@mui/system';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { SwitchRight } from '@mui/icons-material';




export default function BooksMaterialTable(props) {

  const [rows, updateRows] = useState(props.data);

  // const rows = props.data;

  // console.log(props.data);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    backDrop: {
      background: 'rgba(255,255,255,0.2)',
    }
  };


const handleRemoveItem = (row,event) => {
  event.stopPropagation();
   const id = row.id;
   updateRows(rows.filter(item => item.id !== id));
   console.log(id);

  };


  // const StyledTableCell = styled(TableRow)(({ theme }) => ({
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  //   // hide last border
  //   '&:last-child td, &:last-child th': {
  //     border: 0,
  //   },
  // }));

  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#f5ea98',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#edaa7e',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 6,
    },
  }));


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
            <TableCell align="left" >ID</TableCell>
            <TableCell align="left" >TITLE</TableCell>
            <TableCell align="left" >AUTHOR&nbsp;</TableCell>
            <TableCell align="left" >GENRE&nbsp;</TableCell>
            <TableCell align="left">DESCRIPTION&nbsp;</TableCell>
            <TableCell align="left"  >ACTION&nbsp;</TableCell>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow 
            
        
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               style={{cursor:"pointer"}}
               onClick={handleOpen}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left"  >{row.id}&nbsp;</TableCell>
              <TableCell align="left" >{row.title}&nbsp;</TableCell>
              <TableCell align="left"> {row.author}&nbsp;</TableCell>
              <TableCell align="left" >{row.genre}&nbsp;</TableCell>
              <TableCell align="left">{row.description}&nbsp;</TableCell>
              <TableCell align="left"> <button onClick={(event) => handleRemoveItem(row,event)}>Delete</button></TableCell>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  BackdropProps={{ invisible: true }}
          
                >
                  <Box sx={style}>
                    <img src={row.image}  style={{ maxWidth: "100%", maxHeight: "calc(100vh - 64px)" }} alt="Girl in a jacket"/> 
                  </Box>
                </Modal>
                
     
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
