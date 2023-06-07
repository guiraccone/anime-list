import logo from './assets/logo.svg'
import { MagnifyingGlass, BookmarkSimple, CaretDown, DotsThree } from "@phosphor-icons/react"
import { HeaderContainer } from "./styles";
import { NavLink } from 'react-router-dom';

function opensMenu() {
    const x: any = document.querySelector("section");
    x.style.display === "flex" ? x.style.display = "none" : x.style.display = "flex";
}


export function Header() {
    return (
        <HeaderContainer>
            <nav>
                <button onClick={opensMenu}><DotsThree size={30} /></button>
                <ul>
                    <li><button><MagnifyingGlass size={25} /></button></li>
                    <li><NavLink to="/bookmarked" ><BookmarkSimple size={25} /></NavLink></li>
                    <li><button>Navegar <CaretDown /></button></li>
                    <li><NavLink to="/favorites">Favoritos</NavLink></li>
                </ul>
                <NavLink to="/"><img src={logo} alt="Logo da Crunchyroll." /></NavLink>
            </nav >
            <section>
                <ul>
                    <li><button>Pesquisar <MagnifyingGlass size={25} /></button></li>
                    <li><button><NavLink to="/bookmarked" >Animes Salvos<BookmarkSimple size={25} /></NavLink></button></li>
                    <li><button>Navegar <CaretDown /></button></li>
                    <li><button><NavLink to="/favorites">Favoritos</NavLink></button></li>
                </ul>
            </section>
        </HeaderContainer >
    )
}