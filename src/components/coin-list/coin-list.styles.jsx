import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  margin: 0 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px 40px;
  justify-items: center;
`;

export const CoinContainer = styled.div`
  justify-self: center;
`;
