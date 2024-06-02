import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {

  const handleEmailSubmit = () => {
    window.location.href = 'mailto:poirotonsolana@gmail.com?subject=Request%20for%20Audit&body=Hi%20there,%0D%0A%0D%0AI%20would%20like%20to%20request%20an%20audit%20for%20my%20project.%0D%0A%0D%0AThank%20you.';
  }

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
        <button onClick={handleEmailSubmit} className={styles.button}>Enter APP</button>
        <button onClick={handleEmailSubmit} className={styles.button}>Request an AUDIT</button>
        <button className={styles.button}>Read DOCS</button>
      </div>
    </div>
  );
}
