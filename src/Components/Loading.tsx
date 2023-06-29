import styled from "styled-components";

const Loadout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  background: #fff;
`;

export function Loading() {
  return <Loadout>Loading...</Loadout>;
}
