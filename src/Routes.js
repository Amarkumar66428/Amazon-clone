import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pages from './pages'
import SingIn from './pages/signin/features/singin'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Pages.HomePage />} />
                <Route path="signIn" element={<SingIn />} />
            </Routes>
        </>
    )
}

export default Router
