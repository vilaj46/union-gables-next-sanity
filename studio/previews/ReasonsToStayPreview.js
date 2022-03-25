import React from "react";
import { ReasonsToStay } from "union-gables-components";
import "union-gables-components/dist/index.css?raw";

import urlFor from "./urlFor";

function ReasonsToStayPreview(props) {
  try {
    const { value } = props;
    const { reasons } = value;
    const list = createList(reasons);
    return (
      <div style={{ overflow: "hidden", height: "100%" }}>
        <ReasonsToStay list={list} />
      </div>
    );
  } catch {
    return <span>REASONS TO STAY</span>;
  }
}

function createList(reasons) {
  return reasons.map((reason) => {
    const { src } = urlFor(reason);
    const { desc, alt } = reason;
    return {
      src,
      desc,
      alt,
    };
  });
}

export default ReasonsToStayPreview;
