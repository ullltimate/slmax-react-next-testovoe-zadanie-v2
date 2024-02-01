"use client";
import { getPhotos } from '@/api/photos';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';
import { Col, Form, Pagination, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Picture from '@/components/modal';

export default function Home() {
  const [photos, setPhotos] = useState<any>([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(1);
  const [desPrev, setDesPrev] = useState(true);
  const [desNext, setDesNext] = useState(false);
  const [sort, setSort] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [idImg, setIdImg] = useState('');

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
      <div style={{columnCount:2}}>
        {
         photos && photos.map((el: any) => <Col key={el.id} className='position-relative'><Image src={el.urls.regular} alt='picture' fluid className='mb-3' onClick={() => {setModalShow(true); setModalImg(el.urls.regular); setIdImg(el.id)}}/></Col>)
        }
      </div>
      <Pagination className='justify-content-around'>
        <Pagination.Prev disabled={desPrev} style={{ top: '50%', left: 5}} className='align-items-center position-fixed' onClick={() => prevPage()}><h2><i className="bi bi-chevron-compact-left"></i></h2></Pagination.Prev>
        <Pagination.Next disabled={desNext} style={{ top: '50%', right: 5}} className='align-items-center position-fixed' onClick={() => nextPage()}><h2><i className="bi bi-chevron-compact-right"></i></h2></Pagination.Next>
      </Pagination>
      <Picture
        show={modalShow}
        img={modalImg}
        id={idImg}
        onHide={() => setModalShow(false)}
      />
    </Container>
  )
}
