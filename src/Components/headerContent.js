import React from 'react'

const HeaderContent = ({ upperValue, lowerValue }) => {
    return (
        <>
            <div className='glow-increase-block' >
                <span>{upperValue}</span>
                <span>{lowerValue}</span>
            </div>
        </>
    )
}

export default HeaderContent;
