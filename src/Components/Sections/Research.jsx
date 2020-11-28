import React, { Fragment } from "react";
import {
  Divider,
  Grid,
  Header,
  Item,
  ItemGroup,
  Segment,
} from "semantic-ui-react";

const works = [
  {
    title: "Mobile Apps for Foot Measurement: A Scoping Review",
    description:
      "With the public coverage of smartphones now at a global level, a major growth in the use of apps related to the health category, specifically those concerned with foot health can be observed. Although new, these apps are being used practically for scanning feet with an aim to providing accurate information about various properties of the human foot. With the availability of many ‘foot scanning and measuring apps’ in the commercial market (app stores), the need for an evaluation system for such apps can be deemed necessary as little information regarding the evidence-based quality of these apps is available.",
    url: "https://preprints.jmir.org/preprint/24202",
  },
];

const Entry = ({ itemNo, entry: { title, description, url } }) => {
  return (
    <Item>
      <Item.Content verticalAlign="middle">
        <Header style={{ marginRight: 10 }} as="h1">
          {itemNo}
        </Header>
      </Item.Content>

      <Item.Content verticalAlign="middle">
        <Item.Header
          as="a"
          href={url ? url : "#"}
          target="_blank"
          style={{ color: "green" }}
        >
          {title}
        </Item.Header>
        <Item.Description>
          <div style={{ textAlign: "justify" }}>
            <strong
              style={{
                display: "inline-block",
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              <h5>ABSTRACT: </h5>
            </strong>
            {description}
          </div>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

const Research = () => {
  return (
    <Fragment>
      <Grid stackable columns={1}>
        <Grid.Column>
          <Segment color="yellow">
            <Divider horizontal>WORKS</Divider>
            <Grid.Row style={{ padding: 16 }}>
              <ItemGroup relaxed="very" divided>
                {works.map((wk, i) => {
                  return <Entry key={i} entry={wk} itemNo={i + 1} />;
                })}
              </ItemGroup>
            </Grid.Row>
          </Segment>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Research;
