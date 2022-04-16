import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './router/Home';
import Login from "./router/Login"
import Register from "./router/Register"
import NaVbar from "./components/NavBar"
import { Provider } from 'react-redux';
import store from './store/store';
 function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <NaVbar/>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/Login" element={<Login/>}>Login</Route>
        <Route path="/Register" element={<Register/>}>Register</Route>
      </Routes>
    </BrowserRouter> 
    </Provider>
  );
}

export default App;
