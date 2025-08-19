import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import action from '../assets/images/action.png';
import adventure from '../assets/images/adventure.png';
import crime from '../assets/images/crime.png';
import family from '../assets/images/family.png';
import law from '../assets/images/law.png';
import manga from '../assets/images/manga.png';
import romance from '../assets/images/romance.png';
import racing from '../assets/images/racing.png';
import novel from '../assets/images/novel.png';


const CategoriesHome = () => {

    return(
        <>
            <Container className="g4 mb-5 mt-5">
                <div>
                    <h1 className="animated-gradient-text text-center">TOP CATEGORIES</h1>
                </div>
            </Container>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4} className="card-style g4 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={action} />
                            <Card.Body>
                                <Card.Title>ACTION</Card.Title>
                                <Card.Text>
                                    Dive into the world of Action.    
                                </Card.Text>
                                <Button variant="primary">Search</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="g4 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={adventure} />
                            <Card.Body>
                                <Card.Title>ADVENTURE</Card.Title>
                                <Card.Text>
                                    Uff wanna dive into some adventure...    
                                </Card.Text>
                                <Button variant="primary">Search</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="g4 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={crime} />
                            <Card.Body>
                                <Card.Title>CRIME THRILLER</Card.Title>
                                <Card.Text>
                                    Oh yeah our favourites...    
                                </Card.Text>
                                <Button variant="primary">Search</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="g4 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={family} />
                            <Card.Body>
                                <Card.Title>FAMILY ENTERTAINER</Card.Title>
                                <Card.Text>
                                    Somebody loves this category...   
                                </Card.Text>
                                <Button variant="primary">Search</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="g4 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={law} />
                            <Card.Body>
                                <Card.Title>LAW AND ORDER</Card.Title>
                                <Card.Text>
                                    One of the big fan of this genere, wanna check out...    
                                </Card.Text>
                                <Button variant="primary">Search</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="g4 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={manga} />
                            <Card.Body>
                                <Card.Title>MANGA</Card.Title>
                                <Card.Text>
                                    GenZ's favourite...    
                                </Card.Text>
                                <Button variant="primary">Search</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="g4 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={romance} />
                            <Card.Body>
                                <Card.Title>ROMANCE</Card.Title>
                                <Card.Text>
                                    Well Somebody is here to take a look    
                                </Card.Text>
                                <Button variant="primary">Search</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="g4 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={racing} />
                            <Card.Body>
                                <Card.Title>RACING</Card.Title>
                                <Card.Text>
                                    Stimulating as always   
                                </Card.Text>
                                <Button variant="primary">Search</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="g4 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={novel} />
                            <Card.Body>
                                <Card.Title>NOVEL'S</Card.Title>
                                <Card.Text>
                                    Check out world of classic novels..    
                                </Card.Text>
                                <Button variant="primary">Search</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default CategoriesHome;