import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (props) => {
  /*  state = {
    searchQuery: "",
    selectedAsin: "",
  }; */

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState("");

  const changeAsin = (newAsin) => {
    setSelectedAsin(newAsin);
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        <Col md={8}>
          <Row>
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((b) => (
                <Col xs={12} md={3} key={b.asin}>
                  <SingleBook book={b} changeAsin={changeAsin} selectedAsin={selectedAsin} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
