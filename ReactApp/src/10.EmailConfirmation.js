import React from 'react'
import Nav from './1.TopScreen'
import Bottom from './2.BottomScreen'
import { Container, Row, Col, Button } from 'reactstrap'

function EmailConfirmation() {
    return (
        <div>
            <Nav />

            <Container style={{background:'#CFD8DC'}}>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <div style={{fontFamily:'Dosis',fontSize:'1.1em', textAlign:'center', height:'300px', paddingTop:'70px'}}>
                            <p>Merci pour votre inscription.</p>
                            <p>Vous recevrez toutes nos offres spéciales ainsi qu'une invitation à nos évênements</p>
                            <Button href='/' color='success' style={{marginTop:'20px'}}>Retour à l'accueil</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Bottom />
        </div>
    )
}

export default EmailConfirmation;