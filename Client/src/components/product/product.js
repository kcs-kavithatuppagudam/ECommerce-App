import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import {addItem,incQty} from '../../redux/cartSlice'

const Product = () => {
  const { id } = useParams();
  const dispatch=useDispatch()

  const [product, setProduct] = useState({});
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProduct();
  },[]);

  const getProduct = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log(err));
    setProduct(res.data);
    setPrice(res.data.price)
  };


  

const incPrice = (productPrice) => {
    setPrice(price + productPrice);
    setQuantity(quantity + 1);
  };

  const decPrice = (productprice) => {
    if (parseFloat(price).toFixed(2) > productprice) {
      setPrice(price - productprice);
    }

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const cartHandler=()=>{
    dispatch(addItem({...product,price:parseFloat(price).toFixed(2),qty:quantity}))
    dispatch(incQty(quantity))
  }
  
  return (
    <>
      <Header />
      {product ? (
        <Container>
          <Row>
           
            <Col lg={{span:3,offset:2}} style={{ marginTop: "50px" }}>
              <img
                src={product.image}
                width="300px"
                height="300px"
                alt={product.title}
              />
            </Col>
            <Col lg={4} style={{ marginTop: "60px" }}>
              <p style={{fontWeight:"bold"}}>{product.title}</p>
              <p>{product.description}</p>
              <p style={{fontWeight:"bold",fontSize:"25px"}}> ${parseFloat(price).toFixed(2)}</p>
              <div>
              <button
                      style={{ color: "blue", marginRight: "10px" }}
                      onClick={() => incPrice(product.price)}
                    >
                      +
                    </button>
                    <span>{quantity}</span>
                    <button
                      style={{ color: "blue", marginLeft: "10px" }}
                      onClick={() => decPrice(product.price)}
                    >
                      -
                  </button>
              </div>
             
              <Button variant="primary" style={{ marginTop: "30px" }} onClick={cartHandler}>
                Add to Cart
              </Button>
              <Link to='/cart'>
              <Button variant="primary" style={{ marginTop: "30px",marginLeft:"40px" }}>
                Go to Cart
              </Button>
              </Link>
              <div>
              <Link to='/dashboard'>
              <Button style={{marginTop:"40px"}}>Back</Button>
              </Link>
              </div> 
            </Col>          
          </Row>
        </Container>
      ) : (
        <div>loading</div>
      )}
      <Footer />
    </>
  );
};
export default Product;
