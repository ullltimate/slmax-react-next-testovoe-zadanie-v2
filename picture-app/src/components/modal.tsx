import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';

export default function Picture(props: any) {
  let favs = localStorage.getItem('favs') || null;
  const [favorites, setFavorites] = useState<any>(favs ?  JSON.parse(favs) : []);

	useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favorites))
  }, [favorites])

  function addFavorites(id: string){
    (favorites.includes(id)) ? setFavorites(favorites.filter((e:string) => e !== id)) : setFavorites(favorites.concat(id))
  }
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
          <Modal.Header closeButton>
            <Button variant='link' className='m-0 text-decoration-none text-black' onClick={() => addFavorites(props.id)}>
							{
								favorites.includes(props.id) ? 
								"Remove from favorites":
								'Add to favorites'
							}
						</Button>    
          </Modal.Header>
          <Modal.Body>
            <Image src={props.img} alt='picture' style={{width: '100%'}}/>
          </Modal.Body>
      </Modal>
    )
  }
  