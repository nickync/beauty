import { Container, Row, Col, Image } from "react-bootstrap";
import front from "../asset/front.jpg"
import TypeComp from "./TypeComp";
import ServiceComp from "./ServiceComp";
import AboutComp from "./AboutComp";

export default function MainComp({ mainRef }) {
  return (
    <div ref={mainRef} className="container-fluid mt-5">
        <div className="align-items-center justify-content-center row flex-wrap">
            <Col xs={6}>
                <Image src={front} fluid roundedCircle/>
            </Col>
            <Col xs={4}>
                <TypeComp />
            </Col>
        </div>
    </div>
  )
}