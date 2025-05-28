import { motion } from 'framer-motion';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <div className={styles.batikOverlay} />
      <div className={styles.content}>
        {children}
      </div>
    </motion.div>
  );
};

export default Layout;
