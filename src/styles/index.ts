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
  green: string;
  lightGreen: string;
  blue: string;
  lightBlue: string;
  yellow: string;
  lightYellow: string;
};

export const FileColors = <FileColorsProps>{
  green: "#9fefdf",
  lightGreen: "#00b489",
  blue: "#78c9fc",
  lightBlue: "#148bf0",
  yellow: "#bea841",
  lightYellow: "#bea73f",
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
