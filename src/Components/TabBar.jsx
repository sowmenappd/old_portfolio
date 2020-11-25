import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Introduction",
    render: () => <Tab.Pane attached={false}>A little about me</Tab.Pane>,
  },
  {
    menuItem: "Academics",
    render: () => (
      <Tab.Pane attached={false}>
        Writing about my school, college and university
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Research",
    render: () => (
      <Tab.Pane attached={false}>
        Research, and theoretical works I've been a part of
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Career",
    render: () => <Tab.Pane attached={false}>Career stuff</Tab.Pane>,
  },
  {
    menuItem: "Projects",
    render: () => (
      <Tab.Pane attached={false}>Projects I have worked on</Tab.Pane>
    ),
  },
];

const TabBar = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

export default TabBar;
