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
import { useState } from "react";
import { ModalComponent } from "../Components/VideoModal";
import Modal from "react-modal";
import { Colors } from "@/styles";

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
  .modal-content{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  background-color: rgba(31,118, 240, 0.25);
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
  color: ${Colors.default};
`;

export default function Home() {
  // const [showElement, setShowElement] = useState(true);

  // useEffect(() => {
  //   setTimeout(function () {
  //     setShowElement(false);
  //   }, 3000);
  // }, []);
  const [isOpen, setIsOpen] = useState(false);
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
          style={{ width: "auto", height: "3.5vh" }}
          alt="logo"
        />
      </Logo>

      <Banner src={AssetHeader} />
      <Items>
        <Options />
        <Classes>
          <Card
            openModal={() => setIsOpen(true)}
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            openModal={() => setIsOpen(true)}
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            openModal={() => setIsOpen(true)}
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            openModal={() => setIsOpen(true)}
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            openModal={() => setIsOpen(true)}
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            openModal={() => setIsOpen(true)}
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            openModal={() => setIsOpen(true)}
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Card
            openModal={() => setIsOpen(true)}
            src={Thumbnail}
            style={{ height: "fit-content", width: "fit-content" }}
            alt={"thumb"}
          />
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="Example Modal"
            className="modal-content"
            ariaHideApp={false}
          >
            <ModalComponent close={() => setIsOpen(false)} />
          </Modal>
          {/* <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="Example Modal"
            className="files-content"
            ariaHideApp={false}
          >
            <FilesSide></FilesSide>
          </Modal> */}
        </Classes>
        <Pagination>
          <h4>Página</h4>
          <SquareButton backgroundColor="white" product="1"></SquareButton>
        </Pagination>
      </Items>
      <Comparation image={Comparativo}></Comparation>
      <Footer />
    </main>

    //   )}
    // </div>
  );
}
