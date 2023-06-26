"use client";
import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";
import LeadLogo from "src/public/logo.png";
import { Logo } from "../components/Logo";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Thumbnail from "src/public/thumbnail.png";
import AssetHeader from "src/public/asset-header.png";
import { Plus_Jakarta_Sans } from "next/font/google";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const GlobalStyle = createGlobalStyle`
  Button:hover{
    color: #2c83fb;
    border-color: #2c83fb;
  }
  Button:active{
    background-color:#2c83fb;
    color: white;
  }
  body {
    margin: 0;
    padding: 0;
  }
  
  .bigger-text {
    display: flex;
  }
  .asset-bigger-text {
    position: relative;
    right: 1.8rem;
    top: 0.6rem;
  }

  span {
    background-color: white;
    padding: 0.2rem 1.3rem;
    border: 2px solid #2c83fb;
    border-radius: 2rem 2rem 2rem 0;
    color: #2c83fb;
    font-weight: bold;
    font-size: 0.8rem;
  }
  h1 {
    font-size: 5rem;
    background: linear-gradient(to right, #2c83fb, #1f76f0);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin: 0;
  }
  h2 {
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0;
    margin-top: 1rem;
    color: #4B6170;
  }
  h3 {
    border-top: 1px solid #e5e5e5;
    padding-top: 1rem;
    font-weight: 400;
  }
`;

const Videos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60vw;
  margin: 0 auto;
  background: #f0f0f0;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8rem 5rem;
  height: 35vh;
  background: #f0f8ff;
`;
const Options = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  background: #f0f8ff;
`;

const Classes = styled.div`
  display: flex;
  padding: 8rem 5rem;
  background: #f0f8ff;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Home() {
  return (
    <main className={Jakarta.className}>
      <GlobalStyle />
      <Logo>
        <Image src={LeadLogo} width={192} height={42} alt="logo" />
      </Logo>
      <Section>
        <span>WEBINARS EXCLUSIVOS</span>
        <h2>Menos conversinha,</h2>
        <div className="bigger-text">
          <h1>Mais Conversão</h1>
          <Image
            className="asset-bigger-text"
            src={AssetHeader}
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
      <Videos>
        <Options>
          <Button product="Agências" />
          <Button product="Chatbot" />
          <Button product="Marketing Digital" />
          <Button product="Geração de Leads" />
          <Button product="Mídia Paga" />
        </Options>
        <Classes>
          <Card src={Thumbnail} width={362} height={204} alt={"thumb"} />
          <Card src={Thumbnail} width={362} height={204} alt={"thumb"} />
          <Card src={Thumbnail} width={362} height={204} alt={"thumb"} />
          <Card src={Thumbnail} width={362} height={204} alt={"thumb"} />
          <Card src={Thumbnail} width={362} height={204} alt={"thumb"} />
          <Card src={Thumbnail} width={362} height={204} alt={"thumb"} />
          <Card src={Thumbnail} width={362} height={204} alt={"thumb"} />
          <Card src={Thumbnail} width={362} height={204} alt={"thumb"} />
          <Card src={Thumbnail} width={362} height={204} alt={"thumb"} />
        </Classes>
        <>
          <h4>Página</h4>
          <Button product="1"></Button>
        </>
      </Videos>
      <></>

      <></>
    </main>
  );
}
