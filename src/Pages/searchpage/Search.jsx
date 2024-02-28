import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { agenies } from "../../Agencies";
function Search() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
    const filteredList = agenies.filter((agency) =>
      agency.type.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchResults(filteredList);
  };
  console.log(searchResults);
  return (
    <div>
      <Row>
        <Col></Col>
        <Col>
          {" "}
          <Form>
            {" "}
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                Type your medical concern and find the best provider!
              </Form.Label>
              <Form.Control onChange={handleChange} />
            </Form.Group>
          </Form>
          <Button>Search Now</Button>
        </Col>

        <Col></Col>
        {searchResults.map((item) => {
          return (
            <>
              <p>Agency :{item.agency}</p>
              <p>Services :{item.services}</p>
              <p>Type :{item.type}</p>
              <hr />
              <br />
            </>
          );
        })}
      </Row>
    </div>
  );
}

export default Search;
