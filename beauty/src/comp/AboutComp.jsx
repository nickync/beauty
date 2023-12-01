import { Container, Row, Col } from "react-bootstrap"

export default function AboutComp({aboutRef}) {
  return (
    <Container ref={aboutRef} className="text-dark bg-service" fluid>
    <Row className="my-5">
        <h1>关于</h1>
    </Row>
    <Row className="justify-content-center">
        <Col>
            <Row className="justify-content-center">
                个人简介
            </Row>
            <Row className="justify-content-center">
                黑茶妹
            </Row>   
        </Col>
        <Col>
            <Row className="justify-content-center">
                地址:
            </Row>
            <Row className="justify-content-center">
                36-09 Main St (10.D) 缅街
                {/* <iframe title='Map' className='pt-1 pb-1' src={} width="300" height="150" style={{"border":0}} loading="lazy" allowFullScreen='' referrerPolicy='no-referrer-whendowngrade' ></iframe>           */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.87311644243064!2d-73.83161840783758!3d40.762687569048765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2600ff2db78fb%3A0x420a7eeccff3967d!2s36-09%20Main%20St%2C%20Flushing%2C%20NY%2011354!5e0!3m2!1sen!2sus!4v1701405614185!5m2!1sen!2sus"
                    width={200}
                    height={200}
                    style={{ border:2 }}
                    allowfullscreen="" 
                    loading={'lazy'}
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </Row>   
        </Col>
    </Row>
</Container>
  )
}