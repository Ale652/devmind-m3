import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./BooksTable.css";
import { hover } from '@testing-library/user-event/dist/hover';
import { color, fontSize } from '@mui/system';
// import { makeStyles } from '@mui/styles';
// import Backdrop from '@mui/material/Backdrop';
// import { Backdrop } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';



export default function BooksTable(props) {

  const rows = props.data;

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

//   const StyledDialog = styled(Dialog)`
//   .MuiBackdrop-root {
//     background-color: lightgreen;
//   }
// `;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">TITLE</TableCell>
            <TableCell align="left">AUTHOR&nbsp;</TableCell>
            <TableCell align="left">GENRE&nbsp;</TableCell>
            <TableCell align="left">DESCRIPTION&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               className={(row.id%2==0)?'par':'impar'} style={{cursor:"pointer"}}
               onClick={handleOpen}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.author}</TableCell>
              <TableCell align="left">{row.genre}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  BackdropProps={{ invisible: true }}
          
                >
                  <Box sx={style}>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                    <img src={row.image}  style={{ maxWidth: "100%", maxHeight: "calc(100vh - 64px)" }} alt="Girl in a jacket"/> 
                    {/* style={{width: "50px", height: "100px"}}  */}
                  </Box>
                </Modal>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
