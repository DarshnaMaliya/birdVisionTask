import { Box , Typography, TextField, Button} from "@mui/material";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginCust = () => {
    const dispatch = useDispatch();
    const isCustomer = useSelector((state) => state.isCustomer);
    console.log(isCustomer);
    const [inputs, setInputs] = useState(
        {
            email : "",
            password : ""

        }
    );
    const handleChange = (e) => {
     setInputs(e.target.value);
    }
    const handleLogin = (e) => {
        //e.preventDefault();
        
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
                        
                    {!isCustomer && <> <Typography variant="h5" padding={1} textAlign="center">Login as a Customer</Typography>
                    <TextField required={true} fullWidth onChange={handleChange} name="email" margin="normal" placeholder="Email" type={"email"} value={inputs.email} />
                    <TextField required={true} fullWidth onChange={handleChange} name="password" margin="normal" placeholder="Password" type={"password"} value={inputs.password}  />
                   <span display="block">
                    <Button
                    onClick={handleLogin}
                    size="medium" 
                     color="primary" variant="contained"  type="submit"> Sign in </Button>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button 
                    LinkComponent={Link} to="/forgotpwd"
                    size="medium" 
                     color="primary" variant="text"  type="submit" style={{justifyContent: "flex-end"}}> forget password</Button>
                     </span>
                     <span>
                <Button 
                LinkComponent={Link} to="/register"
                size="medium" 
                     color="primary" variant="text"  type="submit"> Register</Button>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     &nbsp;
                     <Button
                     LinkComponent={Link} to="/loginSP"
                     size="medium" 
                     color="primary" variant="text"  type="submit"> Login as service provider</Button>
                     </span></>
                     }
                     {isCustomer && <>
                        <Typography variant="h5" padding={1} textAlign="center">Login as a Service provider</Typography>
                <TextField required={true} fullWidth onChange={handleChange} name="email" margin="normal" placeholder="Email" type={"email"}  />
                <TextField required={true} fullWidth onChange={handleChange} name="password" margin="normal" placeholder="Password" type={"password"}  />
               <span display="block">
                <Button size="medium" 
                 color="primary" variant="contained"  type="submit"> Sign in </Button>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button size="medium" 
                 color="primary" variant="text" type="submit" style={{justifyContent: "flex-end"}}> forget password</Button>
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
                     </>}
                </Box>
            </form>
        </div>
    );
}

export default LoginCust;