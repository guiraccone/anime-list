import styles from './Footer.module.css'

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.continueLoad}>
                <button>Continuar</button>
            </div>
            <footer>
                <span>© Crunchyroll, LLC</span>
                <select name="languages" id="languages">
                    <option value="pt-br">Português (Brasil)</option>
                    <option value="en-us">English (US) </option>
                    <option value="ja-ja">日本語</option>
                </select>
            </footer>
        </div>
    )
}