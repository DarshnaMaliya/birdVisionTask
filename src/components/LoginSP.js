import { Box , Typography, TextField, Button} from "@mui/material";
import { Link } from "react-router-dom";
const LoginSP = () => {
    const handleChange = (e) => {
       
    }
    return (
        <div>
        <form>
            <Box 
            maxWidth={560}
                display={"flex"} flexDirection={"column"} 
                alignItems="flex-start" 
                //justifyContent={"center"}
                boxShadow="10px 10px 20px #ccc"
                padding={3}
                margin="auto"
                marginTop={5}
                borderRadius={5}>
                <Typography variant="h5" padding={1} textAlign="center">Login as a Service provider</Typography>
                <TextField required={true} fullWidth onChange={handleChange} name="email" margin="normal" placeholder="Email" type={"email"}  />
                <TextField required={true} fullWidth onChange={handleChange} name="password" margin="normal" placeholder="Password" type={"password"}  />
               <span display="block">
                <Button size="medium" 
                 color="primary" variant="contained"  type="submit"> Sign in </Button>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button size="medium" 
                 color="primary" variant="text"  type="submit" style={{justifyContent: "flex-end"}}> forget password</Button>
                 </span>
                 <span>
            <Button 
            LinkComponent={Link} to="/register"
            size="medium" 
                 color="primary" variant="text"  type="submit"> Register</Button>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <Button 
                 LinkComponent={Link} to="/loginCust"
                 size="medium" 
                 color="primary" variant="text"  type="submit"> Login as customer</Button>
                 </span>
            </Box>
        </form>
    </div>
    );
}

export default LoginSP;