import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getSingleSmartphoneData } from '../../../features/appSlice'
import SingleProductimages from './SingleProductimages'
import { FaAward, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
// import AddtoCart from './AddtoCart'
import Stock from './Stock'

const SingleSmartPhone = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getSingleSmartphoneData(`https://dummyjson.com/products/${id}`))
  }, [])
  const { singleSmartphoneData } = useSelector(state => state.app)
  const { title, description, price, discountPercentage, rating, stock, brand, images } = singleSmartphoneData;
  // console.log(singleSmartphoneData)

  const ratingstar = Array.from({ length: 5 }, (no, index) => {
    let number = index + 0.5;
    return <span key={index}>
      {
        rating >= index + 1 ? (<FaStar />) : rating >= number ? (<FaStarHalfAlt />) : (<AiOutlineStar />)
      }
    </span>
  })
  return (
    <>
      <div className="main">
        <div className="left">
          <SingleProductimages img={images} {...singleSmartphoneData} />

        </div>
        <div className="right">
          <p>Brand : {brand}</p>
          <p>Description : {description}</p>
          <p >Rating : <span style={{ color: "yellow" }}>{ratingstar}</span> (customer Reviews)</p>
          <p>Rs.  : <del>{price}</del></p>
          <p>Special Off :   : {discountPercentage} %</p>
          <p><span><TbTruckDelivery /> (free Delivery)</span>,<span> <FaAward /> (2 years warranty)</span>,<span> <TbTruckReturn /> (3 days return policy)</span></p>
          <p>Available in Sotck  : {stock}pc.(Hurry-Up)<Stock product={singleSmartphoneData} /></p>

        </div>
      </div>
    </>
  )
}

export default memo(SingleSmartPhone)
