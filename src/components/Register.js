import { Button, Box } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <form>
            <Box maxWidth={400}
                    display={"flex"} flexDirection={"column"} alignItems="center" justifyContent={"center"}
                    //boxShadow="10px 10px 20px #ccc"
                    //padding={3}
                    margin="auto"
                    marginTop={20}
                    borderRadius={5}>
        <Button 
        LinkComponent={Link} to="/registerCust" 
         variant="text" 
        sx={{margin:1, borderRadius:2,color:"black",textTransform: 'capitalize'}} 
        endIcon={<ArrowForwardIcon/>}><h3>Register as Customer</h3></Button>

        <Button variant="text" 
        LinkComponent={Link} to="/registerSP" 
        sx={{margin:1, borderRadius:2,color:"black",textTransform: 'capitalize'}} 
        endIcon={<ArrowForwardIcon/>}><h3>Register as Service Provider</h3>
        </Button>
        </Box>
       
        </form>
    )
}

export default Register;