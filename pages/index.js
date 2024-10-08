import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import ComingSoonModal from '../components/ComingSoonModal';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEmailSubmit = () => {
    window.location.href = 'mailto:info@thepoirot.xyz?subject=Request%20for%20Audit&body=Hi%20there,%0D%0A%0D%0AI%20would%20like%20to%20request%20an%20audit%20for%20my%20project.%0D%0A%0D%0AThank%20you.';
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
        <button onClick={() => window.open('https://beta.thepoirot.xyz', '_blank')} className={styles.button}>Enter APP</button>
        <button onClick={handleEmailSubmit} className={styles.button}>Request an AUDIT</button>
        <button
          className={styles.button}
          onClick={() => window.open('https://docs.thepoirot.xyz', '_blank')}
        >
          Read DOCS
        </button>
      </div>

      <ComingSoonModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
