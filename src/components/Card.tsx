import styled from "styled-components";
import Image from "next/image";

type thumbProps = {
  src: any;
  width: number;
  height: number;
  alt: string;
};

const LeadThumb = styled.div`
  background-color: white;
  padding: 0.4rem 2rem;
  text-align: center;
  vertical-align: middle;
  object-fit: cover;
`;

export function Card(props: thumbProps) {
  return (
    <LeadThumb>
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
      />
      <h3>Como aumentar sua Geração de Leads feat. Traktor</h3>
    </LeadThumb>
  );
}
