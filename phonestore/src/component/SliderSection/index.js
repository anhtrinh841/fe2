import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomSlick from '../CustomSlick';

const SliderSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider_section">
            <Container>
                <Row>
                    <Col md={12} lg={9}>
                        <CustomSlick settings={settings}>
                            <div>
                                <div className="single_slider slick-slide">
                                    <img src="./slider4-1.png" alt="" className="img-fluid" />
                                    <div class="slider_content color_two">
                                        <h5>The Xbox One S <br /> Trend</h5>
                                        <h2>Weeky <br /> Deals! Outlet</h2>
                                        <div className="pt-des">
                                            <p><span>25%</span>Starting at <span>$340.00</span></p>
                                        </div>
                                        <a href="shop.html">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single_slider slick-slide">
                                    <img src="./slider4-2.png" alt="" className="img-fluid" />
                                    <div className="slider_content color_two">
                                        <h5>Samsung Brands<br /> Trend</h5>
                                        <h2>Bestseller <br /> Washing Machines</h2>
                                        <div className="pt-des">
                                            <p><span>35%</span>Starting at <span>$120.00</span></p>
                                        </div>
                                        <a href="shop.html">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </CustomSlick>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SliderSection