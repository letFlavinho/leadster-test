import styled from "styled-components";
import Image from "next/image";

type thumbProps = {
  src: any;
  width: number;
  height: number;
  alt: string;
};

const LeadThumb = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 1rem;
  flex-wrap: wrap;
  width: min-content;
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
