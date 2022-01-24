import React from "react";
import { Paragraph, ForeignLink } from "union-gables-components";
import "union-gables-components/dist/index.css?raw";

function ParagraphPreview({ children }) {
  const newChildren = renderChildren(children);
  return <Paragraph>{children}</Paragraph>;
}

function renderChildren(reactComponent) {
  try {
    const children = reactComponent.props.node.children;
    const { markDefs } = reactComponent.props.node;
    const newChildren = children.map((child) => {
      const { text, marks } = child;
      if (marks.length > 0) {
        // Link or something else.
        const myType = isChildInMarkDefs(child, markDefs);
        if (myType.type === "link") {
          const href = findHref(myType._key, markDefs);
          return <ForeignLink href={href}>{text}</ForeignLink>;
        } else {
          return text;
        }
      } else {
        return text;
      }
    });
    return newChildren;
  } catch {
    return children;
  }
}

function findHref(key, markDefs) {
  let href = "";

  for (let i = 0; i < markDefs.length; i++) {
    const markDef = markDefs[i];
    const { _key } = markDef;
    if (key === _key) {
      href = markDef.href;
      break;
    }
  }

  return href;
}

function isChildInMarkDefs(child, markDefs) {
  const { marks } = child;
  // let inside = false;
  let myType = -1;
  let _key = -1;
  for (let i = 0; i < markDefs.length; i++) {
    const mark = markDefs[i];
    if (marks.includes(mark._key)) {
      // inside = true;
      const { _type } = mark;
      myType = _type;
      _key = mark._key;
      break;
    }
  }

  return { type: myType, _key };
}

export default ParagraphPreview;
