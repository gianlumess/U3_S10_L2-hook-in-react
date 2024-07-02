import { Badge, ListGroupItem } from "react-bootstrap";

const SingleComment = ({ review }) => (
  <ListGroupItem title={review.author} className="d-flex justify-content-between align-items-center">
    {review.comment}
    <Badge bg="dark" className="text-white">
      {review.rate}
    </Badge>
  </ListGroupItem>
);
export default SingleComment;
