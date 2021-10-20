import React, { useState } from 'react'
import Nav from './1.TopScreen'
import Bottom from './2.BottomScreen'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Container, Row, Col } from 'reactstrap'

function VisiteScreen() {
    const [date, onChange] = useState(new Date());

    var handleSubmitDate = async () => {
        const data = await fetch('/calendar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `dateFromFront=${date}`
        })

        const body = await data.json()

        if (body.result === true){
            onChange(date)
        }
    }

    return (
        <div>
            <Nav />
            <Container>
                <Row style={{height:'500px'}}>
                    <Col sm="12" md={{ size: 4, offset: 1 }}>
                        <Calendar
                            onChange={()=> handleSubmitDate()}
                            value={date}
                        />
                    </Col>

                </Row>
            </Container>
            <Bottom />
        </div>
    )
}

export default VisiteScreen;