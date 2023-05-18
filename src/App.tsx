import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

import styles from "./App.module.css"
import './global.css'

export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Navbar />
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </>

  )
}

