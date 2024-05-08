import React from 'react'
import ProductData from './productData'
const App = () => {
    return(
        
        <>
        <div className='conatiner'>
            {
                ProductData.map((curElm) =>
                    {
                        return (
                            <div className='box'>
                                <div className='contant'>
                                    <div className='img-box'>
                                        <img src={curElm.img} alt={curElm.Title}></img>
                                    </div>
                                    <div className='detail'>
                                        <div className='info'>
                                            <h3>{curElm.Title}</h3>
                                            <p>{curElm.Price}</p>
                                        </div>
                                        <button>View</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }
        </div>


        </>

    )
}

export default product