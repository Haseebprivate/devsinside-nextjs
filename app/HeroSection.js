import styles from './HeroSection.module.css'

export default function HeroSection() {
    return (
        <section>
            <div style={{margin: "80px"}}>
                <div>
                    <div style={{display: 'flex', alignItems: "center", gap: "16px"}}>
                        <div className={styles['hero-section-text']}><span>Be</span> Better</div>
                        <div>
                            <img src='/hero-section-flag-image.svg'/>
                        </div>
                    </div>
                    <div className={styles['hero-section-text']}><span>& </span>Build <span>Different.</span></div>
                </div>
                <div style={{marginTop: '54px', marginLeft: "10px", fontWeight: "lighter"}}>We carefully plan the entire migration process to help you avoid<br></br> unnecessary stress and speed up the launch.</div>
                <div style={{marginTop: "108px", display: 'flex', gap: "40px", alignItems: "center"}}>
                    <a><img src='/hero-social-icon-github.svg'/></a>
                    <a><img src='/hero-social-icon-discord.svg'/></a>
                    <a><img src='/hero-social-icon-x.svg'/></a>
                    <a><img src='/hero-social-icon-linkedin.svg'/></a>
                    <a><img src='/hero-social-icon-facebook.svg'/></a>
                    <a><img src='/hero-social-icon-instagram.svg'/></a>
                </div>
            </div>
        </section>
    )
}