import React from 'react'

const Footer = () => {
    return (
        <footer>
            <section className='sec-bck-top'>
                <div className='conta_iner'>
                    <div className='main_footer'>
                        <div className='bck_top'>
                            <p>Back to top</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sec-know-us'>
                <div className='conta_iner'>
                    <div className='main_footer'>
                        <div className='know_us'>
                            <h2>Get to Know Us</h2>
                            <ul>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Press Releases</li>
                                <li>Amazon Science</li>
                            </ul>
                        </div>
                        <div className='know_us'>
                            <h2>Connect with Us</h2>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter </li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className='know_us'>
                            <h2>Make Money with Us</h2>
                            <ul>
                                <li>Sell on Amazon</li>
                                <li>Sell under Amazon Accelerator</li>
                                <li>Protect and Build Your Brand</li>
                                <li>Amazon Global Selling</li>
                                <li>Become an Affiliate</li>
                                <li>Fulfilment by Amazon</li>
                                <li>Advertise Your Products</li>
                                <li>Amazon Pay on Merchants</li>
                            </ul>
                        </div>
                        <div className='know_us'>
                            <h2>Let Us Help You</h2>
                            <ul>
                                <li>COVID-19 and Amazon</li>
                                <li>Your Account</li>
                                <li>Returns Centre</li>
                                <li>100% Purchase Protection</li>
                                <li>Amazon App Download</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='conta_iner'>
                    <div className='footer-middle' >
                        <div className='footer-lang'>
                            <figure>
                                <img src='../images/amazon_icon.png' alt="amazon_icon" />
                            </figure>
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                        <ul className='footer-country'>
                            <li>Australia</li>
                            <li>Brazil</li>
                            <li>Canada</li>
                            <li>China</li>
                            <li>France</li>
                            <li>Germany</li>
                            <li>Italy</li>
                            <li>Japan</li>
                            <li>Mexico</li>
                            <li>Netherlands</li>
                            <li>Poland</li>
                            <li>Singapore</li>
                            <li>Spain</li>
                            <li>Turkey</li>
                            <li>United Arab Emirates</li>
                            <li>United Kingdom</li>
                            <li>United States</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='sec-bck-bot'>
                <div className='conta_iner'>
                    <div className='footer-bottom'>
                        <ul className='footer-more'>
                            <li><span>AbeBooks</span><br />Books, art <br /> & collectibles</li>
                            <li><span>Amazon Web Services</span><br />Scalable Cloud <br />Computing Services</li>
                            <li><span>Audible</span><br /> Download <br /> Audio Books</li>
                            <li><span>IMDb</span><br />Movies, TV <br />& Celebrities</li>
                        </ul>
                        <ul className='footer-more'>
                            <li><span>Shopbop</span><br />Designer<br /> Fashion Brands</li>
                            <li><span>Amazon Business</span><br />Everything For<br />Your Business</li>
                            <li><span>Prime Now</span><br /> 2-Hour Delivery<br /> on Everyday Items</li>
                            <li><span>Amazon Prime Music</span><br /> 100 million songs, ad-free<br />Over 15 million podcast episodes</li>
                        </ul>
                    </div>
                    <div className='footer-end'>
                        <div className='footer-legal'>
                            <p>Conditions of Use & Sale</p>
                            <p>Privacy Notice </p>
                            <p>Interest-Based Ads</p>
                        </div>
                        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer 
