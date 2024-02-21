import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function Registration() {
  // state
//   servicetype state
// modal state
  return (
    <Row>
      <Col></Col>
      <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name of Company</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Type of Services</Form.Label>
            <Form.Select>
              <option>Do you do Lab or Scan</option>
              <option value="Scan">Scan</option>
              <option value="Lab">Lab</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Select>
              <option>Where can your comapny be found</option>
              <option value="Accra">Accra</option>
              <option value="Kumasi">Kumasi</option>
              <option value="Takoradi">Takoradi</option>
              <option value="Ho">Ho</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupSubject">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupSubject">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default Registration;
