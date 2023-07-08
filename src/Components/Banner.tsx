import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { Colors } from "../styles/index";
import { ReactNode } from "react";

type MainProps = {
  src: StaticImageData;
};

const MainLeadSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8rem 5rem;
  background: #f0f8ff;
  text-align: center;
  margin: 0 auto;

  span {
    background-color: white;
    padding: 0.2rem 1.3rem;
    border: 2px solid ${Colors.lighterBlue};
    border-radius: 2rem 2rem 2rem 0;
    color: ${Colors.lighterBlue};
    font-weight: bold;
    font-size: 0.8rem;
    @media screen and (max-width: 900px) {
      font-size: 0.6rem;
    }
  }
  h1 {
    margin-left: 2rem;
    font-size: 5rem;
    background: linear-gradient(
      to right,
      ${Colors.lighterBlue},
      ${Colors.darkerBlue}
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin: 0;
    @media screen and (max-width: 900px) {
      font-size: 1.5rem;
    }
  }
  h2 {
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0;
    margin-top: 1rem;
    color: ${Colors.default};
    @media screen and (max-width: 900px) {
      font-size: 1rem;
    }
  }
  h3 {
    border-top: 1px solid #e5e5e5;
    padding-top: 1rem;
    font-weight: 400;
    color: ${Colors.default};
    @media screen and (max-width: 900px) {
      font-size: 0.8rem;
    }
  }
  .bigger-text {
    display: flex;
  }
  .asset-bigger-text {
    position: relative;
    right: 1.8rem;
    top: 0.6rem;
    @media screen and (max-width: 900px) {
      width: fit-content;
      height: 0.7rem;
      right: 0.5rem;
      top: 0.1rem;
    }
  }
`;

export function Banner(props: MainProps) {
  return (
    <MainLeadSection>
      <span>WEBINARS EXCLUSIVOS</span>
      <h2>Menos conversinha,</h2>
      <div className="bigger-text">
        <h1>Mais Conversão</h1>
        <Image
          className="asset-bigger-text"
          src={props.src}
          alt="asset-header"
        />
      </div>
      <h3>
        Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
        seu negócio
      </h3>
    </MainLeadSection>
  );
}
