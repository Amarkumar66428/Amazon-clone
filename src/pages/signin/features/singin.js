import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingIn = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/")
    }
    return (
        <section className='signin-page'>
            <div className='signin-area'>
                <div className='logo-bx' onClick={handleBack}>
                    <figure>
                        <img src='../images/amazon_icon_Dark.png' alt="amazon_icon" />
                    </figure>
                    <span>.in</span>
                </div>
                <div className='signin-bx'>
                    <h2>Sign in</h2>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="email">Email or mobile phone number</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <button>Continue</button>
                        </div>
                        <div className='form-check'>
                        </div>
                    </form>
                    <p className='conditions-privacy'>By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span></p>
                    <div className='need-help'>
                        <i className='fas fa-arrow-right' />
                        <p>Need help?</p>
                    </div>
                    <hr className='custom-hr' />
                    <div className='buy-shop'>
                        <p>Buying for work?</p>
                        <p>Shop on Amazon Business</p>
                    </div>
                </div>
                <div className='create-account'>
                    <hr className='custom-hr' />
                    <p>New to Amazon?</p>
                </div>
                <button className='create-btn'>Create your Amazon account</button>
            </div>
        </section>
    )
}

export default SingIn
