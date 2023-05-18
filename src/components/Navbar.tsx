import styles from './Navbar.module.css'
import crunchyrollLogo from '../assets/crunchyroll-logo.svg';
import { MagnifyingGlass, BookmarkSimple, CaretDown } from "@phosphor-icons/react"


export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navSideLeft}>
                <img src={crunchyrollLogo} alt="Logo da Crunchyroll." />
                <button>Navegar <CaretDown /></button>
                <button>Favoritos</button>
            </div>
            <div className={styles.navSideRight}>
                <button><MagnifyingGlass size={25} /></button>
                <button><BookmarkSimple size={25} /></button>
                <button>
                    <img
                        className={styles.profile}
                        width={40}
                        src='https://static.crunchyroll.com/assets/avatar/170x170/1060-black-clover-nero.png'
                    />
                </button>
            </div>
        </nav>
    )
}