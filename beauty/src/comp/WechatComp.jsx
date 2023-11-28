import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import wechat from '../wechat-36.svg';
import { Image } from 'react-bootstrap';
import qr from '../asset/qr.png'

export default function WechatComp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='d-flex flex-row flex-wrap align-items-center justify-content-center'>
      <div>
        
      </div>
      <div>
        <Button variant="light" className="px-0 bg-transparent border-none btn border-0" onClick={handleShow}>
          <Image src={wechat} fluid style={{width:'2rem'}} className="me-1 wechat"/>
        </Button>
      </div>

        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
              <Offcanvas.Title>二维码</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='d-flex flex-column align-items-center'>
            <div className='my-2'>
              扫一扫了解更多详情
            </div>
            <div className='my-2'>
              <Image src={qr} />
            </div>
            <div className='my-2'>
              电话：347-622-5571
            </div>
          </Offcanvas.Body>
          </Offcanvas>
  </div>
  )
}