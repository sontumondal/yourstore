import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Smartphonedetails from '../../../../Products/smartphone/Smartphonedetails'
import { FaSearch } from "react-icons/fa";


const Search = () => {
  const [input, setInput] = useState("")
  const [outputData, setOutputData] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/products")
        const data = res.data;
        setOutputData(data.products)
        setLoading(false)
      } catch (error) {
        throw error;
     
      }
    })()
  }, [])
  useEffect(() => {
    if (search) {
      const handleapi = async () => {
        try {
          let res = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
          let data = await res.data;
          setOutputData(data.products);
          // console.log(data.products);
        } catch (error) {
          throw error;
        }
      };
      const delaytimer = setTimeout(() => {
        handleapi()
      }, 100);
    }
  }, [search, outputData])
  const handlesubmit = (e) => {
    e.preventDefault()
    setSearch(input)
    // console.log((input));
  }
  return (
    <>
      <Container fluid className='bg-dark'>
        <Row className='pt-5'>
          <Col className='mt-5' >
            <Form onSubmit={handlesubmit}  >
              <div className="searchinput">

                <input type="text" placeholder='search here what u want' value={input} onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'><FaSearch style={{ fontSize: "1.5rem" }} /></button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row>

          <Col >
            {loading && (<h1>Your item is Loading ...</h1>)}
            <div className="smartphone">
              {outputData.length == 0 ? (<p style={{ color: "white" }}>Sorry your search item is not available now
                <br />
                click to <a href="/search">search here</a>
              </p>) : (outputData.map((item) => (
                <Smartphonedetails key={item.id} {...item} />
              )))

              }
              <p style={{ color: "white" }}>and more......</p>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Search
