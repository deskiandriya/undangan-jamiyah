import { motion } from 'framer-motion';
import styles from '../styles/Header.module.css';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.header}
    >
      <motion.div variants={itemVariants} className={styles.titleContainer}>
        <motion.img 
          src="/assets/images/logo.png" 
          alt="Logo Jamiyah Al Hidayah"
          className={styles.logo}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.h1 variants={itemVariants} className={styles.title}>
          JAMIYAH 'AL HIDAYAH'
        </motion.h1>
        <motion.p variants={itemVariants} className={styles.address}>
          Sekretariat: RT 01 RW 03 Kel. Debong Lor, Kec. Tegal Barat, Kota Tegal
          <br />
          Kontak: +62 858-4224-8393
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={styles.letterHead}
      >
        <div className={styles.letterInfo}>
          <div className={styles.letterLeft}>
            <p>Nomor : 04/JAH/V/2025</p>
            <p>Lamp. : -</p>
            <p>Perihal : UNDANGAN</p>
          </div>
          <div className={styles.letterRight}>
            <p>Tegal, 29 Mei 2025</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className={styles.recipient}
      >
        <p>Kepada,</p>
        <div className={styles.recipientDetails}>
          <p>Yth. Bapak / Saudara</p>
          <p>Anggota Jamiyah Alhidayah</p>
          <p>Di tempat</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
