import React from 'react'

const HomeCards = ({ title, offerOne, offerTwo, offerThree, offerFour }) => {
    return (
        <>
            <div className='d_flex sh_dw card_bx mt_0 '>
                <h6>{title}</h6>
                <div className='offer_ava'>
                    <div className='current_offer'>
                        <div className='top_lorem'>
                            <figure>
                                <img src={offerOne} alt='offer1' />
                            </figure>
                            <p>Starting ₹199 | Water bottles</p>
                        </div>
                        <div className='top_lorem'>
                            <figure>
                                <img src={offerTwo} alt='offer1' />
                            </figure>
                            <p>Starting ₹299 | Storage containers</p>
                        </div>
                    </div>
                    <div className='current_offer'>
                        <div className='top_lorem'>
                            <figure>
                                <img src={offerThree} alt='offer1' />
                            </figure>
                            <p>Starting ₹199 | Water bottles</p>
                        </div>
                        <div className='top_lorem'>
                            <figure>
                                <img src={offerFour} alt='offer1' />
                            </figure>
                            <p>Starting ₹299 | Storage containers</p>
                        </div>
                    </div>
                </div>
                <a href='/'>See more</a>
            </div>
        </>
    )
}

export default HomeCards
