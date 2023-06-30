"use client";
import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";
import LeadLogo from "src/public/logo.png";
import { Logo } from "../Components/Logo";
import { Card } from "@/Components/Card";
import Thumbnail from "src/public/thumbnail.png";
import AssetHeader from "src/public/asset-header.png";
import { Plus_Jakarta_Sans } from "next/font/google";
import Comparativo from "src/public/comparativo_img_CTA.png";
import { Comparation } from "@/Components/Comparation";
import { SquareButton } from "@/Components/SquareButton";
import { MainSection } from "@/Components/MainSection";
import { Footer } from "@/Components/Footer";
import { Options } from "@/Components/Options";
import { useState, useEffect } from "react";
import { Loading } from "@/Components/Loading";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10rem;
`;

const Classes = styled.div`
  display: flex;
  padding: 2em 5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);

  return (
    <div>
      {showElement ? (
        <Loading />
      ) : (
        <div>
          <main className={Jakarta.className}>
            <GlobalStyle />
            <Logo>
              <Image src={LeadLogo} width={192} height={42} alt="logo" />
            </Logo>
            <MainSection src={AssetHeader} />
            <Items>
              <Options />
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
                <SquareButton
                  backgroundColor={"white"}
                  product="1"
                ></SquareButton>
              </Pagination>
            </Items>
            <Comparation image={Comparativo}></Comparation>
            <Footer />
          </main>
        </div>
      )}
    </div>
  );
}
