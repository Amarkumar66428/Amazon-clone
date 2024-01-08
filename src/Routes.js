import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pages from './pages'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Pages.HomePage />} />
            </Routes>
        </>
    )
}

export default Router
