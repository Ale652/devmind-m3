import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {Box, Button, Modal, setRef, TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {useEffect} from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Register from "../register/Register";
import WishList from "../books-list/WishList";
import ReadList from "../books-list/ReadList";
import Explore from "../books-list/Explore";
import BooksToUnpublishAdmin from "../books-list/BooksToUnpublishAdmin";
import BooksToPublishAdmin from "../books-list/BooksToPublishAdmin";

import ExploreAdmin from "../books-list/ExploreAdmin";
import BooksRejected from "../books-list/BooksRejected";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



const ProfileAdmin = (props) => {


    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [chekPassword, setCheckPassword] = useState("");
    const dispatch = useDispatch();
    const login = useSelector((state) => state.login);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

     
    return (
      <Box
        id="AddBookComponent"
        style={{
          padding: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            width: "50%",
            height: "240px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
         <Grid container direction={"row"} spacing={1} style={{width: "2100px"}}>

          <Grid item xs={1}>
            <Grid container direction={"column"} spacing={2} style={{width: '200px'}}>
                <Box style={{ fontSize: 20, fontWeight: "bold" }}>
                  {" "}
                  MyProfile:
                </Box>       
                <TextField  disabled id="outlined-disabled" label={login!=undefined?login.email:"email"} variant="outlined" onChange={(event) => setEmail(event.target.value)} />
                <TextField  disabled id="outlined-disabled" label={login!=undefined?login.role:"role"}  variant="outlined" onChange={(event) => setRole(event.target.value)}/>
                {/* <TextField  disabled id="outlined-disabled" label={login!=undefined?login.firstName:"firstName"}  variant="outlined" onChange={(event) => setFirstName(event.target.value)}/>
                <TextField  disabled id="outlined-disabled" label={login!=undefined?login.lastName:"lastName"}  variant="outlined" onChange={(event) => setLastName(event.target.value)}/> */}

            </Grid>
          </Grid>
          <Grid item xs={11}>

          <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label="Books to Publish" {...a11yProps(0)} />
              <Tab label="Published Books" {...a11yProps(1)} />
              <Tab label="Rejected books" {...a11yProps(2)} />

            </Tabs>
            <TabPanel value={value} index={0} style={{width: "100%"}}>
              {/* <WishList /> */}
              <BooksToPublishAdmin />
            </TabPanel>
            <TabPanel value={value} index={1} style={{width: "100%"}}>
              {/* <ReadList /> */}
              <BooksToUnpublishAdmin />
            </TabPanel>
            <TabPanel value={value} index={2} style={{width: "100%"}}>
              {/* <ExploreAdmin /> */}
              <BooksRejected />
            </TabPanel>

          </Box>

          </Grid>
        </Grid>
        </Box>  
      </Box>
    );
  };
  
  export default ProfileAdmin;