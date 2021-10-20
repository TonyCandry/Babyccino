import React, { useState } from 'react'
import Nav from './1.TopScreen'
import Bottom from './2.BottomScreen'
import { Button, Card, CardBody, CardText, CardTitle, CardLink, Container, Row, Col, Table, Form, FormGroup, Label, Input } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import { faBrain, faHeart, faVideo } from '@fortawesome/free-solid-svg-icons'
import anniversaire from './images/Anniversaire_4.jpg'
import icecreamtruck from './images/soft_play3.jpg'
import furnitures from './images/soft_play1.jpg'
import kids from './images/kids_1.jpg'
import kids2 from './images/kids_4.jpg'
import kids3 from './images/kids_3.jpg'
import food from './images/food_1.jpeg'
import reception from './images/reception_1.jpg'
import play from './images/play.png'
import Jemma from './images/Jemma.jpg'

function AccueilScreen() {
    const [email, setEmail] = useState('');
    const [emailError, setErrorEmail] = useState([])

    const history = useHistory()

    var handleSubmitEmail = async () => {
        const data = await fetch('/submitemail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `emailFromFront=${email}`
        })

        const body = await data.json()

        if (body.result === true) {
            history.push('/confirmationemail')
        } else {
            setErrorEmail(body.error)
        }
    }

    var tabErrorsEmail = emailError.map((error, i) => {
        return (
            <p style={{ marginTop: '180px', marginRight: '100px', position: 'absolute', height: '30px', color: 'red' }}>{error}</p>
        )
    })

    return (
        <div>
            <Nav />
            <Container fluid={true}>
                <div className='background'>

                    <div className='partOne'>
                        <div>
                            <h1 className='titleAccueil'>Bienvenue à Babyccino !</h1>
                        </div>
                        <div className='text'>
                            <p style={{ fontFamily: 'DosisRegular', fontSize: '1.5em', textAlign: 'center' }}>Babyccino est un lieu où les enfants peuvent jouer, socialiser, apprendre, se développer,
                                imaginer et créer. Mais c'est aussi un endroit où les adultes peuvent se sentir à l'aise,
                                passer du temps qualitatif avec leurs enfants.</p>
                        </div>
                        <div>
                            <Button className='reservez' style={{ fontFamily: 'Nunito', fontSize: '1.2em', width: '150px', height: '50px', marginLeft: '10px', border: '5px #F48FB1 solid', backgroundColor: '#FF1744', borderRadius: '30px' }}>Réservez</Button>
                        </div>
                    </div>

                </div>

                <div className='partTwo'>
                    <div>
                        <h1 className='titleAccueilTwo'>S'amuser & Grandir</h1>
                    </div>
                    <div style={{ fontFamily: 'Dosis', fontSize: '1.2em' }}>avec Babyccino</div>

                    <div className='Cards'>
                        <Card style={{ width: '300px', border: '4px #05c46b solid', borderRadius: '20px', backgroundColor: '#7bed9f', marginRight: '20px' }}>
                            <FontAwesomeIcon icon={faBrain} size='4x'
                                style={{
                                    alignSelf: 'center',
                                    marginTop: '20px',
                                    marginBottom: '15px',
                                    border: '1px solid',
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    width: '100px',
                                    height: '80px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px',
                                    color: '#7bed9f'
                                }} />
                            <CardTitle tag="h4" style={{ textAlign: 'center', fontFamily: "FredokaOne", fontSize: '1.3em', marginBottom: '20px' }}>Développement psychomoteur</CardTitle>
                            <CardText style={{ textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif', paddingLeft: '20px', paddingRight: '20px' }}>Babyccino est un lieu où les enfants peuvent jouer, socialiser, apprendre, se développer, imaginer et créer.</CardText>
                        </Card>
                        <Card style={{ width: '300px', border: '4px #ffb142 solid', borderRadius: '20px', backgroundColor: '#ffda79', marginRight: '20px' }}>
                            <FontAwesomeIcon icon={faVideo} size='4x'
                                style={{
                                    alignSelf: 'center',
                                    marginTop: '20px',
                                    marginBottom: '30px',
                                    border: '1px solid',
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    width: '100px',
                                    height: '80px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px',
                                    color: '#ffda79'
                                }} />
                            <CardTitle tag="h4" style={{ textAlign: 'center', fontFamily: "FredokaOne", fontSize: '1.3em', marginBottom: '30px' }}>La Sécurité</CardTitle>
                            <CardText style={{ textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif', paddingLeft: '20px', paddingRight: '20px' }}>Des écrans de surveillance sont mis à votre disposition afin que vous puissiez toujours avoir un oeil sur vos enfants. </CardText>
                        </Card>
                        <Card style={{ width: '300px', border: '4px #ea8685 solid', borderRadius: '20px', backgroundColor: '#ffcccc', marginRight: '20px' }}>
                            <FontAwesomeIcon icon={faHeart} size='4x'
                                style={{
                                    alignSelf: 'center',
                                    marginTop: '20px',
                                    marginBottom: '30px',
                                    border: '1px solid',
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    width: '100px',
                                    height: '80px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px',
                                    color: '#ffcccc'
                                }} />
                            <CardTitle tag="h4" style={{ textAlign: 'center', fontFamily: "FredokaOne", fontSize: '1.3em', marginBottom: '30px' }}>Un moment familliale</CardTitle>
                            <CardText style={{ textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif', paddingLeft: '20px', paddingRight: '20px' }}>C'est un endroit où les parents et les enfants peuvent s’épanouir et faire ressortir le meilleur d’eux-mêmes.</CardText>
                        </Card>
                    </div>
                </div>
                <div className='partThreeBg'>
                    <div>
                        <h1 className='titleAccueilThree'>Fun !</h1>
                    </div>
                    <Container>
                        <Row className='partThree'>
                            <Col sm={{ size: 'auto' }}>
                                <img src={anniversaire} alt='anniversare' className='imgbday' />
                                <CardBody className='desc1'>
                                    <CardTitle tag='h5' style={{ fontFamily: 'FredokaOne', fontWeight: 'bold', color: '#ff4757' }}>Fêtes d'anniversaires</CardTitle>
                                    <CardText style={{ fontFamily: 'Dosis' }}>There’s no better way to celebrate your little one’s birthday than a fully organised birthday party at Kiddokove!</CardText>
                                    <CardLink href='/anniversaires' style={{ textDecoration: 'underline', fontFamily: 'Dosis', color: 'black' }}>En savoir plus</CardLink>
                                </CardBody>
                            </Col>
                            <Col sm={{ size: 'auto' }}>
                                <img src={kids} alt='kids' className='truck' />
                                <CardBody className='desc2'>
                                    <CardTitle tag='h5' style={{ fontFamily: 'FredokaOne', fontWeight: 'bold', color: '#ff4757' }}>Planifiez votre visite</CardTitle>
                                    <CardText style={{ fontFamily: 'Dosis' }}>Just looking for a simple day of fun and play? Drop by anytime and let your kids run wild in our safe, fun play centre.</CardText>
                                    <CardLink href='/anniversaires' style={{ textDecoration: 'underline', fontFamily: 'Dosis', color: 'black' }}>En savoir plus</CardLink>
                                </CardBody>
                            </Col>
                        </Row>
                    </Container>
                    <Row className='partThree'>
                        <Col sm={{ size: 'auto' }}>
                            <img src={icecreamtruck} alt='truck' className='imgbday' />
                            <CardBody className='desc1'>
                                <CardTitle tag='h5' style={{ fontFamily: 'FredokaOne', fontWeight: 'bold', color: '#ff4757' }}>Fêtes d'anniversaires</CardTitle>
                                <CardText style={{ fontFamily: 'Dosis' }}>There’s no better way to celebrate your little one’s birthday than a fully organised birthday party at Kiddokove!</CardText>
                                <CardLink href='/anniversaires' style={{ textDecoration: 'underline', fontFamily: 'Dosis', color: 'black' }}>En savoir plus</CardLink>
                            </CardBody>
                        </Col>
                        <Col sm={{ size: 'auto' }}>
                            <img src={food} alt='food' className='truck' />
                            <CardBody className='desc2'>
                                <CardTitle tag='h5' style={{ fontFamily: 'FredokaOne', fontWeight: 'bold', color: '#ff4757' }}>Nous rendre visite</CardTitle>
                                <CardText style={{ fontFamily: 'Dosis' }}>Just looking for a simple day of fun and play? Drop by anytime and let your kids run wild in our safe, fun play centre.</CardText>
                                <CardLink href='/anniversaires' style={{ textDecoration: 'underline', fontFamily: 'Dosis', color: 'black' }}>En savoir plus</CardLink>
                            </CardBody>
                        </Col>
                    </Row>
                </div>

                <div className='reception'>
                    <h1 style={{ fontFamily: 'FredokaOne', fontWeight: 'bold', color: '#ff4757', marginBottom: '60px' }}>Planifiez votre visite</h1>
                    <p className='receptionText'>
                        Just looking for a simple day of fun and play? Drop by anytime and let your kids run wild in our safe, fun play centre.
                    </p>
                    <Button style={{ fontFamily: 'Nunito', fontSize: '1.2em', marginTop: '50px', width: '150px', height: '50px', marginLeft: '10px', border: '5px #FFEE58 solid', backgroundColor: '#FF8F00', borderRadius: '30px' }}>Réservez</Button>
                </div>
                <Row className='partFour'>
                    <Col className='horaires'>
                        <h4 style={{ fontFamily: 'FredokaOne', fontWeight: 'bold', textDecoration: 'underline' }}>Nos horaires</h4>
                        <p style={{ fontFamily: 'Dosis', fontWeight: 'bold' }}>Du Lundi au Vendredi</p>
                        <p style={{ fontFamily: 'Arial' }}>9h30 à 18h00</p>
                        <p style={{ fontFamily: 'Dosis', fontWeight: 'bold' }}>Samedi</p>
                        <p style={{ fontFamily: 'Arial' }}>9h30 à 18h00</p>
                    </Col>
                    <Col>
                        <img src={kids3} alt='kids3' style={{ width: '90%', marginBottom: '80px', borderRadius: '20px', border: '4px #fdcb6e dashed' }} />
                    </Col>
                    <Col>
                        <img src={reception} alt='reception' style={{ width: '90%', marginTop: '80px', borderRadius: '20px', border: '4px #a29bfe dashed' }} />
                    </Col>
                    <Col>
                        <img src={kids2} alt='kids2' style={{ width: '90%', marginBottom: '80px', borderRadius: '20px', border: '4px #ff7675 dashed' }} />
                    </Col>
                </Row>

                <div className='partFive'>
                    <Container style={{ display: 'flex', flexDirection: 'column', height: '400px', width: '900px' }}>
                        <div>
                            <h1 style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'FredokaOne', color: '#80CBC4', fontSize: '5em' }}>Nos Tarifs</h1>
                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '325px' }}>
                                <p style={{ marginTop: '50px', paddingTop: '2px', fontFamily: 'FredokaOne', color: '#F57F17', fontSize: '1.5em', border: '4px #F57F17 dashed', borderRadius: '10px', background: '#FFF9C4', width: '200px', height: '50px', textAlign: 'center' }}>Semaine</p>
                                <p style={{ marginTop: '50px', paddingTop: '2px', marginLeft: '90px', fontFamily: 'FredokaOne', color: '#F57F17', fontSize: '1.5em', border: '4px #F57F17 dashed', borderRadius: '10px', background: '#FFF9C4', width: '200px', height: '50px', textAlign: 'center' }}>Week-end</p>
                            </div>
                            <Table style={{ fontFamily: 'Dosis', fontSize: '1.2em', textAlign: 'center', background: 'white', borderTop: '1px black dashed' }}>
                                <thead>
                                    <tr>
                                        <th style={{ borderBottom: '1px black dashed', background: '#1E88E5', color: 'white', fontSize: '1.2em' }}></th>
                                        <th style={{ borderBottom: '1px black dashed', background: '#1E88E5', color: 'white', fontSize: '1.2em' }}>Par heure</th>
                                        <th style={{ borderBottom: '1px black dashed', background: '#1E88E5', color: 'white', fontSize: '1.2em' }}>Par jour</th>
                                        <th style={{ borderBottom: '1px black dashed', background: '#1E88E5', color: 'white', fontSize: '1.2em' }}>Par heure</th>
                                        <th style={{ borderBottom: '1px black dashed', background: '#1E88E5', color: 'white', fontSize: '1.2em' }}>Par jour</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" style={{ width: '300px' }}>0 - 6 mois</th>
                                        <td style={{ width: '120px' }}>Gratuit</td>
                                        <td>Gratuit</td>
                                        <td style={{ width: '120px' }}>Gratuit</td>
                                        <td>Gratuit</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" style={{ width: '300px' }}>6 mois - 2 ans</th>
                                        <td style={{ width: '100px' }}>3€</td>
                                        <td>8€</td>
                                        <td style={{ width: '100px' }}>5€</td>
                                        <td>12€</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" style={{ width: '300px' }}>2 ans - 8 ans</th>
                                        <td style={{ width: '100px' }}>5€</td>
                                        <td>12€</td>
                                        <td style={{ width: '100px' }}>7€</td>
                                        <td>18€</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" style={{ width: '300px' }}>+ de 8 ans</th>
                                        <td style={{ width: '100px' }}>3€</td>
                                        <td>8€</td>
                                        <td style={{ width: '100px' }}>5€</td>
                                        <td>12€</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" style={{ width: '300px' }}>Adulte (+ de 16 ans)</th>
                                        <td style={{ width: '100px' }}>3€</td>
                                        <td>8€</td>
                                        <td style={{ width: '100px' }}>5€</td>
                                        <td>5€</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p style={{ textAlign: 'center', marginTop: '50px' }}>*Socks are compulsory in KiddoKove. Age limited is 0-8 years old, children over 16 years old will charge as an adult fee</p>
                        </div>
                    </Container>
                </div>
                <div className='photo'>
                    <Container>
                        <Row >
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
                                    <p style={{ fontFamily: 'Dosis', fontSize: '1.6em', marginLeft: '152px' }}>The perfect place to</p>
                                    <img style={{ width: '350px', marginLeft: '70px' }} src={play} alt="" />
                                    <Button style={{ fontFamily: 'Nunito', fontSize: '1.2em', marginTop: '20px', width: '150px', height: '50px', marginLeft: '180px', border: '5px #795548 solid', backgroundColor: '#BCAAA4', borderRadius: '30px' }}>Réservez</Button>
                                </div>
                                <div className='slides'>
                                    <Carousel fade interval={2000} controls={false} indicators={false}>
                                        <Carousel.Item>
                                            <img src={icecreamtruck} className="sliderimg" alt="first slide" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={anniversaire} className="sliderimg" alt="second slide" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={kids3} className="sliderimg" alt="third slide" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={furnitures} className="sliderimg" alt="fourth slide" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={kids} className="sliderimg" alt="fifth slide" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
                <div className='subscribe'>
                    <Container style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Row>
                            <img src={Jemma} alt='Jemma' style={{ width: '250px', height: '250px', margin: 'auto', borderRadius: '130px', filter: 'drop-shadow(0 0 0.75rem grey)' }} />
                        </Row>
                        <Row>
                            <Form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px' }}>
                                <FormGroup>
                                    <Label style={{ fontFamily: 'Dosis', fontSize: '1.2em', width: '400px', marginBottom: '10px' }}>Inscrivez-vous à notre newsletter pour recevoir nos dernières offres exclusives !</Label>
                                    <Input onChange={(e) => (setEmail(e.target.value))} type='email' name='email' placeholder="Entrez votre e-mail" style={{ width: '400px' }} />
                                </FormGroup>
                                <Button onClick={() => handleSubmitEmail()} className='borderButton' color="danger" size="md" style={{ marginTop: '66px', width: '100px', marginLeft: '20px' }}>Envoyer</Button>
                                {tabErrorsEmail}
                            </Form>
                        </Row>
                    </Container>
                </div>
            </Container>
            <Bottom />
        </div>
    )
}

export default AccueilScreen;