import Link from 'next/link';
import styles from './Footer.module.css'; 


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2022 MySocialApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
