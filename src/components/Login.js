import { Button, Box, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <form>
            <Box maxWidth={400}
                    display={"flex"} flexDirection={"column"} alignItems="center" justifyContent={"center"}
                    boxShadow="10px 10px 20px #ccc"
                    //padding={3}
                    margin="auto"
                    marginTop={5}
                    borderRadius={5}>
        <Button 
        LinkComponent={Link} to="/loginCust" 
         variant="text" 
        sx={{margin:1, borderRadius:2}} 
        endIcon={<ArrowForwardIcon/>}>Login as Customer</Button>

        <Button variant="text" 
        LinkComponent={Link} to="/loginSP" 
        sx={{margin:1, borderRadius:2}} 
        endIcon={<ArrowForwardIcon/>}>Login as Service Provider
     
        </Button>
                    </Box>
       
        </form>
    )
}

export default Login;