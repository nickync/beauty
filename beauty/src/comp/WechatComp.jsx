import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function WechatComp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <Button variant="light" onClick={handleShow}>
        微信
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>二维码</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
        </Offcanvas>
  </>
  )
}