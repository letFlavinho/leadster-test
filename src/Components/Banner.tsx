import Image from "next/image";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8rem 5rem;
  height: 35vh;
  background: #833434;
`;

export function Banner(props: any) {
  return (
    <Section>
      <span>WEBINARS EXCLUSIVOS</span>
      <h2>Menos conversinha,</h2>
      <div className="bigger-text">
        <h1>Mais Conversão</h1>
        <Image
          className="asset-bigger-text"
          src={props.asset}
          width={49}
          height={32}
          alt="asset-header"
        />
      </div>
      <h3>
        Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
        seu negócio
      </h3>
    </Section>
  );
}
