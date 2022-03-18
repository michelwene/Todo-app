import styled from "styled-components";
import ImgLightDesktop from "../../assets/bg-desktop-light.jpg";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: url(${ImgLightDesktop}) center / cover no-repeat;

  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 25%;

    > h1 {
      color: var(--color-title);
      letter-spacing: 1.1rem;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;
