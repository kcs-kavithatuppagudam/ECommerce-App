import React, { useEffect} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Products  from "../Products/products";
import axios from "axios";
import { useDispatch } from "react-redux";
import {getUser} from '../../redux/userSlice'

const Dashboard = () => {

  const dispatch=useDispatch()

  useEffect(() => {
    userAuth()
  },[])

  const userAuth = () => {
    axios.get('http://localhost:4000/dashboard/', {
        headers: {
          'x-token': localStorage.getItem('token')
        },
      })
      .then((res) => {    
        dispatch(getUser(res.data))
      })
      .catch((err) => {
        console.log(err);
      })

  }

  return (
    <div>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
};

export default Dashboard;
