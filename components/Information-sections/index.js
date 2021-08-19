import React from 'react';
import Achivement from './achivements';
import Testimonial from './testimonial';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Collapse,
    Container,
    Row,
    Col,
} from "reactstrap";


const InfoSections = () => {
    const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");

    return (
        <div className="container">
            <Achivement />
            {/* Achivements end */}
            <div className="InfoSections-Wrap">
                <div className="InfoSections-header">
                    <h2>Why Prefer Trust Lite</h2>
                </div>
                <div className="InfoSections-body">
                    <ul className="Info-list">
                        <li className="Info-item">
                            <>
                                <div className="accordion-1">
                                    <Container>
                                        <Row>
                                            <Col className=" ml-auto" md="12">
                                                <div className=" accordion my-3" id="accordionExample">
                                                    <Card>
                                                        <CardHeader
                                                            id="headingOnee"
                                                            aria-expanded={openedCollapse === "collapseOnee"}>
                                                            <h5 className=" mb-0">
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenedCollapse(
                                                                            openedCollapse === "collapseOnee"
                                                                                ? ""
                                                                                : "collapseOnee"
                                                                        )
                                                                    }
                                                                    className=" w-100 text-primary text-left"
                                                                    color="link" >
                                                                    Directly from the Producer{" "}
                                                                </Button>
                                                            </h5>
                                                        </CardHeader>
                                                        <Collapse
                                                            isOpen={openedCollapse === "collapseOnee"}
                                                            aria-labelledby="headingOnee"
                                                            data-parent="#accordionExample"
                                                            id="collapseOnee">
                                                            <CardBody className=" opacity-8">
                                                            Order directly from the Producer, artisan or farmers and get your order delivered straight to your home
                                                            </CardBody>
                                                        </Collapse>
                                                    </Card>
                                                    <Card>
                                                        <CardHeader
                                                            id="headingTwo"
                                                            aria-expanded={openedCollapse === "collapseTwo"}>
                                                            <h5 className=" mb-0">
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenedCollapse(
                                                                            openedCollapse === "collapseTwo"
                                                                                ? ""
                                                                                : "collapseTwo"
                                                                        )
                                                                    }
                                                                    className=" w-100 text-primary text-left collapsed"
                                                                    color="link">
                                                                    Efficient &Hygienic Process{" "}
                                                                </Button>
                                                            </h5>
                                                        </CardHeader>
                                                        <Collapse
                                                            isOpen={openedCollapse === "collapseTwo"}
                                                            aria-labelledby="headingTwo"
                                                            data-parent="#accordionExample"
                                                            id="collapseTwo">
                                                            <CardBody className=" opacity-8">
                                                            The curated meal choice and individual ordering is just fantastic! Always something for everyone on the menus. We insist that all our partners use state of the art processing facilities and world class practises and highly skilled employees to ensure your every order is packed just right and delivered fresh to your home.</CardBody>
                                                        </Collapse>
                                                    </Card>
                                                    <Card>
                                                        <CardHeader
                                                           id="headingThree"
                                                            aria-expanded={openedCollapse === "collapseThree"}>
                                                            <h5 className=" mb-0">
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenedCollapse(
                                                                            openedCollapse === "collapseThree"
                                                                                ? ""
                                                                                : "collapseThree"
                                                                        )
                                                                    }
                                                                    className=" w-100 text-primary text-left collapsed"
                                                                    color="link">
                                                                    End-to-End Service{" "}
                                                                </Button>
                                                            </h5>
                                                        </CardHeader>
                                                        <Collapse
                                                            isOpen={openedCollapse === "collapseThree"}
                                                            aria-labelledby="headingThree"
                                                            data-parent="#accordionExample"
                                                            id="collapseThree">
                                                            <CardBody className=" opacity-8">
                                                            With a dedicated account manager our team is on hand to ensure everything runs smoothly. Reach us real time via phone, chat or email and trust there's a real person who knows your needs on the other end . We want to make healthy, delicious food accessible in people's daily lives by connecting them with Bangladesh’s most innovative and quality focused, locally produced products and Homemade ready meals.</CardBody>
                                                        </Collapse>
                                                    </Card>
                                                    <Card>
                                                        <CardHeader
                                                            id="headingFour"
                                                            aria-expanded={openedCollapse === "collapseFour"}>
                                                            <h5 className=" mb-0">
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenedCollapse(
                                                                            openedCollapse === "collapseFour"
                                                                                ? ""
                                                                                : "collapseFour"
                                                                        )
                                                                    }
                                                                    className=" w-100 text-primary text-left"
                                                                    color="link">
                                                                    Right Price and Fastest Home Delivery{" "}
                                                                </Button>
                                                            </h5>
                                                        </CardHeader>
                                                        <Collapse
                                                            isOpen={openedCollapse === "collapseFour"}
                                                            aria-labelledby="headingFour"
                                                            data-parent="#accordionExample"
                                                            id="collapseFour">
                                                            <CardBody className=" opacity-8">
                                                            TrustLite guarantees right price and fastest home delivery service than others to any destination across divisional city. Because of – We are convenience with confidence We are simplicity, We are hope We are the eco of a new era We are the end of queues. To simplify your life we exist and to ensure your comfort we work. With one click choose and buy without delay anywhere and anytime Then relax and rest while the purchase at your door is delivered. Yes it's true.</CardBody>
                                                        </Collapse>
                                                    </Card>
                                                    <Card>
                                                        <CardHeader
                                                            id="headingFifth"
                                                            aria-expanded={openedCollapse === "collapseFifth"}>
                                                            <h5 className=" mb-0">
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenedCollapse(
                                                                            openedCollapse === "collapseFifth"
                                                                                ? ""
                                                                                : "collapseFifth"
                                                                        )
                                                                    }
                                                                    className=" w-100 text-primary text-left"
                                                                    color="link">
                                                                    Money Back Guarantee{" "}
                                                                </Button>
                                                            </h5>
                                                        </CardHeader>
                                                        <Collapse
                                                            isOpen={openedCollapse === "collapseFifth"}
                                                            aria-labelledby="headingFifth"
                                                            data-parent="#accordionExample"
                                                            id="collapseFifth">
                                                            <CardBody className=" opacity-8">
                                                            Satisfied with your purchase or products on TrustLite? Leave a positive comment. Not satisfied? Report the problem, our customer service is ready to solve the problem. Otherwise you will be refunded and Money back guarantee.</CardBody>
                                                        </Collapse>
                                                    </Card>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </>

                        </li>
                        <li className="Info-item">
                            <img src="/images/stayhome.jpg" />
                        </li>
                        <li className="Info-item">
                        <>
                                <div className=" accordion-1">
                                    <Container>
                                        <Row>
                                            <Col className=" ml-auto" md="12">
                                                <div className=" accordion my-3" id="accordionExample">
                                                    <Card>
                                                        <CardHeader
                                                            id="headingSixth"
                                                            aria-expanded={openedCollapse === "collapseSixth"}>
                                                            <h5 className=" mb-0">
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenedCollapse(
                                                                            openedCollapse === "collapseSixth"
                                                                                ? ""
                                                                                : "collapseSixth"
                                                                        )
                                                                    }
                                                                    className=" w-100 text-primary text-left"
                                                                    color="link"
                                                                >
                                                                    Packaged Sustainably & Safety Certified{" "}
                                                                </Button>
                                                            </h5>
                                                        </CardHeader>
                                                        <Collapse
                                                            isOpen={openedCollapse === "collapseSixth"}
                                                            aria-labelledby="headingSixth"
                                                            data-parent="#accordionExample"
                                                            id="collapseSixth">
                                                            <CardBody className=" opacity-8">
                                                            The products are freshly packaged on the farms using sustainable packaging made from recycled raw materials and sent directly to you. That too by the top lab in Bangladesh! Like premium Chicken certified to be free of antibiotic-reduce . And fresh Fish , certified to be free of harmful chemicals.
                                                            </CardBody>
                                                        </Collapse>
                                                    </Card>
                                                    <Card>
                                                        <CardHeader
                                                            id="headingSaventh"
                                                            aria-expanded={openedCollapse === "collapseSaventh"}>
                                                            <h5 className=" mb-0">
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenedCollapse(
                                                                            openedCollapse === "collapseSaventh"
                                                                                ? ""
                                                                                : "collapseSaventh"
                                                                        )
                                                                    }
                                                                    className=" w-100 text-primary text-left collapsed"
                                                                    color="link">
                                                                    Locally Produced Products{" "}
                                                                </Button>
                                                            </h5>
                                                        </CardHeader>
                                                        <Collapse
                                                            isOpen={openedCollapse === "collapseSaventh"}
                                                            aria-labelledby="headingSaventh"
                                                            data-parent="#accordionExample"
                                                            id="collapseSaventh">
                                                            <CardBody className=" opacity-8">
                                                            With the motto “prevention is better than cure" at heart TrustLite is ensuring locally produced organic ,natural products ready to cook items and Homemade ready meals by our specialized chefs from marginal farmers ,small manufacturer and entrepreneurs</CardBody>
                                                        </Collapse>
                                                    </Card>
                                                    <Card>
                                                        <CardHeader
                                                            id="headingEight"
                                                            aria-expanded={openedCollapse === "collapseEight"}>
                                                            <h5 className=" mb-0">
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenedCollapse(
                                                                            openedCollapse === "collapseEight"
                                                                                ? ""
                                                                                : "collapseEight"
                                                                        )
                                                                    }
                                                                    className=" w-100 text-primary text-left collapsed"
                                                                    color="link">
                                                                    Reliable, Safe and Healthy{" "}
                                                                </Button>
                                                            </h5>
                                                        </CardHeader>
                                                        <Collapse
                                                            isOpen={openedCollapse === "collapseEight"}
                                                            aria-labelledby="headingEight"
                                                            data-parent="#accordionExample"
                                                            id="collapseEight">
                                                            <CardBody className=" opacity-8">
                                                            We will sell only the product that we would eat ourselves. Every single product is handpicked by a team with years of experience. If it's not fresh and local , we won't sell it. We always try to ensure healthy foods and locally produced products Even we are hardly maintenance safe and hygienic.</CardBody>
                                                        </Collapse>
                                                    </Card>
                                                    <Card>
                                                        <CardHeader
                                                            id="headingNine"
                                                            aria-expanded={openedCollapse === "collapseNine"}>
                                                            <h5 className=" mb-0">
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenedCollapse(
                                                                            openedCollapse === "collapseNine"
                                                                                ? ""
                                                                                : "collapseNine"
                                                                        )
                                                                    }
                                                                    className=" w-100 text-primary text-left"
                                                                    color="link">
                                                                    Save Time and Money{" "}
                                                                </Button>
                                                            </h5>
                                                        </CardHeader>
                                                        <Collapse
                                                            isOpen={openedCollapse === "collapseNine"}
                                                            aria-labelledby="headingNine"
                                                            data-parent="#accordionExample"
                                                            id="collapseNine">
                                                            <CardBody className=" opacity-8">
                                                            A complete one stop digital supermarket at your door. Specially we provide clean-up washed , chopping, ready to cook, homemade ready meals and customized domestic solutions to the working professional who can't meet up due to work and timing challenges. TrustLite is more cost effective than other most other platforms.</CardBody>
                                                        </Collapse>
                                                    </Card>
                                                    <Card>
                                                        <CardHeader
                                                            id="headingTen"
                                                            aria-expanded={openedCollapse === "collapseTen"}>
                                                            <h5 className=" mb-0">
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenedCollapse(
                                                                            openedCollapse === "collapseTen"
                                                                                ? ""
                                                                                : "collapseTen"
                                                                        )
                                                                    }
                                                                    className=" w-100 text-primary text-left"
                                                                    color="link">
                                                                    Transparency and Integrity{" "}
                                                                </Button>
                                                            </h5>
                                                        </CardHeader>
                                                        <Collapse
                                                            isOpen={openedCollapse === "collapseTen"}
                                                            aria-labelledby="headingTen"
                                                            data-parent="#accordionExample"
                                                            id="collapseTen">
                                                            <CardBody className=" opacity-8">
                                                            We will charge only for what you buy. Doesn't everyone do this? Not really. Most other places first weight the meat or fish then cut up the pieces and throw out the parts which aren't fit to eat , such as offal, gizzard, wingtips etc. But you still pay based on the orginal weight even though what you finally get is 10% to 30% less. At TrustLite 1 kg you will get exactly 1 kg. And that meat or fish will be only the best bits more meat and less bones. So if we look like we cost a little more than others. Thanks for reading. Now you know what we have set out to do and how we are doing it. If you find us slipping, haul us up .We will set it right and ensure that all is happy again. That's the TrustLite promise.</CardBody>
                                                        </Collapse>
                                                    </Card>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </>
                        </li>
                    </ul>
                </div>
            </div>
            {/* end */}
            <div className="How-works">
                <div className="How-works-header">
                    <h2>How it Works</h2>
                    {/* <p>TrustLite is your one stop digital supermarket.It selects for you locally best produced products,ready to cook and homemade ready meals to do the shoping as in the countryside</p> */}
                </div>
                <div className="How-works-body">
                   <p>TrustLite is your one stop digital supermarket.It selects for you locally best produced products,ready to cook and homemade ready meals to do the shoping as in the countryside</p>                                                
                   <img src="/images/cover.jpg" />                                                     
                </div>
            </div>
            {/* end */}
            <div className="OurCustomerSay">
                <div className="heading">
                    <h2>Hear what our customers have to say</h2>                                                
                </div>
                <div className="Testimonial-slide">
                    <Testimonial />  
                </div>                                                   
            </div>                        
        </div>


    )
};


export default InfoSections