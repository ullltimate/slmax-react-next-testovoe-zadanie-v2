import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Container className='mt-5'>
      <Header/>
      <h1>MAIN PAGE</h1>
    </Container>
  )
}
