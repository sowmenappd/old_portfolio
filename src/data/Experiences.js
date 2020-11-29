import AS_Logo from "../img/AS_Logo.png";
import Research_Icon from "../img/research.png";

const experiences = [
  {
    image: {
      src: AS_Logo,
      inverted: true,
    },
    company: "Arcade Studios BD",
    description:
      "I am currently working part-time as a Unity C# programmer for creating games, and AR/VR applications.",
    roles: [
      {
        title: "Jr. Software Engineer",
        timespan: {
          start: "JAN 2020",
          end: undefined,
        },
      },
      {
        title: "Student Intern",
        timespan: {
          start: "JUL 2019",
          end: "DEC 2019",
        },
      },
    ],
    tags: [
      {
        value: "Unity",
        color: "violet",
      },
      {
        value: "C#",
        color: "teal",
      },
      {
        value: "Firebase",
        color: "red",
      },
    ],
  },
  {
    image: {
      src: Research_Icon,
    },
    company: "Research Collaboration",
    roles: [
      {
        title: "Research Assistant",
        timespan: {
          start: "MAR 2019",
          end: undefined,
        },
      },
    ],
    description:
      "I have worked as a research assistant in an international collaborative research group. Most of our research dealt with investigation of use of computer and camera sensor (depth) technologies for biomedical aid, anomaly detection and treatment. I have additionally worked with 3D pose estimation using Kinect RGB-D cameras that do not rely on machine learning models.",
    tags: [
      {
        value: "XCode",
        color: "blue",
      },
      {
        value: "Swift",
        color: "orange",
      },
      {
        value: "CV",
        color: "orange",
      },
      {
        value: "Python",
        color: "green",
      },
    ],
  },
];

export default experiences;
