import React from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

function TopPage() {

    return (
        <Container>
            <Row>
                <Menu className='menuDisplay'>
                    <Col xs="4" sm="2">
                        <Link to='/'><img className='logoStyle' src='./logo.png' href='/' alt='logo' /></Link>
                    </Col>
                    <Nav className='linkDisplay'>
                        <NavItem className='Link'>
                            <NavLink href="/notrehistoire" className='NavLink' style={{color:'black'}}>Notre histoire</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/visite" className='NavLink' style={{color:'black'}}>Nous rendre visite</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/anniversaires" className='NavLink' style={{color:'black'}}>Anniversaire</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/menu" className='NavLink' style={{color:'black'}}>Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/gallerie" className='NavLink' style={{color:'black'}}>Gallerie</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact" className='NavLink' style={{color:'black'}}>Contactez-nous</NavLink>
                        </NavItem>
                    </Nav>
                </Menu>
            </Row>
        </Container>
    )
}

export default TopPage;