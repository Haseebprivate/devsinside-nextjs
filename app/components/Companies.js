import styles from './Companies.module.css'

export default function Companies(){
    return (
        <section className={styles['section-companies']}>
       
       <div >
                <div className={styles['ribbon-container']}>
                    <div className={styles.ribbon}>
                    <span> • We have 100+ satisfied clients - BE ONE</span>
                    <span> • We have 100+ satisfied clients - BE ONE</span>
                    <span> • We have 100+ satisfied clients - BE ONE</span>
                    </div>
                    <div className={styles['ribbon-behind']}>
                    <span> • We have 100+ satisfied clients - BE ONE</span>
                    <span> • We have 100+ satisfied clients - BE ONE</span>
                    <span> • We have 100+ satisfied clients - BE ONE</span>
                    </div>

                    
                </div>
                
                <div className={styles['section-companies-img']}>
                    <img width='80%' src='/companies-logos.svg' />
                </div>
                <div className={styles['section-companies-text']}>
                    <p>Done work with Asia's largest brands and ecommerce stores</p>
                </div>
                </div>
      
        </section>
    )
}