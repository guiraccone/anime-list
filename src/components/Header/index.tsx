import { MagnifyingGlass, House } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <House size={25} />
            </NavLink>
          </li>
          <li>
            <img
              alt="AnyMedia Logo, with iconic elements of One Piece, Dragon Ball and JoJo's Bizarre Adventure"
              src="https://i.ibb.co/JKP7HgH/logo.png"
            />
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
