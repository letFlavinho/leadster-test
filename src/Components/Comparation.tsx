import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import seloTop10 from "src/public/selo_RD.png";
import rating from "src/public/rating.webp";
import lilCard from "src/public/no-card-dark.webp";

type ComparationProps = {
  image: StaticImageData;
};

const Feedback = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  h1 {
    color: #4b6170;
    font-weight: 400;
    @media screen and (max-width: 900px) {
      font-size: 1rem;
    }
  }
  h3 {
    color: #4b6170;
    font-weight: 400;
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
    padding-top: 2rem;
    display: flex;
    align-items: center;
  }
  .selo {
    margin-left: 1rem;
  }
`;

const Observations = styled.div`
  display: flex;

  .card {
    border-right: 2px solid #4b6170;
  }
  .rating {
    padding-left: 0.8rem;
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
    <Feedback>
      <div>
        <Image
          src={props.image}
          style={{ width: "40vw", height: "fit-content" }}
          alt="comparativo"
        ></Image>
      </div>

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
            className="selo"
            src={seloTop10}
            alt="selo-top-10"
            style={{
              height: "4rem",
            }}
          />
        </div>
        <Observations>
          <h5 className="card">
            <Image
              className="obs-assets"
              src={lilCard}
              alt="selo-top-10"
              style={{
                width: "1rem",
                height: "rem",
              }}
              width={16}
              height={16}
            />
            Não é necessário Cartão de Crédito
          </h5>

          <h5 className="rating">
            <Image
              className="obs-assets"
              src={rating}
              alt="selo-top-10"
              style={{ width: "3rem", height: "fit-content" }}
            />
            4.9/5 média de satisfação
          </h5>
        </Observations>
      </aside>
    </Feedback>
  );
}
