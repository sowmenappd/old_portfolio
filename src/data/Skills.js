import React from "react";
import { Icon } from "semantic-ui-react";

const skillSet1 = [
  {
    name: "OOP & Functional Programming",
    icon: "object group",
    iconColor: "red",
  },
  {
    name: "Unity Game Development (C#)",
    icon: "game",
    iconColor: "blue",
  },
  {
    name: "Native App Development",
    icon: "game",
    iconColor: "green",
    description: (
      <div>
        <b> React Native </b> <hr /> Android Studio <hr /> XCode
      </div>
    ),
  },
];

const skillSet2 = [
  {
    name: "Data Science",
    icon: "chart area",
    iconColor: "yellow",
    description: (
      <div style={{ marginTop: 44 }}>
        <p>
          <b> Keras(Tensorflow) </b>
          <br /> <hr />
          Scikit-Learn
        </p>
      </div>
    ),
  },
  {
    name: "REST API",
    icon: "send",
    iconColor: "teal",
    description: (
      <div style={{ paddingTop: 22 }}>
        <span>
          <Icon name="node" size="big" />
          Node.js
        </span>
        <br /> <hr />
        <span>
          <Icon name="world" size="big" />
          Express.js
        </span>
      </div>
    ),
  },
  {
    name: "Web Development",
    icon: "code",
    iconColor: "grey",
    description: (
      <div>
        <span>
          <Icon name="react" />
          <b>React</b>
        </span>
        <hr />
        <span>
          <Icon name="html5" />
          HTML, CSS, JS
        </span>
      </div>
    ),
  },
];

const skillSet3 = [
  {
    name: "Wordpress",
    icon: "wordpress",
    iconColor: "blue",
    description: (
      <div style={{ marginTop: 28 }}>
        <span>WooCommerce</span>
        <hr />
        <span>Bi-directional API(s)</span>
        <hr />
        <span>Plugin manipulation</span>
      </div>
    ),
  },
  {
    name: "Competitive programmer",
    icon: "file code",
    description: (
      <div>
        3 years background of casual problem solving <hr />
        <a href="https://www.stopstalk.com/user/profile/sr1">
          StopStalk profile
        </a>
      </div>
    ),
  },
];

export { skillSet1, skillSet2, skillSet3 };
