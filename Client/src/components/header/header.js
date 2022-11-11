import { useSelector } from "react-redux";
import { Link,useNavigate} from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import "./header.css";
import Dropdown from "react-bootstrap/Dropdown";



const Header = () => {
  const user = useSelector((state) => state.loginUser.user);
  const cartItems = useSelector((state) => state.cart.quantity);
  const navigate=useNavigate()
  



  return (
    <>
      <div className="header">
        <span className="title">ECommerce Website</span>
        {user?.uname ? (
          <span className="cart">
            <FiShoppingCart/>({cartItems})
          </span>
        ) : null}
        <Dropdown className="dropdownContainer">
          <Dropdown.Toggle id="dropdown-basic">
            {user?.uname ? (
              user.uname
            ) : (
              <span onClick={() => navigate("/signin")}>
                <FaSignInAlt />
                signin         
              </span>
            )}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item><Link to='/user' style={{textDecoration:'none',color:"black"}}>view account</Link></Dropdown.Item>
            {user?.uname ? (
              <>
                <Dropdown.Item ><Link to='/cart' style={{textDecoration:'none',color:"black"}}>view cart</Link></Dropdown.Item>
                <Dropdown.Item><Link to='/dashboard' style={{textDecoration:'none',color:"black"}}>Dashboard</Link></Dropdown.Item>
              </>
            ) : null}

            <Dropdown.Item href='/signout'>Signout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default Header;
