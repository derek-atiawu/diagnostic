import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function Search() {
  return (
    <div>
        <Row>
           <Col></Col>
           <Col>           <Form>        <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Type your medical concern and find the best provider!</Form.Label>
            <Form.Control />
          </Form.Group></Form>
          <Button>Search Now</Button>
          </Col>
           

          <Col></Col>
       </Row>


    </div>
  )
}

export default Search