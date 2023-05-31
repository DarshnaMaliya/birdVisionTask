
import { Route, Routes } from 'react-router-dom';
//import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import LoginCust from './components/LoginCust';
import LoginSP from './components/LoginSP';
import Register from './components/Register';
import RegisterCust from './components/RegisterCust';
import RegisterSP from './components/RegisterSP';
import ForgotPwd from './components/ForgotPwd';
function App() {
  return (
    <div className="App">
      <>
      <header>
        <Header/>
        </header>
        <main>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/loginCust' element={<LoginCust/>}/>
            <Route path='/loginSP' element={<LoginSP/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/registerCust' element={<RegisterCust/>}/>
            <Route path='/registerSP' element={<RegisterSP/>}/>
            <Route path='/forgotpwd' element={<ForgotPwd/>}/>

          </Routes>
        </main>
        </>
    </div>
  );
}

export default App;
