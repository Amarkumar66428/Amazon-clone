import React, { useEffect, useState } from 'react'

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
                            <div className='glow-increase-block' >
                                <span>DelIvering to california</span>
                                <span>Update location</span>
                            </div>
                        </div>
                    </div>
                    <div className='nav-fill'>
                        <select>
                            <option value selected>All</option>
                        </select>
                        <input placeholder='Search Amazon.in'></input>
                        <div className='nav-lens-container'>
                            <figure>
                                <img src='https://m.media-amazon.com/images/G/01/style-snap/MLT_Icon_x2.png' alt="search_icon" />
                            </figure>
                        </div>
                        <input type='submit' className='nav-submit' />
                    </div>
                    <div className='nav-right'>
                        <a className='nav-tools'>
                            <select>
                                <option value selected>En</option>
                            </select>
                        </a>
                        <a>
                            <div className='glow-increase-block'>
                                <span>hello, sign in</span>
                                <span>Account & Lists</span>
                            </div>
                        </a>
                        <a>
                            <div className='glow-increase-block'>
                                <span>Returns</span>
                                <span>& Orders</span>
                            </div>
                        </a>
                        <a>
                            <div>
                                <span className='nav-cart-count'>0</span>
                            </div>
                            <div>
                                <span>cart</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header