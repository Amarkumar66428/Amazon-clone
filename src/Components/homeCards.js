import React from 'react'

const HomeCards = () => {
    return (
        <>
            <div className='d_flex sh_dw card_bx mt_0 '>
                <h3>Get up to 50% off</h3>
                <div className='offer_ava'>
                    <div className='current_offer'>
                        <figure>
                            <img src='../images/offer1.png' alt='offer1' />
                        </figure>
                        <figure>
                            <img src='../images/offer1.png' alt='offer1' />
                        </figure>
                    </div>
                    <div className='current_offer'>
                        <figure>
                            <img src='../images/offer1.png' alt='offer1' />
                        </figure>
                        <figure>
                            <img src='../images/offer1.png' alt='offer1' />
                        </figure>
                    </div>
                </div>
                <a href='/'>See more</a>
            </div>
        </>
    )
}

export default HomeCards
