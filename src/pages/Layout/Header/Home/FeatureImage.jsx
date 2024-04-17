import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEcommerceData } from '../../../../features/appSlice'
import { Col, Container, Row } from 'react-bootstrap'
import FeatureImageDetails from './FeatureImageDetails'

const FeatureImage = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getEcommerceData())
    },[])
  const {eProducts}=useSelector(state => state.app)

  return (
    <>
       <Container fluid className='bg-dark'>
        <Row>
          <Col >
          
          <div className="smartphone">
          {eProducts.products && eProducts.products.slice(0,6).map((item)=>(
          <FeatureImageDetails key={item.id} {...item}/>
          ))}
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FeatureImage
