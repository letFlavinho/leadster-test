import Image from "next/image";
import styled from "styled-components";

type MainProps = {
  src: any;
};

const MainLeadSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8rem 5rem;
  background: #f0f8ff;
  text-align: center;

  span {
    background-color: white;
    padding: 0.2rem 1.3rem;
    border: 2px solid #2c83fb;
    border-radius: 2rem 2rem 2rem 0;
    color: #2c83fb;
    font-weight: bold;
    font-size: 0.8rem;
    @media screen and (max-width: 900px) {
      font-size: 0.6rem;
    }
  }
  h1 {
    padding-left: 2rem;
    font-size: 5rem;
    background: linear-gradient(to right, #2c83fb, #1f76f0);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin: 0;
    @media screen and (max-width: 900px) {
      font-size: 3rem;
      background-color: black;
    }
  }
  h2 {
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0;
    margin-top: 1rem;
    color: #4b6170;
    @media screen and (max-width: 900px) {
      font-size: 1rem;
    }
  }
  h3 {
    border-top: 1px solid #e5e5e5;
    padding-top: 1rem;
    font-weight: 400;
    color: #4b6170;
    @media screen and (max-width: 900px) {
      width: 50%;
    }
  }
  .bigger-text {
    display: flex;
  }
  .asset-bigger-text {
    position: relative;
    right: 1.8rem;
    top: 0.6rem;
    /* width: 49;
    height: 32; */
    @media screen and (max-width: 900px) {
      width: 2rem;
      height: 1.3rem;
      right: 1rem;
      top: 0.3rem;
    }
  }
`;

export function MainSection(props: MainProps) {
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
