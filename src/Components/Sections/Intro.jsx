import React, { Fragment } from "react";
import { Divider, Grid, Header, Icon, Segment } from "semantic-ui-react";

import ProfileCard from "../ProfileCard";
import Hashtags from "../Hashtags";
import Quotes from "../Quotes";

import pic from "../../img/profile.jpg";

const HeaderText1 = () => {
  let style = {
    position: "absolute",
    textAlign: "right",
    fontSize: 36,
    marginRight: 16,
    top: "8%",
  };

  return (
    <Fragment>
      <Header as="h1" style={style}>
        Hello, there!
        <br />
        <span>My name is Sowmen</span>
      </Header>
    </Fragment>
  );
};

const TopExtraView = () => {
  let style = {
    position: "absolute",
    textAlign: "right",
    fontSize: 16,
    marginRight: 16,
    top: "34%",
  };
  return (
    <Fragment>
      <div style={style}>
        <Hashtags />
      </div>
      <div style={{ ...style, top: "46%", margin: 8, right: 4 }}>
        <Quotes />
      </div>
    </Fragment>
  );
};

const Intro = () => {
  return (
    <Segment>
      <Grid columns={2} divided padded style={{ width: "100%" }}>
        <Grid.Row>
          <Grid.Column>
            <HeaderText1 />
            <TopExtraView />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: 55 }}>
            <ProfileCard
              expand
              title="Sowmen Rahman"
              description="Welcome to my portfolio!"
              subtitle="Enthusiastic coder and ML-hobbyist, game-dev since 2016"
              img={pic}
              footer={
                <button>
                  <Icon name="user" />
                  Testing my dear...
                </button>
              }
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16} style={{ marginTop: 20 }}>
            <Divider horizontal section>
              <Header as="h2" textAlign="center">
                A LITTLE ABOUT ME
              </Header>
            </Divider>
            <p>
              I'm a machine learning enthusiast, hobbyist game developer and
              gamedev mentor at my university(<b>CUET</b>). I have over 4 years
              of experience in game development and understand core and complex
              game-dev related mechanics. In my pastime, I read adventure and
              mystery books, although I barely have the time to read any book
              now.
            </p>
            <p>
              I am researching image processing and CV techniques for analyzing
              anomalies. I have a huge passion for machine learning, deep
              learning and data science in general, and I wish to pursue a
              full-time career as a data-scientist.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Intro;
