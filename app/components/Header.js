import styles from './Header.module.css'
import logo from '../../public/header-logo.svg'

export default function Header() {
 return <header>
    <div>
    <div className={styles.header}>
        
        <div className={styles['button-container-parent']}>
            <div className={styles["button-container"]}>
            <button className={styles.button}>SHOPIFY PARTNER AGENT</button>
            <button className={styles.button}>ABOUT US</button>
            <button className={styles.button}>CONTACT</button>
            </div>
        </div>
    </div>
    </div>
    <div>
        <div className={styles["section-header"]}>
            <div>
                <img src='/header-logo.svg' />
            </div>
            <div>
                <ul className={styles['list-items']}>
                    <li className={styles.li}>Work</li>
                    <li className={styles.li}>Services</li>
                    <li className={styles.li}>Services</li>
                    <li className={styles.li}>Industries</li>
                    <li className={styles.li}>Resources</li>
                    <li className={styles['list-item-button']}>GET A QOUTE</li>
                </ul>
            </div>
        </div>
    </div>
 </header>
}