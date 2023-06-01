import { Button, Box } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CustomerActions } from "../store";

const Login = () => {

    //redux implementation

    const dispatch = useDispatch();
    const isCustomer = useSelector((state) => state.isCustomer);
    console.log(isCustomer);
    const handleLogin = () => {
        if (isCustomer) {
            dispatch({ type: 'Customer' });
        }
        else {
            dispatch({ type: 'SP' });
        }
    }
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
                 LinkComponent={Link} to="/loginCust" 
                //    onClick={handleLogin}
                    variant="text"
                    sx={{ margin: 1, color: "black",textTransform: 'capitalize' }}
                    endIcon={<ArrowForwardIcon />}><h3>Login as Customer</h3>
                </Button>


                <Button variant="text"
                    LinkComponent={Link} to="/loginSP"
                    sx={{ margin: 1, borderRadius: 2, color: "black",textTransform: 'capitalize' }}
                    endIcon={<ArrowForwardIcon />}><h3>Login as Service Provider</h3>
                </Button>
            </Box>

        </form>
    )
}

export default Login;