import { Box , Typography, TextField, Button} from "@mui/material";
import { Link } from "react-router-dom";

const RegisterSP = () => {
    const handleChange = (e) => {
       
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
                    <Typography variant="h5" padding={3}>Register as a service provider</Typography>
                    <TextField fullWidth onChange={handleChange} name="contact" margin="normal" placeholder="Contact person" type={"email"}  />
                    <TextField fullWidth onChange={handleChange} name="email" margin="normal" placeholder="Email" type={"email"}  />
                    <TextField fullWidth onChange={handleChange} name="password" margin="normal" placeholder="password" type={"password"}  />
                    <TextField fullWidth onChange={handleChange} name="Confpassword" margin="normal" placeholder="Confirm Password" type={"password"} />
                    <Button fullWidth color="primary" variant="contained" type="submit"> Register</Button>
                    <span>
                <Button 
                LinkComponent={Link} to="/registerCust"
                size="medium" 
                     color="primary" variant="text"  type="submit"> Register As Customer</Button>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

export default RegisterSP;