import { Button,TextField, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
const ForgotPwd = () => {
    const handleChange = () => {

    }
return(
    <div>
            <form>
                <Box 
                maxWidth={480}
                    display={"flex"} flexDirection={"column"} 
                    alignItems="flex-start" 
                    //justifyContent={"center"}
                    boxShadow="10px 10px 20px #ccc"
                    padding={3}
                    margin="auto"
                    marginTop={5}
                    borderRadius={5}>
                    <Typography variant="h5" padding={1} textAlign="center">Forgot password?</Typography>
                    <TextField fullWidth onChange={handleChange} name="email" margin="normal" placeholder="Email" type={"email"}  />
                    <Button fullWidth size="medium" 
                     color="primary" variant="contained"  type="submit"> Send reset password Link</Button>
                     <span>
                <Button 
                LinkComponent={Link} to="/login"
                size="medium" 
                     color="primary" variant="text"  type="submit"> Login</Button>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <Button
                     LinkComponent={Link} to="/register"
                     size="medium" 
                     color="primary" variant="text"  type="submit"> Register</Button>
                     </span>
                </Box>
            </form>
        </div>
)
}

export default ForgotPwd;