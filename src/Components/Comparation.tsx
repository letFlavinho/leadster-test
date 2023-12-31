import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import seloTop10 from "src/public/selo_RD.png";
import rating from "src/public/rating.webp";
import lilCard from "src/public/no-card-dark.webp";

// #e6f3ff
type ComparationProps = {
  image: StaticImageData;
};

const Feedback = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f0f8ff;
  padding: 2rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  h1 {
    color: #4b6170;
    font-weight: 400;
    @media screen and (max-width: 1280px) {
      font-size: 1.2rem;
    }
  }
  h3 {
    color: #4b6170;
    font-weight: 400;
    @media screen and (max-width: 1280px) {
      font-size: 0.9rem;
    }
  }
  a {
    background-color: #2c83fb;
    color: white;
    border-radius: 2rem;
    padding: 1rem 2rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    @media screen and (max-width: 900px) {
      padding: 0.4rem 0.8rem;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 900px) {
      align-items: center;
    }
  }
  .top-right {
    border-bottom: 1px solid #e5e5e5;
    @media screen and (max-width: 900px) {
      text-align: center;
    }
  }
  .middle-right {
    display: flex;
    align-items: center;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      padding-top: 1.5rem;
    }
  }

  .mountain {
    background: black;
    border-radius: 2rem;
    bottom: 2rem;
    transform: rotate(45deg);
  }
`;

const Observations = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  .card {
    @media screen and (min-width: 900px) {
      border-right: 2px solid #4b6170;
    }
  }
  .rating {
    @media screen and (min-width: 900px) {
      padding-left: 0.8rem;
    }
  }
  h5 {
    text-align: center;
    color: #4b6170;
    padding-right: 0.8rem;
  }
  .obs-assets {
    margin-right: 0.2rem;
  }
`;

export function Comparation(props: ComparationProps) {
  return (
    <>
      <Feedback>
        <Image
          src={props.image}
          style={{ width: "auto", height: "38vw" }}
          alt="comparativo"
        ></Image>

        <aside>
          <div className="top-right">
            <h1>
              Pronto para triplicar sua <b>Geração de Leads?</b>
            </h1>
            <h3>Criação e ativação em 4 minutos</h3>
          </div>
          <div className="middle-right">
            <a
              target="_blank"
              href="https://www.w3schools.com/css/css3_buttons.asp"
            >
              VER DEMONSTRAÇÃO
            </a>
            <Image
              style={{
                width: "auto",
                height: "7.5vh",
                margin: "1rem",
              }}
              src={seloTop10}
              alt="selo-top-10"
            />
          </div>
          <Observations>
            <h5 className="card">
              <Image
                className="obs-assets"
                src={lilCard}
                alt="selo-top-10"
                style={{
                  width: "auto",
                  height: "1.5vh",
                }}
              />
              Não é necessário Cartão de Crédito
            </h5>

            <h5 className="rating">
              <Image
                className="obs-assets"
                src={rating}
                alt="selo-top-10"
                style={{
                  width: "auto",
                  height: "1.2vh",
                }}
              />
              4.9/5 média de satisfação
            </h5>
          </Observations>
        </aside>
      </Feedback>
      {/* <div className="mountain">kçnjsd</div> */}
    </>
  );
}
