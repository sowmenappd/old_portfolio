import _ from "lodash";
import React from "react";
import { Container, Divider, Header, Segment } from "semantic-ui-react";

const quoteProps = [
  {
    q: "The trouble is, you think you have time.",
    a: "Buddha",
    color: "green",
  },
  {
    q:
      "It is not enough that we do our best; sometimes we must do what is required.",
    a: "Winston S. Churchill",
    color: "violet",
  },
];

const Quotes = () => (
  <Container fluid style={{ paddingTop: 20 }}>
    <Divider horizontal>
      <Header as="h4" content="Quotes" />
    </Divider>
    {quoteProps.map((qP, i) => (
      <Segment key={i} color={qP.color} textAlign="right">
        {qP.q} <br /> <br /> - <b>{qP.a}</b>
      </Segment>
    ))}
  </Container>
);

export default Quotes;
