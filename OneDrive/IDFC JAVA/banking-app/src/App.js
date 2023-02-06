import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateAccount from './component/CreateAccount';
import Login from './component/Login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import Transfer from './component/Transfer';
// import TransactionHistory from './component/TransactionHistory';
import Transaction from './component/Transaction';
import Deposit from './component/Deposit';
import Dashboard from './component/Dashboard';
import Withdraw from './component/Withdraw';
import LoginSuccess from './component/LoginSuccess';


function App() {

  return <div className="container"> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transaction" element={<Transaction />} />
         <Route path="/deposit" element={<Deposit/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path='/withdraw' element={<Withdraw />} />
         <Route path='/loginSuccess' element={<LoginSuccess/>} />
        {/* <Route path="/thistory" element={<TransactionHistory />} /> */}


      </Routes>
    </BrowserRouter>

    
    <ToastContainer/>



  </div>

}

export default App;
