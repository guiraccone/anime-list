import logo from './assets/logo.svg'
import { MagnifyingGlass, BookmarkSimple, CaretDown } from "@phosphor-icons/react"
import { HeaderContainer } from "./styles";



export function Header() {
    return (
        <HeaderContainer>
            <nav>
                <div className='navSideLeft'>
                    <img src={logo} alt="Logo da Crunchyroll." />
                    <button>Navegar <CaretDown /></button>
                    <button>Favoritos</button>
                </div>
                <div className='navSideRight'>
                    <button><MagnifyingGlass size={25} /></button>
                    <button><BookmarkSimple size={25} /></button>
                    <button>
                        <img
                            className='profile'
                            width={40}
                            src='https://static.crunchyroll.com/assets/avatar/170x170/1060-black-clover-nero.png'
                        />
                    </button>
                </div>
            </nav >
        </HeaderContainer>
    )
}