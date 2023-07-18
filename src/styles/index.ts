type ColorsProps = {
  lighterBlue: string;
  darkerBlue: string;
  default: string;
};

export const Colors = <ColorsProps>{
  lighterBlue: "#2c83fb",
  darkerBlue: "#1f76f0",
  default: "#4b6170",
};

type FileColorsProps = {
  outlineGreen: string;
  green: string;
  lightGreen: string;
  outlineBlue: string;
  blue: string;
  lightBlue: string;
  outlineYellow: string;
  yellow: string;
  lightYellow: string;
  outlineGray: string;
  gray: string;
  lightGray: string;
};

export const FileColors = <FileColorsProps>{
  outlineGreen: "#2bc099",
  green: "#9fefdf",
  lightGreen: "#c2f4ea",
  outlineBlue: "#2c8ff0",
  blue: "#a1d9ff",
  lightBlue: "#c2e6ff",
  outlineYellow: "#bea940",
  yellow: "#fff1a0",
  lightYellow: "#fff8d0",
  outlineGray: "#8f9da5",
  gray: "#d0dee7",
  lightGray: "#e8eef3",
};

type FooterProps = {
  label: string;
  content: string;
  link: string;
};

export const FooterColors = <FooterProps>{
  content: "#6686b2",
  link: "#00c3ff",
};
