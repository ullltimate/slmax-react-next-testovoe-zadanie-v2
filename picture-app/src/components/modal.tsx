import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Picture(props: any) {

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
         >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
      </Modal>
    )
  }
  