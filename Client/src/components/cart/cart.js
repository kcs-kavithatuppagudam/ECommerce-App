import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {FiShoppingCart} from 'react-icons/fi'
import {delItem,decQty} from '../../redux/cartSlice'

const Cart = () => {
  const dispatch=useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems);
 const handleDel=(productId)=>{
  dispatch(decQty(productId))
  dispatch(delItem(productId))
  dispatch(decQty(productId))
 }
  return (
    <div>
      <Header />
      {cartItems?.length !==0 ?(cartItems.map((product, i) => {
        return (
          <div style={{ marginTop: "20px" }}>
            <Container>
              <Row>
                <Col lg={{span:4,offset:4}}>
                  <img
                    src={product.image}
                    width="100px"
                    height="100px"
                    alt={product.title}
                  />
                  <div>{product.title}</div>
                  <div style={{ fontWeight: "bold" }}>${product.price}</div>
                  <Link to={`/product/${product.id}`} >
                  <button>Back to Product</button>
                  </Link>
                  <button style={{marginLeft:"20px"}} onClick={()=>handleDel(product.id)} >Delete</button>
                </Col>
              </Row>
            </Container>
          </div>
        )
      })):(<div style={{fontWeight:"bold",marginTop:"100px",fontSize:"30px"}}><FiShoppingCart/>  is empty</div>)
      }
      <Footer />
    </div>
  );
};

export default Cart;
