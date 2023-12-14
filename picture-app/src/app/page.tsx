"use client";
import { getPhotos } from '@/api/photos';
//import { getPhotos } from '@/api/photos';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'

export default function Home() {
  const [photos, setPhotos] = useState<any>();
  useEffect(() => {
    async function photo() {
      const data = await getPhotos();
      setPhotos(data);
    }
    photo();
    
  },[])
  useEffect(() => {
    console.log(photos)
  })
  return (
    <Container className='mt-5'>
      <Header/>
      <h1>MAIN PAGE</h1>
      <Row>
        {
         photos && photos.map((el: any) => <Col key={el.id} xs={6} md={4}><Image src={el.urls.full} alt='picture' width={300} height={300} priority={true}/></Col>)
        }
      </Row>
    </Container>
  )
}
