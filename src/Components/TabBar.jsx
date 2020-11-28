import { Tab } from "semantic-ui-react";

import Intro from "./Sections/Intro";
import Academics from "./Sections/Academics";
import Research from "./Sections/Research";
import Career from "./Sections/Career";

const panes = [
  {
    menuItem: "Research",
    render: () => (
      <Tab.Pane attached={false} as="div">
        <Research />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "INTRO",
    render: () => (
      <Tab.Pane attached={false} as="div">
        <Intro />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Academics",
    render: () => (
      <Tab.Pane attached={false} as="div">
        <Academics />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Career",
    render: () => (
      <Tab.Pane attached={false} as="div">
        <Career />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Projects",
    render: () => (
      <Tab.Pane attached={false} as="div">
        Projects I have worked on
      </Tab.Pane>
    ),
  },
];

const TabBar = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

export default TabBar;
