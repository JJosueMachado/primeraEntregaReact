import Container from "react-bootstrap/Container";

export const ItemListContainer = ({ greeting }) => (
  <Container className="mt-2 ">
    <h4> {greeting} </h4>
  </Container>
);
