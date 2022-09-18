//TODO: build api with this data

export const components = [
  {
    category: "color",
    subcategories: [
      {
        //TODO
        primary: "white",
        secondary: "black",
        error: "red",
        warning: "orange",
        disabled: "gray",
      },
    ],
  },
  {
    category: "button",
    subcategories: [
      {
        name: "regular button",
        intro:
          "The buttons are available in 3 variants (text, outlined and contained), 2 sizes (small and large) and 3 colors (primary, secondary, disabled)",
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
          "Simple text field with configurable width, an optional label and an oprional error message",
      },
      {
        name: "text area",
        intro:
          "Text area with configurable width and height, an optional label and an oprional error message",
      },
    ],
  },
  { category: "checkbox" },
  { category: "list" },
  { category: "dropdown" },
  { category: "dialog" },
];
