
import * as React from 'react';
import { useState,useRef } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useOnClickOutside from "./useOnClickOutside";


function BooksTable(props) {

  

   const ref = useRef();

    const [rows, updateRows] = useState(props.data);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setOpen(false));


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

return (
	<div >
	<table>
        <thead>
            <tr>
                <th align="right" >ID</th>
                <th align="right" >TITLE</th>
                <th align="right" >AUTHOR&nbsp;</th>
                <th align="right" >GENRE&nbsp;</th>
                <th align="right">DESCRIPTION&nbsp;</th>
                {/* <td align="left"  >ACTION&nbsp;</td> */}
            </tr>
        </thead>
        <tbody>
		{rows.map((row, key) => {
		return (
			<tr key={row.id} onClick={handleOpen} style={{cursor:"pointer" , backgroundColor:(row.id%2==0)?"#f5ea98":"#edaa7e" }} >
             
              <th align="right" >{row.id}&nbsp;</th>
              <th align="right" >{row.title}&nbsp;</th>
              <th align="right" >{row.author}&nbsp;</th>
              <th align="right" >{row.genre}&nbsp;</th>
              <th align="right" >{row.description}&nbsp;</th>
              {/* <td align="left" > <button onClick={(event) => handleRemoveItem(row,event)}>Delete</button></td> */}

              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  BackdropProps={{ invisible: true }}
          
                >
                  <Box sx={style}  ref={ref}>
                    <img src={row.image}  style={{ maxWidth: "100%", maxHeight: "calc(100vh - 64px)" }} alt="Girl in a jacket"/> 
                  </Box>
                </Modal>
             
        </tr>
		)
        
		})}
        </tbody>
	</table>
	</div>
);
}

export default BooksTable;
