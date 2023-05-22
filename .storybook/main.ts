import type { StorybookConfig } from "@storybook/react-webpack5";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal(config, options) {
    // Add Vanilla-Extract and MiniCssExtract Plugins
    config.plugins?.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin()
    );

    return config;
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
