import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Alert } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false
  };

  fetchComments = async () => {
    this.setState({ isLoading: true });

    try {
      console.log("fetchComments");
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkN2E2NTNhMzhjYjAwMTVmNjNkNGEiLCJpYXQiOjE3MTk0OTkzNjUsImV4cCI6MTcyMDcwODk2NX0._sLOFwceL_eYGDe30nmimOoigh2oUxvTNmf4O1ZVrUM"
        }
      });
      if (resp.ok) {
        const comments = await resp.json();
        // this.setState({comments: comments})
        this.setState({ comments }); // sintassi equivalente alla precedente}
        console.log("comments:", comments);
      } else {
        throw new Error("Errore nel reperimento delle recensioni");
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false }); // sintassi equivalente alla precedente
    }
  };

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate (CommentArea)");
    console.log("PREV PROPS", prevProps.asin);
    console.log("THIS PROPS", this.props.asin);

    if (prevProps.asin !== this.props.asin) {
      console.log("asin diverso, avvio la fetch...");
      this.fetchComments();
    } else {
      console.log("asin non è diverso, mi fermo qui.");
    }
  }

  // componentDidMount() {
  //   if (this.props.asin !== "") {
  //     console.log("componentDidMount (CommentArea)");
  //     this.fetchComments();
  //   }
  // }

  render() {
    console.log("render (CommentArea)");
    return (
      <>
        <AddComment asin={this.props.asin} />
        {this.props.asin === "" ? (
          <Alert variant="light">👈 Seleziona un libro per vedere le recensioni</Alert>
        ) : (
          <CommentsList comments={this.state.comments} isLoading={this.state.isLoading} />
        )}
      </>
    );
  }
}

export default CommentArea;
