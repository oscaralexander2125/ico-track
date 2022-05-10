import styled from "styled-components";

export const WatchlistCoinInfoContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  padding-left: 150px;
  padding-right: 150px;

  @media only screen and (max-width: 720px) {
    padding: 0 50px;
  }

  @media only screen and (max-width: 419px) {
    padding: 0 20px;
  }
`;

export const RemoveCoinButton = styled.button`
  display: block;
  margin: 30px auto;
`;
