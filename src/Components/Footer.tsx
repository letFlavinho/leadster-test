import styled from "styled-components";
import Image from "next/image";
import LeadLogo from "src/public/logo.png";
import { Logo } from "./Logo";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import { Colors, FooterColors } from "@/styles";

const LeadFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80vw;
  margin: 0 auto;

  table {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
  .column-links {
    display: flex;
    flex-direction: column;
  }
  h3 {
    color: ${Colors.default};
    margin-bottom: 1.5rem;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
  ul li a {
    text-decoration: none;
    color: ${FooterColors.content};
  }
  ul li {
    margin-bottom: 1rem;
  }
  .contato li {
    color: ${FooterColors.content};
  }
  .contato b {
  }
  footer {
    border-top: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    text-align: center;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
  h4 {
    font-weight: 500;
    color: ${FooterColors.content};
  }
  a {
    text-decoration: none;
    color: ${FooterColors.link};
  }
`;
const Networks = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export function Footer() {
  return (
    <LeadFooter>
      <Logo>
        <Image
          src={LeadLogo}
          style={{ width: "auto", height: "2.25rem" }}
          alt="logo"
        />
        <h4>Transformando visitantes em clientes.</h4>
      </Logo>
      <table>
        <div>
          <h3>Links Principais</h3>

          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Ferramenta</a>
            </li>
            <li>
              <a href="">Preços</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Cases</h3>
          <ul>
            <li>
              <a href="">Geração de Leads B2B</a>
            </li>
            <li>
              <a href="">Geração de Leads em Software</a>
            </li>
            <li>
              <a href="">Geração de Leads em Imobiliária</a>
            </li>
            <li>
              <a href="">Cases de Sucesso</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Materiais</h3>
          <ul>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Parceria com Agências</a>
            </li>
            <li>
              <a href="">Guia definitivo do Marketing</a>
            </li>
            <li>
              <a href="">Materiais Gratuitos</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Siga a Leadster</h3>

          <ul className="contato">
            <Networks>
              <TiSocialLinkedinCircular
                style={{
                  height: "4.8vh",
                  width: "auto",
                  color: `${Colors.default}`,
                }}
              />
              <TiSocialFacebookCircular
                style={{
                  height: "4.8vh",
                  width: "auto",
                  color: `${Colors.default}`,
                }}
              />
              <TiSocialInstagramCircular
                style={{
                  height: "4.8vh",
                  width: "auto",
                  color: `${Colors.default}`,
                }}
              />
            </Networks>
            <>E-mail:</>
            <li>contato@leadster.com.br</li>

            <>Telefone:</>
            <li>(42)98828-9851</li>
          </ul>
        </div>
      </table>

      <footer>
        <h4>
          Copyright 2015 - 2022 Todos os direitos reservados |{" "}
          <a href="#">Leadster</a>
        </h4>
        <h4>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          Termos de uso
        </h4>
      </footer>
    </LeadFooter>
  );
}
