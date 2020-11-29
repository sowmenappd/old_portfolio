import React from "react";
import { Divider, Header, Label, Loader, Segment } from "semantic-ui-react";

const Projects = () => (
  <Segment
    size="huge"
    textAlign="center"
    style={{ height: 300 }}
    padded
    relaxed="very"
    color="violet"
  >
    <Divider horizontal>
      <Header>PROJECTS I CONTRIBUTED TO</Header>
    </Divider>
    <Loader active size="big">
      <Label basic color="violet">
        {" "}
        WORK IN PROGRESS{" "}
      </Label>
    </Loader>
  </Segment>
);

export default Projects;
