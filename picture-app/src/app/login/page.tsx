import Header from "@/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

export default function Login() {
  return (
  	<Container className='mt-5'>
      <Header/>
			<Row style={{ height: '80vh' }} className='align-items-center'>
				<Col>
					<Card style={{ width: '26rem' }} className="mx-auto text-center">
						<h3 className="m-3">Authorization</h3>
						<Form>
							<FloatingLabel
								controlId="floatingInput"
								label="Email address"
								className="m-3"
							>
								<Form.Control type="email" placeholder="name@example.com" />
							</FloatingLabel>
							<FloatingLabel controlId="floatingPassword" label="Password" className="m-3">
								<Form.Control type="password" placeholder="Password" />
							</FloatingLabel>
						</Form>
						<Button variant="primary" type="submit" className="m-3">
							Log In
						</Button>
						<p className="text-muted">Not a member yet? <Link href='/signup' className="text-decoration-none">Sign Up</Link></p>
    			</Card>
				</Col>
			</Row>
    </Container>
  )
}