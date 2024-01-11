import React from 'react'
import HomeCards from '../../../Components/homeCards'

const OfferCards = () => {
    return (
        <section className='offer_section'>
            <div className='conta_iner'>
                <div className='offer_cards'>
                    <div className='top_offers'>
                        <HomeCards />
                        <HomeCards />
                        <HomeCards />
                        <HomeCards />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferCards
