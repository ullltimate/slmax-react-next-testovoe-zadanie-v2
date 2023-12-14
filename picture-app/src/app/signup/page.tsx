"use client";
import Header from "@/components/header";
import { validationEmail, validationPass } from "@/helpers/helper";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

export default function Signup() {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [warning, setWarning] = useState('');
	const errorValid = {
		email: 'The email field should look like this example@gmail.com',
		pass: 'The password field shouldn`t be empty',
		conPass: 'You have not confirmed your password',
	}
	const router = useRouter();

	function submit(){
		if(!validationEmail(email)){
			setWarning(errorValid.email);
		} else if(!validationPass(pass) || !validationPass(confirmPass)){
			setWarning(errorValid.pass);
		} else if(pass != confirmPass){
			setWarning(errorValid.conPass);
		} else {
			setWarning('');
			localStorage.setItem('user', email);
			localStorage.setItem('pass', pass);
			router.push('/login');
		}
	}
  return (
  	<Container className='mt-5'>
      <Header/>
			<Row style={{ height: '80vh' }} className='align-items-center'>
				<Col>
					<Card style={{ width: '26rem' }} className="mx-auto text-center">
						<h3 className="m-3">Registration</h3>
						<Form>
							<FloatingLabel
								controlId="floatingInput"
								label="Email address"
								className="m-3"
							>
								<Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} title="example@gmail.com"/>
							</FloatingLabel>
							<FloatingLabel controlId="floatingPassword" label="Password" className="m-3">
								<Form.Control type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
							</FloatingLabel>
              <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="m-3">
								<Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)}/>
							</FloatingLabel>
						</Form>
						<p className="text-danger" style={{fontSize:'0.75em'}}>{warning}</p>
						<Button variant="primary" type="submit" className="m-3" onClick={submit}>
							Sign Up
						</Button>
						<p className="text-muted">Already registered? <Link href='/login' className="text-decoration-none">Log In</Link></p>
    			</Card>
				</Col>
			</Row>
    </Container>
  )
}