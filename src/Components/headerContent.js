import React from 'react'

const HeaderContent = ({ upperValue, lowerValue, onClick }) => {
    return (
        <>
            <div className='glow-increase-block' onClick={onClick}>
                <span>{upperValue}</span>
                <span>{lowerValue}</span>
            </div>
        </>
    )
}

export default HeaderContent;
