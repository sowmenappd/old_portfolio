import React from "react";
import { Card } from "semantic-ui-react";

const ProfileCard = (props) => {
  return (
    <Card
      {...props}
      //   image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      image={props.img}
      header={props.title}
      meta={props.subtitle}
      description={props.description}
      extra={props.footer}
      style={{
        width: props.expand ? "90%" : null,
        textAlign: props.textAlign ? props.textAlign : "left",
      }}
    />
  );
};

export default ProfileCard;
