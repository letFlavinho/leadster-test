import styled from "styled-components";
import { Plus_Jakarta_Sans } from "next/font/google";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});
type ButtonType = {
  product: string | number;
  backgroundColor: any;
};

const LeadButton = styled.button<ButtonType>`
  border: 1px solid #4b6170;
  border-radius: 2rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  padding: 0.4rem 2rem;
  text-align: center;
  vertical-align: middle;
  :hover {
    color: #2c83fb;
    border-color: #2c83fb;
  }
  :active {
    background-color: #2c83fb;
    color: white;
  }
`;

export function AnimButton(props: ButtonType) {
  return (
    <LeadButton
      product={props.product}
      backgroundColor={props.backgroundColor}
      className={Jakarta.className}
    >
      {props.product}
    </LeadButton>
  );
}
