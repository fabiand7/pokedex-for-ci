module.exports = {
  video: false,

  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
};
