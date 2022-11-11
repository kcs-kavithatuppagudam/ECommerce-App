import './App.css';
import Home from './components/home/home'
import SignIn from './components/signIn/signIn'
import Register from './components/register/register'
import Dashboard from './components/dashboard/dashboard'
import Product from './components/product/product'
import Signout from './components/signout/signout'
import Cart from './components/cart/cart'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import User from './components/useraccount/User'


function App() {
  return (
    <div className="App">
    <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route  path='/signin' element={<SignIn/>}/>
            <Route path='/register' element={ <Register/>}/>
            <Route path='/dashboard' element={ <Dashboard/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/signout' element={<Signout/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/user' element={<User/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
