import _ from "lodash";
import React, { Fragment } from "react";
import { Icon, Label } from "semantic-ui-react";

const hashtagProps = [
  { color: "red", tag: "coder" },
  { color: "green", tag: "ML/DL" },
  { color: "violet", tag: "gamer" },
  { color: "blue", tag: "coffeehead" },
  { color: "brown", tag: "workaholic" },
  //   "orange",
  //   "yellow",
  //   "olive",
  //   "green",
  //   "teal",
  //   "blue",
  //   "violet",
  //   "purple",
  //   "pink",
  //   "brown",
  //   "grey",
  //   "black",
];

const Hashtags = () => (
  <div>
    {hashtagProps.map((htp) => (
      <Fragment>
        <Label as="a" color={htp.color} key={htp.tag}>
          <Icon name="hashtag" />
          {" " && htp.tag}
        </Label>
      </Fragment>
    ))}
  </div>
);

export default Hashtags;
