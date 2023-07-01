import { MagnifyingGlass, House } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <img
              src="./src/assets/logo.png"
              alt="AnyMedia Logo, with iconic elements of One Piece, Dragon Ball and JoJo's Bizarre Adventure"
            />
          </li>
          <li>
            <NavLink to="/">
              <House size={25} />
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
