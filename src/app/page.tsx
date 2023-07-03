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

import { Footer } from "@/Components/Footer";
import { Options } from "@/Components/Options";

import { Loading } from "@/Components/Loading";
import { Banner } from "@/Components/Banner";

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
    flex-direction: column;
    justify-content: center;
    
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    margin: 0 9rem;
  }
  /* margin: 0 10rem; */
`;

const Classes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 900px) {
    padding: 2rem;
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  // const [showElement, setShowElement] = useState(true);

  // useEffect(() => {
  //   setTimeout(function () {
  //     setShowElement(false);
  //   }, 3000);
  // }, []);

  return (
    // <div>
    //   {showElement ? (
    //     <Loading />
    //   ) : (

    <main className={Jakarta.className}>
      <GlobalStyle />
      <Logo>
        <Image
          src={LeadLogo}
          style={{ width: "fit-content", height: "5vh" }}
          alt="logo"
        />
      </Logo>

      <Banner src={AssetHeader} />
      <Items>
        <Options />
        <Classes>
          <Card
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
        </Classes>
        <Pagination>
          <h4>Página</h4>
          <SquareButton backgroundColor={"white"} product="1"></SquareButton>
        </Pagination>
      </Items>
      <Comparation image={Comparativo}></Comparation>
      <Footer />
    </main>

    //   )}
    // </div>
  );
}
