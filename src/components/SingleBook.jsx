import { Card } from "react-bootstrap";
// import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  // state = {
  //   selected: false
  // };

  /*  const [selected, setSelected] = useState(false); */

  return (
    <Card style={{ border: props.book.asin === props.selectedAsin ? "3px solid red" : "3px solid #ebebeb" }}>
      <Card.Img
        variant="top"
        src={props.book.img}
        onClick={() => {
          // devo modificare lo stato nel livello superiore
          // ora abbiamo una prop che contiene la funzione in grado di modificare lo stato al livello superiore! (changeAsin)
          props.changeAsin(props.book.asin);
          // this.setState({ selected: !this.state.selected });
        }}
      />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>

        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
