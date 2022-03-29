import React from "react";
import groq from "groq";
import Link from "next/link";
import { useRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";

// No drop down for rooms in header.
// Dropdown for other things though.

// A way to showcase specific rooms.
// Can be simple better placement for higher quality rooms

// Room Pages and Home Page
// Keep image slider
// Mobile Header and Footer

// RedBallLinks mobile friendly.

// Sanity Client
import client from "../client";

// Renderers
import BlockRenderer from "../renderers/BlockRenderer";
import ImageRenderer from "../renderers/ImageRenderer";
import BreakRenderer from "../renderers/BreakRenderer";
import ObjectRenderer from "../renderers/ObjectRenderer";
import SlideShowRenderer from "../renderers/SlideShowRenderer";
import DarkenSliderRenderer from "../renderers/DarkenSliderRenderer";

// Components
import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";
import MainContainer from "../components/MainContainer";

// Utilities
import findSlideShow from "../components/SlideShow/utilities/findSlideShow";
import createSlideImages from "../components/SlideShow/utilities/createSlideImages";

function Pages({
  page = {
    body: [],
  },
  headerLinks,
}) {
  const router = useRouter();
  const { body } = page;
  const foundSlideShow = findSlideShow(body) || [];
  const slides = createSlideImages(foundSlideShow.slides);
  return (
    <main>
      <SlideShow slides={slides} />
      <Navbar links={headerLinks} router={router} LinkComponent={Link} />
      <MainContainer>
        <BlockContent
          blocks={body || []}
          serializers={{
            types: {
              block: BlockRenderer,
              image: ImageRenderer,
              break: BreakRenderer,
              redBallList: ObjectRenderer,
              // slideShow: SlideShowRenderer,
              darkenSlider: DarkenSliderRenderer,
            },
          }}
          {...client.config()}
        />
      </MainContainer>
    </main>
  );
}

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  body
}`;

const headerQuery = groq`*[_type == "header"]`;

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "page"]`);
  const createdPaths = paths.map((pageObj) => {
    return {
      params: { slug: [pageObj.slug.current] },
    };
  });
  return {
    paths: createdPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;

  try {
    const page = await client.fetch(query, { slug: slug[0] });
    return {
      props: {
        headerLinks: headerLinks,
        page: page || {},
      },
    };
  } catch {
    const page = await client.fetch(query, { slug: "home-page" });
    const header = await client.fetch(headerQuery);
    const headerLinks = header[0].links;
    return {
      props: {
        headerLinks: headerLinks,
        page: page,
      },
    };
  }
}

export default Pages;
