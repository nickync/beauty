import { Col } from "react-bootstrap";
import TypeComp from "./TypeComp";
import SliderComp from "./SliderComp";

export default function MainComp({ mainRef }) {
  return (
    <div ref={mainRef} className="container-fluid mt-5">
        <div className="align-items-center justify-content-center flex-wrap d-flex section1">
            <Col xs={6} className="section1-slider">
                {/* <Image src={front} fluid roundedCircle/> */}
                <SliderComp />
            </Col>
            <Col xs={6} className="section1-text">
                <TypeComp />
            </Col>
        </div>
    </div>
  )
}