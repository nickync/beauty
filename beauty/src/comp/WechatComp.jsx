import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import wechat from '../wechat-36.svg';
import { Image } from 'react-bootstrap';

export default function WechatComp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='d-flex flex-row flex-wrap align-items-center justify-content-center'>
      <div>
        <Image src={wechat} fluid style={{width:'2rem'}} className="me-1"/>
      </div>
      <div>
        <Button variant="light" className="px-0" onClick={handleShow}>
          微信
        </Button>
      </div>

        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
              <Offcanvas.Title>二维码</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
          </Offcanvas>
  </div>
  )
}