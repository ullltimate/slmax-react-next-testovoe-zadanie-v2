"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getPhoto } from "@/api/photos";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export default function Favorites() {
  let favs = localStorage.getItem('favs');
  const [favorites, setFavorites] = useState<any>(favs ?  JSON.parse(favs) : []);
  const [favsPhoto, setFavsPhoto] = useState<any>([]);

  useEffect(() => {
    Promise.all(favorites.map(async (e:any) => await getPhoto(e))).then((res:any) => setFavsPhoto(res))
  },[favorites])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favorites))
  }, [favorites])

  function addFavorites(id: string){
    if(favorites.includes(id)){
      setFavorites(favorites.filter((e:string) => e !== id))
    }else{
      setFavorites(favorites.concat(id))
    }
  }

  return (
  	<Container className='mt-5'>
      <Header/>
      {
        favorites.length === 0
        &&
        <h2 className='text-center mt-5'>Not found favorites picture</h2>
      }
      <div style={{columnCount:2}}>
        {
          favsPhoto.map((el: any) => <Col key={el.id} className='position-relative'><Image src={el.urls.regular} alt='picture' fluid className='mb-3'/><i id={el.id} className={`bi bi-star${favorites.includes(el.id) ? '-fill' : ''} pe-1 position-absolute top-0 end-0 text-warning`} style={{cursor: 'pointer'}} onClick={() => addFavorites(el.id)}></i></Col>)
        }
      </div>
    </Container>
  )
}