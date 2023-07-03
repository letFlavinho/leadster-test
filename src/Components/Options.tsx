import styled from "styled-components";
import { AnimButton } from "./AnimButton";
import { Plus_Jakarta_Sans } from "next/font/google";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const StyledOptions = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  justify-content: space-between;
  padding: 2rem 0 1rem;
  @media screen and (max-width: 1280px) {
    justify-content: space-evenly;
  }
  select {
    background: url("data:image/svg+xml,<svg height='0.6rem' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")
      no-repeat;
    background-position: calc(100% - 0.75rem) center !important;
    -moz-appearance: none !important;
    -webkit-appearance: none !important;
    appearance: none !important;
    padding-right: 2rem !important;
    padding: 0.5rem 0.7rem;
    border-radius: 0.6rem;
    border-color: #4b6170;
    font-weight: 600;
    color: #4b6170;
  }
  label {
    margin-right: 0.5rem;
    font-weight: 600;
    color: #4b6170;
    @media screen and (max-width: 1280px) {
      display: none;
    }
  }
`;

const Filter = styled.div`
  float: right;
`;

const Types = styled.div`
  float: left;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

const MobileFilter = styled.div`
  @media screen and (min-width: 1280px) {
    display: none;
    float: left;
  }
`;

export function Options() {
  return (
    <StyledOptions>
      <MobileFilter>
        <select className={Jakarta.className}>
          <option value="">Agências</option>
          <option value="">Chatbot</option>
          <option value="">Marketing Digital</option>
          <option value="">Geração de Leads</option>
          <option value="">Mídia Paga</option>
        </select>
      </MobileFilter>
      <Types>
        <AnimButton backgroundColor={"white"} product="Agências" />
        <AnimButton backgroundColor={"white"} product="Chatbot" />
        <AnimButton backgroundColor={"white"} product="Marketing Digital" />
        <AnimButton backgroundColor={"white"} product="Geração de Leads" />
        <AnimButton backgroundColor={"white"} product="Mídia Paga" />
      </Types>

      <Filter>
        <label>Ordenar por</label>
        <select className={Jakarta.className}>
          <option value="">Data de Publicação</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </Filter>
    </StyledOptions>
  );
}
