//TODO: build api with this data

const buttons = {
  regular: {
    name: "Regular buttons",
    intro:
      "The buttons are available in 3 variants (text, outlined and contained), 2 sizes (small and large) and 3 colors (primary, secondary, disabled)",
  },
  radio: {
    name: "Radio buttons",
    intro:
      "The radio buttons are available in 2 sizes (small and large) and 3 colors (primary, secondary, disabled)",
  },
};

const colors = {
  //TODO
  white: "white",
  black: "black",
};

const inputs = {
  textField: {
    name: "Text field",
    intro:
      "Simple text field with configurable width, an optional label and an oprional error message",
  },
  textArea: {
    name: "Text area",
    intro:
      "Text area with configurable width and height, an optional label and an oprional error message",
  },
};

export const sidepanelItems = [colors, buttons, inputs];
