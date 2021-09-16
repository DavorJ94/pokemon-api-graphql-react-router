import styled from "styled-components";

export const Img = styled.img`
  height: ${({ height }) => (height ? height : "100px")};
  -webkit-animation: spin ${({ speed }) => (speed ? speed : "2s")} linear
    infinite;
  -moz-animation: spin ${({ speed }) => (speed ? speed : "2s")} linear infinite;
  animation: spin ${({ speed }) => (speed ? speed : "2s")} linear infinite;
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
