import React from "react";
import { RedBallLinks } from "union-gables-components";
import "union-gables-components/dist/index.css?raw";

function RedBallLinksPreview(props) {
  const { links } = props.value;
  return <RedBallLinks links={links} />;
}

export default RedBallLinksPreview;
