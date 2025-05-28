import { motion } from 'framer-motion';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8
      }
    }
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.footer}
    >
      <div className={styles.contactInfo}>
        <p>📞 +62 812-3456-7890</p>
        <p>📧 info@jamiyahalhidayah.com</p>
      </div>
      <p className={styles.copyright}>&copy; {currentYear} Jamiyah Al Hidayah. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
