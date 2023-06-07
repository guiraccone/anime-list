import logo from './assets/logo.svg'
import { MagnifyingGlass, BookmarkSimple, CaretDown, DotsThree } from "@phosphor-icons/react"
import { HeaderContainer } from "./styles";
import { NavLink } from 'react-router-dom';

function opensMenu() {
    const x: any = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
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
        </HeaderContainer >
    )
}