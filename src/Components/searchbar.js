import React from 'react'

const SearchBar = () => {
    return (
        <div className='nav-fill'>
            <div className='nav-search'>
                <select>
                    <option value selected>All</option>
                    <option value >Electronics</option>
                    <option value >Alexa Skills</option>
                    <option value >Amazon Devices</option>
                    <option value >Amazon Fashion</option>
                    <option value >Amazon Fresh</option>
                    <option value >Amazon Pharmacy</option>
                    <option value >Appliance</option>
                    <option value >Apps and Games</option>
                    <option value >Audible Audiobooks</option>
                    <option value >Baby</option>
                    <option value >Beauty</option>
                </select>
                <input placeholder='Search Amazon.in'></input>
                <div className='nav-lens-container'>
                    <figure>
                        <img src='https://m.media-amazon.com/images/G/01/style-snap/MLT_Icon_x2.png' alt="search_icon" />
                    </figure>
                </div>
                <button type='submit' className='nav-submit' />
            </div>
        </div>
    )
}

export default SearchBar
