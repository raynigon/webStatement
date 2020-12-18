import { Carousel } from 'react-bootstrap'
import Image from 'next/image'
import styles from './banner.module.scss'

export default function Banner() {
    return (
        <div className={styles.BannerContainer}>
            <Carousel
                controls={false}
                keyboard={false}
                indicators={false}
                className={"container-lg"}>
                <Carousel.Item>
                    <Image
                        src="/images/low_numbers.png"
                        width="669"
                        height="502"
                    />
                    <Carousel.Caption className={styles.BannerText}>
                        <h3>Containing COVID-19</h3>
                        <p>A joint statement of scientists from all across Europe.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="/images/europe.png"
                        width="669"
                        height="502"
                    />

                    <Carousel.Caption className={styles.BannerText}>
                        <h3>Containing COVID-19</h3>
                        <p>A joint statement of scientists from all across Europe.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}