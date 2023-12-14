import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

export default function Header() {
  return (
    <Row className='justify-content-between align-items-center mb-3'>
      <Col>
				<Link prefetch={false} href={"/"} className='text-decoration-none text-black'>
					<h1 className='text-uppercase'>Pictures</h1>
				</Link>
			</Col>
      <Col className='text-end'>
				<Link prefetch={false} href={'/login'} className='text-decoration-none text-black'>
					Log In
				</Link>
			</Col>
    </Row>
  )
}
