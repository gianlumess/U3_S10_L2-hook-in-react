import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    console.log("fetchComments");
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.newComment),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkN2E2NTNhMzhjYjAwMTVmNjNkNGEiLCJpYXQiOjE3MTk0OTkzNjUsImV4cCI6MTcyMDcwODk2NX0._sLOFwceL_eYGDe30nmimOoigh2oUxvTNmf4O1ZVrUM",
        "Content-Type": "application/json"
      }
    });

    if (resp.ok) {
      alert("commento inviato");
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il tuo commento"
            value={this.state.newComment.comment}
            onChange={e => this.setState({ newComment: { ...this.state.newComment, comment: e.target.value } })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formComment">
          <Form.Select
            aria-label="Rate"
            value={this.state.newComment.rate}
            onChange={e => this.setState({ newComment: { ...this.state.newComment, rate: e.target.value } })}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </Form.Select>
        </Form.Group>
        <Button variant="dark" className="mb-3" type="submit">
          Invia commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;
