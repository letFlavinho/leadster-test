import styled from "styled-components";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Colors } from "@/styles";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});
type ButtonType = {
  product: string | number;
  backgroundColor: any;
};

const SquaredButton = styled.button<ButtonType>`
  border: 1px solid ${Colors.default};
  border-radius: 0.3rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  padding: 0.3rem 0.7rem;
  margin: 0 1rem;
  text-align: center;
  font-weight: 600;
  vertical-align: middle;
  :hover {
    color: ${Colors.lighterBlue};
    border-color: ${Colors.lighterBlue};
  }
  :active {
    background-color: ${Colors.lighterBlue};
    color: white;
  }
`;

export function SquareButton(props: ButtonType) {
  return (
    <SquaredButton
      product={props.product}
      backgroundColor={props.backgroundColor}
      className={Jakarta.className}
    >
      {props.product}
    </SquaredButton>
  );
}
