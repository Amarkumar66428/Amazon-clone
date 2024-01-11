import React, { useEffect, useState } from 'react'
import HeaderContent from '../../Components/headerContent';
import SearchBar from '../../Components/searchbar';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);
    return (
        <header className={scroll ? "scrolled" : ""}>
            <div>
                <div className='nav-belt'>
                    <div className='nav-left'>
                        <div className='nav-logo'>
                            <figure>
                                <img src='../images/amazon_icon.png' alt="amazon_icon" />
                            </figure>
                            <span>.in</span>
                        </div>
                        <div className='nav-global-location-slot'>
                            <span className='nav-location' />
                            <HeaderContent upperValue="DelIvering to california" lowerValue="Update location" />
                        </div>
                    </div>
                    <SearchBar />
                    <div className='nav-right'>
                        <a className='nav-tools'>
                            <select>
                                <option value selected>En</option>
                            </select>
                        </a>
                        <a>
                            <HeaderContent upperValue="hello, sign in" lowerValue="Account & Lists" />
                        </a>
                        <a>
                            <HeaderContent upperValue="Returns" lowerValue="& Orders" />
                        </a>
                        <a className='nav-cart'>
                            <div>
                                <span className='nav-cart-count'>0</span>
                            </div>
                            <div>
                                <span>cart</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='nav-xshop'>
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
    )
}

export default Header