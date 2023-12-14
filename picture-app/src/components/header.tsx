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
				<Row>
					<Col>
						<Link prefetch={false} href={'/login'} className='link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'>
							Log In
						</Link>
					</Col>
					<Col lg={3}>
						<Link prefetch={false} href={'/signup'} className='link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'>
							Sign Up
						</Link>
					</Col>
				</Row>
			</Col>
    </Row>
  )
}
