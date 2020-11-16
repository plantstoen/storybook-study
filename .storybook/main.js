module.exports = {
  stories: [
    ".././src/**/*.stories.mdx",
    ".././src/**/*.stories.@(js|jsx|ts|tsx|mdx|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs",
  ],
};
