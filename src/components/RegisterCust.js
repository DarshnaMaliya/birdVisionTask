import { Box , Typography, TextField, Button} from "@mui/material";
import { Link } from "react-router-dom";

const RegisterCust = () => {
    
    const handleChange = () => {

    }
    return (
        <div>
            <form>
                <Box maxWidth={560}
                    display={"flex"} flexDirection={"column"}
                     //alignItems="center" 
                     justifyContent={"flex-start"}
                    boxShadow="10px 10px 20px #ccc"
                    padding={1}
                    margin="auto"
                    marginTop={5}
                    borderRadius={5}>
                    <Typography variant="h5" padding={3}>Register as a Customer</Typography>
                    <TextField fullWidth onChange={handleChange} name="contact" margin="normal" placeholder="Contact person" type={"email"}  />
                    <TextField fullWidth onChange={handleChange} name="email" margin="normal" placeholder="Email" type={"email"}  />
                    <TextField fullWidth onChange={handleChange} name="password" margin="normal" placeholder="password" type={"password"}  />
                    <TextField fullWidth onChange={handleChange} name="Confpassword" margin="normal" placeholder="Confirm Password" type={"password"} />
                    <Button fullWidth color="primary" variant="contained" type="submit"> Register</Button>
                    <span>
                <Button 
                LinkComponent={Link} to="/registerSP"
                size="medium" 
                     color="primary" variant="text"  type="submit"> Register As service provider</Button>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <Button 
                     LinkComponent={Link} to="/login"
                     size="medium" 
                     color="primary" variant="text"  type="submit"> Login </Button>
                     </span>
                </Box>
            </form>
        </div>
    );
}

export default RegisterCust;