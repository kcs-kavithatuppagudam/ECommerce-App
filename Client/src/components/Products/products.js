import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  },[]);

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Row className="my">
        {products ? (
          products.map((product,i) => {
            return (
              <>
                <div className="col-md-3" key={product.id}>
                  <Link to={`/product/${product.id}`} style={{textDecoration:"none"}}>
                    <Card className="h-200 text-center p-4 m-3"  key={i}>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.title}
                        style={{ height: "200px" }}
                      />
                      <Card.Body>
                        <Card.Title style={{color:"black"}}>{product.title.slice(0,36)}</Card.Title>
                        <Card.Text
                          style={{ fontWeight: "bold", fontSize: "20px",color:"black"}}
                        >
                          ${product.price}
                        </Card.Text>
                        <Button variant="primary">BUY NOW</Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </>
            );
          })
        ) : (
          <div>loading</div>
        )}
      </Row>
    </div>
  );
};

export default Products;
