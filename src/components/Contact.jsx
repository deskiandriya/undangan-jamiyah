import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.container}
    >
      <motion.div variants={itemVariants} className={styles.content}>
        <h2 className={styles.title}>Kontak</h2>
        
        <div className={styles.contactGrid}>
          <motion.div 
            variants={itemVariants}
            className={styles.contactItem}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>📞</span>
            </div>
            <div className={styles.contactInfo}>
              <h3>Telepon</h3>
              <p>+62 858-4224-8393</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className={styles.contactItem}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>📱</span>
            </div>
            <div className={styles.contactInfo}>
              <h3>WhatsApp</h3>
              <p>+62 858-4224-8393</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className={styles.contactItem}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>📧</span>
            </div>
            <div className={styles.contactInfo}>
              <h3>Email</h3>
              <p>editanto290578@gmail.com</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className={styles.contactItem}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>📍</span>
            </div>
            <div className={styles.contactInfo}>
              <h3>Alamat</h3>
              <p>RT 01 RW 03 Kel. Debong Lor, Kec. Tegal Barat, Kota Tegal</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className={styles.socialMedia}
        >
          <h3>Media Sosial</h3>
          <div className={styles.socialIcons}>
            <motion.a 
              href="#" 
              className={styles.socialIcon}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>📱</span>
            </motion.a>
            <motion.a 
              href="#" 
              className={styles.socialIcon}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>💬</span>
            </motion.a>
            <motion.a 
              href="#" 
              className={styles.socialIcon}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>📸</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact; 
