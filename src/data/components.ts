//TODO: build api with this data

export const components = [
  {
    category: "color",
    subcategories: [
      {
        //TODO
        name: undefined,
        intro:
          "The colors can be used for the text, icons and buttons. They have 5 variants: primary, secondary, error, warning and disabled. While texts and icons are available in all the color variants, buttons use only 3 of them: primary, secondary and disabled",
        // content: {
        //   primary: "white",
        //   secondary: "black",
        //   error: "red",
        //   warning: "orange",
        //   disabled: "gray",
        // },
      },
    ],
  },
  {
    category: "button",
    subcategories: [
      {
        name: "regular button",
        intro:
          "The buttons are available in 3 variants (text, outlined and contained), 2 sizes (small and large) and 3 colors (primary, secondary and disabled)",
      },
      {
        name: "radio button",
        intro:
          "The radio buttons are available in 2 sizes (small and large) and 3 colors (primary, secondary, disabled)",
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
