"use client";
import Header from "@/components/header";
import { validationEmail, validationPass } from "@/helpers/helper";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

export default function Login() {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [warning, setWarning] = useState('');
	const [auth, setAuth] = useState(false);
	const errorValid = {
		email: 'The email field should look like this example@gmail.com',
		conEmail: 'Incorrect email',
		pass: 'The password field shouldn`t be empty',
		conPass: 'Incorrect password',
	}
	const router = useRouter();

	function submit(){
		if(!validationEmail(email)){
			setWarning(errorValid.email);
		} else if(!validationPass(pass)){
			setWarning(errorValid.pass);
		} else {
			setWarning('');
			if(email === localStorage.getItem('user')){
				if(pass === localStorage.getItem('pass')){
					localStorage.setItem('auth', 'ok')
					setAuth(true);
					router.push('/favorites');
				} else {
					setWarning(errorValid.conPass)
				}
			} else {
				setWarning(errorValid.conEmail)
			}
		}
	}

  return (
  	<Container className='mt-5'>
      <Header auth={auth}/>
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
								<Form.Control type="email" placeholder="name@example.com" title="example@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
							</FloatingLabel>
							<FloatingLabel controlId="floatingPassword" label="Password" className="m-3">
								<Form.Control type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
							</FloatingLabel>
						</Form>
						<p className="text-danger" style={{fontSize:'0.75em'}}>{warning}</p>
						<Button variant="primary" type="submit" className="m-3" onClick={submit}>
							Log In
						</Button>
						<p className="text-muted">Not a member yet? <Link href='/signup' className="text-decoration-none">Sign Up</Link></p>
    			</Card>
				</Col>
			</Row>
    </Container>
  )
}