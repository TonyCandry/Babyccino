import React from 'react'
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

function BottomPage() {

    var underline = {
        textDecoration: 'none',
        color: 'black',
        fontFamily: "Dosis",
        fontSize: "1em"
    }

    return (
    <Container className='borderBottom'>
            <Row className='footer'>
                <Col className='color'>
                    <div>
                        <Link to='/'>
                            <img className='logoSize' src='./logo.png' href='/' alt='logo' />
                        </Link>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <img className='smallLogoSize' src='./fb_logo.png' href='/' alt='fb_logo' />
                            <img className='smallLogoSize' src='./ig_logo.png' href='/' alt='ig_logo' />
                        </div>
                    </div>
                </Col>
                <Col>
                    <p><Link to='/notrehistoire' style={underline}>Notre Histoire</Link></p>
                    <p><Link to='/anniversaires' style={underline}>Anniversaires</Link></p>
                    <p><Link to='/menu' style={underline}>Menu</Link></p>
                    <p><Link to='/gallerie' style={underline}>Gallerie</Link></p>
                    <p><Link to='/contact' style={underline}>Conctatez nous</Link></p>
                    <p><Link to='/visite' style={underline}>Visite</Link></p>
                </Col>
                <Col >
                    <p style={{ fontWeight: 'bold', textDecoration: 'underline', fontFamily: "FredokaOne", fontSize:'1.1em' }}>Où nous trouver?</p>
                    <p style={{fontFamily:'Dosis'}}>125 Rue des champs Elysée,</p>
                    <p style={{fontFamily:'Dosis'}}>75008, Paris</p>
                    <p style={{fontFamily:'Dosis'}}><span style={{ textDecoration:'underline', fontWeight: 'bold' }}>Téléphone:</span> 0155789632</p>
                    <p style={{fontFamily:'Dosis'}}><span style={{ textDecoration:'underline', fontWeight: 'bold' }}>email:</span> admin@babyccino.com</p>
                </Col>
                <Col>
                    <p style={{ fontWeight: 'bold', textDecoration: 'underline', fontFamily: "FredokaOne", fontSize:'1.1em' }}>Nos horaires</p>
                    <p style={{ fontWeight: 'bold', fontFamily:'Dosis' }}>Du Lundi au Jeudi</p>
                    <p style={{fontFamily:'Dosis'}}>10h - 19h</p>
                    <p style={{ fontWeight: 'bold', fontFamily:'Dosis' }}>Du Vendredi au Samedi</p>
                    <p style={{fontFamily:'Dosis'}}> 10h - 18h</p>
                </Col>
            </Row>
        </Container>
    );
}

export default BottomPage;