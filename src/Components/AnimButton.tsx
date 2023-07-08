import styled from "styled-components";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Colors } from "@/styles";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});
type ButtonType = {
  product: string | number;
  backgroundColor: string;
};

const LeadButton = styled.button<ButtonType>`
  border: 1px solid ${Colors.default};
  border-radius: 2rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  padding: 0.4rem 2rem;
  margin: 0 0.4rem;
  text-align: center;
  font-weight: 600;
  color: ${Colors.default};
  :hover {
    color: ${Colors.lighterBlue};
    border-color: ${Colors.lighterBlue};
  }
  :active {
    background-color: ${Colors.lighterBlue};
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
