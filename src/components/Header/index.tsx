import { MagnifyingGlass, CaretDown, DotsThree } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

function opensMenu() {
  const x: any = document.querySelector("section");
  x.style.display === "flex"
    ? (x.style.display = "none")
    : (x.style.display = "flex");
}

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <button onClick={opensMenu}>
          <DotsThree size={30} />
        </button>

        <article>
          <NavLink to="/">
            <img src="./src/assets/logo.png" alt="Logo da AnyMedia." />
          </NavLink>
        </article>

        <ul>
          <li>
            <NavLink to="/search">
              <MagnifyingGlass size={25} />
            </NavLink>
          </li>
          <li>
            <button>
              Navegar <CaretDown />
            </button>
          </li>
        </ul>
      </nav>
      <section>
        <ul>
          <li>
            <button>
              Pesquisar <MagnifyingGlass size={25} />
            </button>
          </li>
          <li>
            <button>
              Navegar <CaretDown />
            </button>
          </li>
        </ul>
      </section>
    </HeaderContainer>
  );
}
