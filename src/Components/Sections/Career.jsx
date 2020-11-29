import React, { Fragment } from "react";
import {
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Item,
  Label,
  Segment,
} from "semantic-ui-react";

import { skillSet1, skillSet2, skillSet3 } from "../../data/Skills";
import experiences from "../../data/Experiences";

const SkillItemView = ({
  skillProp: { name, icon, iconColor, description },
}) => {
  return (
    <Grid.Column textAlign="center">
      <Icon name={icon} size="big" color={iconColor} />
      <Header as="h2">{name}</Header>
      <div>{description}</div>
    </Grid.Column>
  );
};

const SkillItemRow = ({ displaySkills }) => {
  return (
    <Grid.Row>
      {displaySkills.map((ds, i) => (
        <SkillItemView key={i} skillProp={ds} />
      ))}
    </Grid.Row>
  );
};

const SkillGrid = () => (
  <Segment color="olive" padded>
    <Divider horizontal section>
      My Skills
    </Divider>
    <Grid columns={3} padded divided>
      <SkillItemRow displaySkills={skillSet1} />
      <Divider horizontal section />
      <SkillItemRow displaySkills={skillSet2} />
      <Divider horizontal section />
    </Grid>
    <Grid columns={3} centered padded divided>
      <SkillItemRow displaySkills={skillSet3} />
    </Grid>
  </Segment>
);

const ExperienceListItem = ({ item: exp }) => {
  return (
    <Item>
      {exp.image && (
        <Item.Image
          src={exp.image.src}
          centered
          style={{
            backgroundColor: exp.image.inverted ? "#000" : "#fff",
            alignSelf: "flex-start",
          }}
        />
      )}
      <Item.Content>
        <Header as="h2">{exp.company}</Header>

        <List as={exp.roles.length > 1 ? "ol" : null}>
          {exp.roles.map((role, index) => {
            return (
              <List.Item as="li" key={index} style={{ padding: 8 }}>
                <Item.Header style={{ fontSize: 18 }}>
                  <span>
                    <b>{role.title}</b>
                  </span>
                  <Label
                    color="green"
                    horizontal
                    basic={role.timespan.end ? false : true}
                    pointing="left"
                  >
                    {role.timespan.start} -
                    {role.timespan.end ? role.timespan.end : "PRESENT"}
                  </Label>
                </Item.Header>
              </List.Item>
            );
          })}
        </List>

        <Item.Description style={{ textAlign: "justify" }}>
          {exp.description}
        </Item.Description>
        {exp.tags && (
          <div style={{ float: "right" }}>
            <Item.Extra>
              {exp.tags.map((tag, i) => (
                <Label content={tag.value} key={i} color={tag.color} />
              ))}
            </Item.Extra>
          </div>
        )}
      </Item.Content>
    </Item>
  );
};

const ExperienceList = () => {
  return (
    <Segment color="violet" padded>
      <Divider horizontal section>
        My Experiences
      </Divider>
      <List animated>
        {experiences.map((exp, i) => (
          <List.Item key={i}>
            <Item.Group>
              <ExperienceListItem item={exp} />
            </Item.Group>
          </List.Item>
        ))}
      </List>
    </Segment>
  );
};

const Career = () => {
  return (
    <Fragment>
      <Segment basic>
        <SkillGrid />
      </Segment>
      <Segment basic>
        <ExperienceList />
      </Segment>
    </Fragment>
  );
};

export default Career;
