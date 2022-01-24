import React from "react";
import {
  PageTitle,
  PageSubTitle,
  Paragraph,
  CustomLink,
} from "union-gables-components";
import "union-gables-components/dist/index.css?raw";

// Preview 
// import ParagraphPreview from "../previews/ParagraphPreview";

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {
          title: "Normal",
          value: "normal",
          blockEditor: {
            render: Paragraph,
          },
        },
        {
          title: "H1",
          value: "h1",
          blockEditor: {
            render: PageTitle,
          },
        },
        {
          title: "H2",
          value: "h2",
          blockEditor: {
            render: PageSubTitle,
          },
        },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            blockEditor: {
              render: CustomLink
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "string",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
};
