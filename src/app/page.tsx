"use client";
import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";
import LeadLogo from "src/public/logo.png";
import { Logo } from "../Components/Logo";
import { AnimButton } from "@/Components/AnimButton";
import { Card } from "@/Components/Card";
import Thumbnail from "src/public/thumbnail.png";
import AssetHeader from "src/public/asset-header.png";
import { Plus_Jakarta_Sans } from "next/font/google";
import Comparativo from "src/public/comparativo_img_CTA.png";
import { Comparation } from "@/Components/Comparation";
import { SquareButton } from "@/Components/SquareButton";
import { MainSection } from "@/Components/MainSection";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Videos = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  margin: 0 auto;
`;

const Classes = styled.div`
  display: flex;
  padding: 2em 5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Options = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  justify-content: space-between;
`;

const Filter = styled.div`
  float: right;
`;

const Types = styled.div`
  float: left;
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <main className={Jakarta.className}>
      <GlobalStyle />
      <Logo>
        <Image src={LeadLogo} width={192} height={42} alt="logo" />
      </Logo>
      <MainSection src={AssetHeader} />
      <Videos>
        <Options>
          <Types>
            <AnimButton backgroundColor={"white"} product="Agências" />
            <AnimButton backgroundColor={"white"} product="Chatbot" />
            <AnimButton backgroundColor={"white"} product="Marketing Digital" />
            <AnimButton backgroundColor={"white"} product="Geração de Leads" />
            <AnimButton backgroundColor={"white"} product="Mídia Paga" />
          </Types>
          <Filter>
            <select id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </Filter>
        </Options>
        <Classes>
          <Card src={Thumbnail} width={177} height={100} alt={"thumb"} />
          <Card src={Thumbnail} width={177} height={100} alt={"thumb"} />
          <Card src={Thumbnail} width={177} height={100} alt={"thumb"} />
          <Card src={Thumbnail} width={177} height={100} alt={"thumb"} />
          <Card src={Thumbnail} width={177} height={100} alt={"thumb"} />
          <Card src={Thumbnail} width={177} height={100} alt={"thumb"} />
          <Card src={Thumbnail} width={177} height={100} alt={"thumb"} />
          <Card src={Thumbnail} width={177} height={100} alt={"thumb"} />
          <Card src={Thumbnail} width={177} height={100} alt={"thumb"} />
        </Classes>
        <Pagination>
          <h4>Página</h4>
          <SquareButton backgroundColor={"white"} product="1"></SquareButton>
        </Pagination>
      </Videos>
      <Comparation image={Comparativo}></Comparation>
    </main>
  );
}
