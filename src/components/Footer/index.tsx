import { FooterContainer } from "./styles"

export function Footer() {
    return (
        <FooterContainer>
            <div>
                <footer>
                    <span>© Crunchyroll, LLC</span>
                    <select name="languages" id="languages">
                        <option value="pt-br">Português (Brasil)</option>
                        <option value="en-us">English (US) </option>
                        <option value="ja-ja">日本語</option>
                    </select>
                </footer>
            </div>
        </FooterContainer>
    )
}