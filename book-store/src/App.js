import logo from './logo.svg';
import './App.css';
// import SignIn from './components/pages/signin/signin';
import SignUp from './components/pages/signup/signup';
import SignIn from './components/pages/signin/signin';
import Header from './components/dashboard/header/header'
import Cardd from './components/dashboard/card/card';
import ForgetPassword from './components/pages/forgetpassword/forgetpassword';

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      <Header/>
    <Cardd/>
    {/* <ForgetPassword/> */}
      
     
    </div>
  );
}

export default App;
