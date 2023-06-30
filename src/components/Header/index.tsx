import { MagnifyingGlass } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <img src="./src/assets/logo.png" alt="Logo da AnyMedia." />
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              <MagnifyingGlass size={25} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
