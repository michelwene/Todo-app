import { StyledHeader } from "./styles";
import IconMoon from "../../assets/icon-moon.svg";

export function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>todo</h1>
        <a href="">
          <img src={IconMoon} alt="moon" />
        </a>
      </div>
    </StyledHeader>
  );
}
