import "./Header.css"
import contact from "./../assets/images/user.svg"
import shopping from "./../assets/images/shopping.svg"
import menu from "./../assets/images/menu.svg"
export default function Header() {
    return (
        <div className="nav container">
        <div class="logo-title">
        <h1>Grace</h1>
      </div>
  
      <div class="menu">
        <a href="#" class="active">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </div>
  
      <div class="icons">
        <img src={contact} alt="" />
        <img src={shopping} alt="Icon 2" />
        <img src={menu} alt="Icon 2" />
      </div>
        </div>
    );
}