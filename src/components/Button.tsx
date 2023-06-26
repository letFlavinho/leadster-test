import styled from "styled-components";
import { Plus_Jakarta_Sans } from "next/font/google";
const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

type ButtonType = {
  product: string;
};

const LeadButton = styled.button`
  border: 1px solid #4b6170;
  border-radius: 2rem;
  background-color: white;
  padding: 0.4rem 2rem;
  text-align: center;
  vertical-align: middle;
`;

export function Button(props: ButtonType) {
  return <LeadButton className={Jakarta.className}>{props.product}</LeadButton>;
}
