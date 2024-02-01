import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

export default function Header(props: any) {

  return (
    <Row className='justify-content-between align-items-center mb-3'>
      	<Col>
			<Link prefetch={false} href={"/"} className='text-decoration-none text-black text-uppercase h1'>
				Gallery
			</Link>
		</Col>
      	<Col className='text-end'>
	  		<Link href={'/favorites'} className='link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'>
				Favorites
			</Link>	
		</Col>
    </Row>
  )
}
