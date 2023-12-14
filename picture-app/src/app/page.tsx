"use client";
import { getPhotos } from '@/api/photos';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Col, Form, Pagination, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import Image from 'next/image'
import Image from 'react-bootstrap/Image';

export default function Home() {
  const [photos, setPhotos] = useState<any>([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(1);
  const [desPrev, setDesPrev] = useState(true);
  const [desNext, setDesNext] = useState(false);
  const [sort, setSort] = useState('');

  function nextPage(){
    setPage(page+1);
  }
  function prevPage(){
    setPage(page-1);
  }

  useEffect(() => {
    async function photo() {
      const data = await getPhotos(page, sort);
      setPhotos(data?.data);
      setLimit(data?.headers['x-total'])
    }
    photo();
  },[page, sort])

  useEffect(() => {
    if(page === 1){
      setDesPrev(true);
      setDesNext(false);
    } else if (page === Math.ceil(limit/photos.length)){
      setDesPrev(false);
      setDesNext(true);
    } else {
      setDesNext(false);
      setDesPrev(false);
    }
  }, [page, limit, photos])
  
  return (
    <Container className='mt-5'>
      <Header/>
      <Row className='mb-3'>
        <Col></Col>
        <Col lg={2} md={3}>
          <Form.Select aria-label="Default select example" onChange={(e: any) => setSort(e.target.value)}>
            <option>Sort</option>
            <option value="latest">latest</option>
            <option value="oldest">oldest</option>
            <option value="popular">popular</option>
          </Form.Select>
        </Col>
      </Row>
      <div style={{columnCount:3}}>
        {
         photos && photos.map((el: any) => <Col key={el.id}><Image src={el.urls.regular} alt='picture' fluid className='mb-3'/></Col>)
        }
      </div>
      <Pagination className='justify-content-around'>
        <Pagination.Prev disabled={desPrev} style={{width:'100px'}} className='text-align-center' onClick={() => prevPage()}>Previos</Pagination.Prev>
        <Pagination.Next disabled={desNext} style={{width:'100px'}} className='text-align-center' onClick={() => nextPage()}>Next</Pagination.Next>
      </Pagination>
    </Container>
  )
}
