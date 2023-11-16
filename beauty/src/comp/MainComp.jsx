import { Container, Row, Col, Image } from "react-bootstrap";
import front from "../asset/front.jpg"
import TypeComp from "./TypeComp";
import ServiceComp from "./ServiceComp";

export default function MainComp() {
  return (
    <div className="container-fluid mt-5 ">
        <Row className="align-items-center">
            <Col xs={8}>
                <Image src={front} fluid roundedCircle/>
            </Col>
            <Col xs={4}>
                <TypeComp />
            </Col>
        </Row>
        <Row className="mb-3">
            <ServiceComp />
        </Row>
    </div>
  )
}