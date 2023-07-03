import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type thumbProps = {
  src: StaticImageData;
  alt: string;
  style: {
    height: string;
    width: string;
  };
};

const LeadThumb = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 1rem;
  flex-wrap: wrap;
  max-width: min-content;
  border-radius: 1rem;
  box-shadow: 1px 20px 10px #ccc;
  overflow: hidden;
  b {
    margin: 1rem;
  }
`;

export function Card(props: thumbProps) {
  return (
    <LeadThumb>
      <Image className="Image" src={props.src} alt={props.alt} />
      <b>Como aumentar sua Geração de Leads feat. Traktor</b>
    </LeadThumb>
  );
}
