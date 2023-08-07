import { Background } from ".";

export default {
  title: "Components/Background",
  component: Background,
  argTypes: {
    variant: {
      options: ["two", "three", "empty", "one", "four", "five"],
      control: { type: "select" },
    },
    type: {
      options: ["radial"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "two",
    type: "radial",
    className: {},
    variantType: "/img/variant-2-type-radial.svg",
  },
};
