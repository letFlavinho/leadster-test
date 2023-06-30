import styled from "styled-components";

const Loadout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export function Loading() {
  return <Loadout>Loading...</Loadout>;
}
