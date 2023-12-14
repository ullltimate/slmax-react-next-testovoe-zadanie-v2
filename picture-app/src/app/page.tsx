"use client";
import { getPhotos } from '@/api/photos';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import Image from 'next/image'
import Image from 'react-bootstrap/Image';

export default function Home() {
  const [photos, setPhotos] = useState<any>([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(1);
  const [desPrev, setDesPrev] = useState(true);
  const [desNext, setDesNext] = useState(false);

  function nextPage(){
    if(page === Math.ceil(limit/photos.length)){
      setDesNext(true);
    } else {
      setPage(page+1);
    }
    if(page > 1){
      setDesPrev(false);
    }
  }
  function prevPage(){
    if(page === 1){
      setDesPrev(true);
    } else {
      setPage(page-1);
    }
    if(page < Math.ceil(limit/photos.length)){
      setDesPrev(false);
    }
  }

  useEffect(() => {
    async function photo() {
      const data = await getPhotos(page);
      setPhotos(data?.data);
      setLimit(data?.headers['x-total'])
    }
    photo();
  },[page])

  useEffect(() => {
    console.log(photos)
    console.log(limit)
  })
  return (
    <Container className='mt-5'>
      <Header/>
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
