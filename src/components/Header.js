//Top navigation bar

import React, { useState }  from "react";
import {AppBar, Button, Toolbar, Typography, Box, Tabs , Tab} from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';  //for login Button
import GTranslateIcon from '@mui/icons-material/GTranslate';  //for language button
import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
//import { loginActions } from "../store";
const Header = () => {
    const [value, setValue] = useState();
    return <AppBar color="transparent"
    position="sticky">
        <Toolbar>
            
            <Typography>EBOKA</Typography>
            <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
                <Tabs textColor="grey" value={value} onChange={(e,val)=> setValue(val)}>
                    <Tab label="Features"></Tab>
                    <Tab label="Price"></Tab>
                    <Tab label="Contact us"></Tab>
                </Tabs>
            </Box>
            <Box display={"flex"} marginLeft={"auto"}>
            <Button 
                //variant="outlined" 
                endIcon={<GTranslateIcon/>}
                sx={{margin:1, borderRadius:2}}
                color="primary">English</Button>
               
                <Button
                startIcon={<AccountBoxIcon/>}
                 LinkComponent={Link} to="/login" 
                //variant="outlined" 
                sx={{margin:1, borderRadius:2}}
                color="primary">Login</Button>
<>
                <Button 
                 LinkComponent={Link} to="/register" 
                variant="outlined" 
                sx={{margin:1, borderRadius:2}} 
                color="primary">Register</Button>
                </>
                
               
            </Box>
        </Toolbar>
    </AppBar>
};

export default Header;