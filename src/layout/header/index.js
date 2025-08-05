import React, { useEffect, useState } from "react";
import HeaderContent from "../../Components/headerContent";
import SearchBar from "../../Components/searchbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  const handleSignIn = () => {
    navigate("/signin");
  };
  return (
    <header className={scroll ? "scrolled" : ""}>
      <div>
        <div className="nav-belt">
          <div className="nav-left">
            <div className="nav-logo" id="set">
              <figure>
                <img src="../images/amazon_icon.png" alt="amazon_icon" />
              </figure>
              <span>.in</span>
            </div>
            <div className="nav-global-location-slot" id="set">
              <span className="nav-location" />
              <HeaderContent
                upperValue="DelIvering to california"
                lowerValue="Update location"
              />
            </div>
          </div>
          <SearchBar />
          <div className="nav-right">
            <div className="nav-tools" id="set">
              <select>
                <option value selected>
                  En
                </option>
              </select>
            </div>
            <div id="set">
              <HeaderContent
                upperValue="hello, sign in"
                lowerValue="Account & Lists"
                onClick={handleSignIn}
              />
            </div>
            <div id="set">
              <HeaderContent upperValue="Returns" lowerValue="& Orders" />
            </div>
            <div className="nav-cart" id="set">
              <span className="nav-cart-count">0</span>
              <span>cart</span>
            </div>
          </div>
        </div>
        <div className="nav-xshop">
          <ul>
            <li>ALl</li>
            <li>Fresh</li>
            <li>Amazon miniTv</li>
            <li>Sell</li>
            <li>Best Seller</li>
            <li>Today's Deal</li>
            <li>Mobiles</li>
            <li>Electronics</li>
            <li>Customer Service</li>
            <li>Prime</li>
            <li>Gift ideas</li>
            <li>New Release</li>
            <li>Home & Kitchen</li>
            <li>Fashion</li>
            <li>Amazon Pay</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
