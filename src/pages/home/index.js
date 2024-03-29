import React from 'react'
import Layout from '../../layout'
import MainPage from './features/homepage'
import OfferCards from './features/offerCards'

const HomePage = () => {
    return (
        <Layout>
            <MainPage />
            <OfferCards />
        </Layout>
    )
}

export default HomePage