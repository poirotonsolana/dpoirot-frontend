import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.fullScreenImageContainer}>
      <Image
        src="/landing-page.png"
        alt="Landing Page Image"
        layout="fill"
        objectFit="cover"
        quality={100} // adjust quality as needed
      />

      <div className={styles.buttonsContainer}>
        <button className={styles.button}>Enter APP</button>
        <button className={styles.button}>Request an AUDIT</button>
        <button className={styles.button}>Read DOCS</button>
      </div>
    </div>
  );
}
