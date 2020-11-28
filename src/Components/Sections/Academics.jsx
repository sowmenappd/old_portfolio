import React, { Fragment } from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";

import ImageDetailCard from "../ImageDetailCard";

import school1 from "../../img/school_1.jfif";
import school2 from "../../img/school_3.jfif";
import school3 from "../../img/school_2.jfif";
import college1 from "../../img/college.png";
import uni1 from "../../img/uni_1.png";

const schools = [
  {
    title: "Willes Little Intl. School",
    subtitle: "ADDRESS",
    description: "(1999-2001)",
    logo: school1,
    url: "https://www.facebook.com/wlfsc1956",
  },
  {
    title: "Universal Tutorial",
    subtitle: "ADDRESS",
    description: "(2001-2005)",
    logo: school2,
    url: "https://www.facebook.com/UniversalTutorialBD",
  },
  {
    title: "St. Joseph Higher Secondary School",
    subtitle: "ADDRESS",
    description: "(2006-2014)",
    logo: school3,
    url: "https://www.sjs.edu.bd",
  },
];

const college = {
  title: "Notre Dame College",
  subtitle: "ADDRESS",
  description: "(2015-2016)",
  logo: college1,
  url: "https://notredamecollege-dhaka.com",
};

const uni = {
  title: "Chittagong University of Eng. & Tech.",
  subtitle: "ADDRESS",
  description: "(2017-Present)",
  logo: uni1,
  url: "https://www.cuet.ac.bd",
};

const Academics = () => {
  return (
    <Fragment>
      <Grid stackable columns={1}>
        <Grid.Column>
          <Segment color="violet">
            <Divider horizontal>UNIVERSITY</Divider>
            <Grid.Row columns={2} style={{ padding: 16 }}>
              <Grid.Column>
                <ImageDetailCard
                  title={
                    <a href={uni.url} target="_blank">
                      {uni.title}
                    </a>
                  }
                  subtitle={uni.description}
                  extraText="Started studying at the department of Computer Science &
                  Engineering since 2017"
                  img={uni.logo}
                />
              </Grid.Column>
            </Grid.Row>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color="red">
            <Divider clearing horizontal>
              COLLEGE
            </Divider>
            <Grid.Row style={{ marginTop: 20, marginBottom: 20, padding: 16 }}>
              <Grid.Column>
                <ImageDetailCard
                  title={
                    <a href={college.url} target="_blank">
                      {college.title}
                    </a>
                  }
                  subtitle={college.description}
                  img={college.logo}
                />
              </Grid.Column>
            </Grid.Row>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color="blue">
            <Divider horizontal>SCHOOL</Divider>

            {schools.map((sch, i) => (
              <Grid.Row
                key={i}
                style={{ marginTop: 20, marginBottom: 20, padding: 16 }}
              >
                <Grid.Column>
                  <ImageDetailCard
                    title={
                      <a href={sch.url} target="_blank">
                        {sch.title}
                      </a>
                    }
                    subtitle={sch.description}
                    img={sch.logo}
                  />
                </Grid.Column>
              </Grid.Row>
            ))}
          </Segment>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Academics;
