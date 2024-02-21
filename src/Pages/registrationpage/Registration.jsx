import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { scans, labs } from "../../Examlists";

function Registration() {
  //state
  const [serviceType, setServiceType] = useState("scan");
  console.log(serviceType);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [lists, setList] = useState(scans);
  const madalShow = () => {
    if (serviceType == "scan") {
      handleShow();
      setList(scans);
    }
    if (serviceType == "lab") {
      handleShow();
      setList(labs);
    }
  };
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
            <Form.Select
              onChange={(e) => {
                setServiceType(e.target.value);
                madalShow();
              }}
            >
              <option value={""}>Do you do Lab or Scan</option>
              <option value="scan">Scan</option>
              <option value="lab">Lab</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Location</Form.Label>
            <Form.Select>
              <option>Where can your comapny be found</option>
              <option value="Accra">Accra</option>
              <option value="Kumasi">Kumasi</option>
              <option value="Takoradi">Takoradi</option>
              <option value="Ho ">Ho</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupSubject">
            <Form.Label>Date</Form.Label>
            <Form.Control />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col></Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Selected</th>
                <th>Test type</th>
              </tr>
            </thead>

            <tbody>
              {lists.map((item) => {
                return (
                  <tr>
                    <td>
                      <Form.Check // prettier-ignore
                        type={"radio"}
                        id={`default-radio`}
                        label={``}
                      />
                    </td>
                    <td>{item}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
}

export default Registration;
