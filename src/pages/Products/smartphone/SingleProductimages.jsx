import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SingleProductimages = ({ img=[] , title,thumbnail }) => {
    const posterImg=thumbnail;
    const [mainimg, setMainimg] = useState(posterImg)
  const {isLoading,isError}=useSelector(state => state.app)
   const navigate=useNavigate()
    return (
        <>
            <div className="myimg">
            {isLoading && (<strong style={{fontSize:"1rem",color:"white"}}>Loading...</strong>)}
            {isError && (<strong style={{fontSize:"1rem",color:"white"}}>Check your connection</strong>)}
                {
                    img.map((cur, index) => {
                        return (
                            <img src={cur} alt="image"
                                key={index}
                                onClick={() => setMainimg(cur)}
                            />)
                    })
                }
                
            </div>
            <div className="myimg-main">
                <p onClick={()=> navigate(-1)} style={{ color: "violet", fontSize: "1rem" }}>back </p>

                <p>This is : {title}</p>
                <img src={mainimg? mainimg : posterImg } alt={posterImg} />

            </div>
        </>
    )
}

export default memo(SingleProductimages)
