import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

type thumbProps = {
  src: StaticImageData;
  alt: string;
  style: {
    height: string;
    width: string;
  };
  openModal: any;
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
  cursor: pointer;
  b {
    margin: 1rem;
    color: #1c3c50;
  }
`;

export function Card(props: thumbProps) {
  return (
    <LeadThumb onClick={props.openModal}>
      <Image className="Image" src={props.src} alt={props.alt} />
      <b>Como aumentar sua Geração de Leads feat. Traktor</b>
    </LeadThumb>
  );
}
