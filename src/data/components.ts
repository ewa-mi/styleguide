//TODO: build api with this data

export const components = [
  {
    category: "color",
    subcategories: [
      {
        //TODO
        name: undefined,
        intro:
          "The colors can be used for the text, icons and buttons. They have 5 variants: black, white, primary, secondary, error, warning and disabled. While texts and icons are available in all the color variants, buttons use only 3 of them: primary, secondary and disabled",
        content: {
          black: "rgb(10, 10, 10)",
          white: "rgb(250, 250, 250)",
          primary: "rgb(23, 189, 164)",
          secondary: "rgb(231, 94, 188)",
          error: "rgb(230, 10, 10)",
          warning: "rgb(255, 123, 0)",
          disabled: "rgb(168, 168, 168)",
        },
      },
    ],
  },
  {
    category: "button",
    subcategories: [
      {
        name: "regular button",
        intro:
          "The buttons are available in 3 variants (text, outlined and contained), 2 sizes (small and large) and 3 colors (primary, secondary and disabled). The disabled color is provided when the prop 'disabled' is passed to the component. Disabled button has no hover styling and is non-clickable.",
      },
      {
        name: "radio button",
        intro:
          "The radio buttons are available in 2 sizes (small and large) and 3 colors (primary, secondary, disabled). The disabled color is provided when the prop 'disabled' is passed to the component. Disabled radio button is non-clickable.",
      },
    ],
  },
  {
    category: "text field",
    subcategories: [
      {
        name: "text field",
        intro:
          "Simple text field with configurable width, an optional label and an optional error message",
      },
      {
        name: "text area",
        intro:
          "Text area with configurable width and height, an optional label and an oprional error message",
      },
    ],
  },
  { category: "checkbox", subcategories: [] },
  { category: "list", subcategories: [] },
  { category: "dropdown", subcategories: [] },
  { category: "dialog", subcategories: [] },
  { category: "icons", subcategories: [] },
];
