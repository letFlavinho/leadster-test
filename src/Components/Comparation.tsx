import Image from "next/image";
import styled from "styled-components";
import seloTop10 from "src/public/selo_RD.png";
import rating from "src/public/rating.webp";
import lilCard from "src/public/no-card-dark.webp";

type ComparationProps = {
  image: any;
};

const Feedback = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;

  h1 {
    color: #4b6170;
    font-weight: 400;
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
    font-weight: 400;
    border: none;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
  }
  aside {
    display: flex;
    flex-direction: column;
  }
  .top-right {
    border-bottom: 1px solid #e5e5e5;
  }
  .middle-right {
    padding-top: 2rem;
    display: flex;
    align-items: center;
  }
  .selo {
    margin-left: 1rem;
  }
  .card {
    border-right: 2px solid #4b6170;
  }
  h5 {
    padding-right: rem;
    color: #4b6170;
  }
`;

const Observations = styled.div`
  display: flex;
`;

export function Comparation(props: ComparationProps) {
  return (
    <Feedback>
      <div>
        <Image
          src={props.image}
          width={739}
          height={687}
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
            width={195}
            height={65}
          />
        </div>
        <Observations>
          <h5 className="card">
            <Image src={lilCard} alt="selo-top-10" width={16} height={16} />
            Não é necessário Cartão de Crédito
          </h5>

          <h5>
            <Image src={rating} alt="selo-top-10" width={92} height={16} />
            4.9/5 média de satisfação
          </h5>
        </Observations>
      </aside>
    </Feedback>
  );
}
