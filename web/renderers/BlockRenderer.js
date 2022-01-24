import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import { PageTitle, PageSubTitle, Paragraph, CustomLink } from "union-gables-components";
import "union-gables-components/dist/index.css";

// Helpers
import getParagraphChildren from "./helpers/getParagraphChildren";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    if (level == 1) {
      return <PageTitle>{props.children}</PageTitle>;
    } else if (level == 2) {
      return <PageSubTitle>{props.children}</PageSubTitle>;
    }
  }

  if (style === "normal") {
    const { markDefs } = props.node;

    if (markDefs.length > 0) { // There are marks.
      // Get new children.
      const newChildren = getParagraphChildren(props);
      return <Paragraph>{newChildren}</Paragraph>
    } else {
      return <Paragraph>{props.children}</Paragraph>
    }
    // return BlockContent.defaultSerializers.types.block(props);
  }

  if (style === "blockquote") {
    return <blockquote>- {props.children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

export default BlockRenderer;
