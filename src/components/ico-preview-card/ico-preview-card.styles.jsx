import styled from "styled-components";
import { Link } from "react-router-dom";

export const CoinImagePreviewLogo = styled.img`
  width: 80px;
  height: 80px;
  display: block;
  margin: 60px auto 25px;
`;

export const CoinPreviewInfoContainer = styled.div`
  padding-left: 17px;
  padding-right: 17px;
`;

export const ReadMoreLink = styled(Link)`
  display: block;
  margin-top: 10px;
  font-weight: 500;
  text-decoration: none;
  color: #0c00c3;
`;
