import React from "react";
import { DarkenSliderContainer } from "union-gables-components";
// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

import urlFor from "./urlFor";

function DarkenSliderContainerPreview(props) {
  try {
    const { slider } = props.value;
    const list = createList(slider);
    return <DarkenSliderContainer list={list} />;
  } catch {
    return <span>Darken Slider Container</span>;
  }
}

function createList(list) {
  return list.map((item) => {
    const { alt, href, linkText, mainText, secondaryText, asset } = item;
    const image = urlFor(item);
    const { src } = image;
    return {
      src,
      alt,
      href,
      linkText,
      mainText,
      secondaryText,
    };
  });
}

// const client = sanityClient({
//   projectId: "o8p1zdum", // you can find this in sanity.json
//   dataset: "production", // or the name you chose in step 1
//   useCdn: true, // `false` if you want to ensure fresh data
//   apiVersion: "2021-12-28",
// });

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   const { alt, asset } = source;
//   if (asset === undefined) {
//     return {
//       alt,
//       src: "",
//     };
//   } else {
//     return {
//       alt,
//       src: builder.image(asset._ref).url(),
//     };
//   }
// }

export default DarkenSliderContainerPreview;
