import React from "react";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";

// Renderers
import BlockRenderer from "../../renderers/BlockRenderer";

const Post = ({ post = {} }) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories = [],
    authorImage = "",
    body = [],
  } = post;
  return (
    <article>
      <BlockContent
        blocks={body}
        serializers={{ types: { block: BlockRenderer } }}
        {...client.config()}
      />
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  const createdPaths = paths.map((slug) => ({
    params: { slug: "post/" + slug },
  }));

  return {
    paths: createdPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post: post || {},
    },
  };
}
export default Post;
