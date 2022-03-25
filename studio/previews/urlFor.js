import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "o8p1zdum", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2021-12-28",
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  const { alt, asset } = source;
  if (asset === undefined) {
    return {
      alt,
      src: "",
    };
  } else {
    return {
      alt,
      src: builder.image(asset._ref).url(),
    };
  }
}

export default urlFor;
