import './App.css';
import SignUp from './components/pages/signup/signup';
import SignIn from './components/pages/signin/signin';
import Header from './components/dashboard/header/header'
import Cardd from './components/dashboard/card/card';
import ForgetPassword from './components/pages/forgetpassword/forgetpassword';
import BookDetails from './components/dashboard/bookDetails/bookDetails';
import Cart from './components/dashboard/cart/cart';
import CustomerDetails from './components/dashboard/customerDetails/customerDetails';
import OrderSummery from './components/dashboard/ordersummery/ordersummery';
import OrderSucessful from './components/dashboard/ordersucessful/ordersucessful';
import Router from './components/Routing/Routing';

function App() {
  return (
    <div className="App">
    <Router/>
    </div>
  );
}

export default App;
