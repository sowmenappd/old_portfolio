import React from "react";
import { Item } from "semantic-ui-react";

const ImageDetailCard = ({ title, subtitle, extraText, extra, img }) => (
  <Item.Group>
    <Item>
      <Item.Image
        size="small"
        // src="https://react.semantic-ui.com/images/wireframe/image.png"
        src={img}
      />

      <Item.Content>
        <Item.Header as="a">{title}</Item.Header>
        <Item.Description>{subtitle}</Item.Description>
        <Item.Description>{extraText}</Item.Description>
        {extra && <Item.Extra>{extra}</Item.Extra>}
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ImageDetailCard;
