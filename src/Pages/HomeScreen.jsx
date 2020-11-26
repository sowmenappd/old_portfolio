import React, { Component } from "react";
import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";

import TabBar from "../Components/TabBar";

import bg from "../img/bg.jpg";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            backgroundImage: `url(${bg})`,
            fill: "Background",
            opacity: 0.03,
            width: "100%",
            height: "100%",
            top: 0,
          }}
        />
        <Container fluid text style={{ marginTop: 30, paddingBottom: 50 }}>
          <Divider horizontal style={{ padding: 20, paddingBottom: 0 }}>
            <Header as="h2"> PORTFOLIO </Header>
          </Divider>
          <Segment basic>
            <Grid columns={1} padded divided style={{ width: "100%" }}>
              <TabBar />
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
