const client = require("./client");

module.exports = {
  exportPathMap: async function (defaultPathMap) {
    const paths = await client
      .fetch('*[_type == "post" && defined(slug)].slug.current')
      .then((data) =>
        data.reduce(
          (acc, slug) => ({
            "/": { page: "/" },
            ...acc,
            [`/post/${slug}`]: { page: "/post/[slug]", query: { slug } },
          }),
          defaultPathMap
        )
      )
      .catch(console.error);
    return paths;
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },
};
