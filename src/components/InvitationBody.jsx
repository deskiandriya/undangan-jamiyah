import { motion } from 'framer-motion';
import styles from '../styles/InvitationBody.module.css';

const InvitationBody = () => {
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className={styles.greeting}
        >
          <p>Assalamu' alaikum Wr. Wb.</p>
        </motion.div>

        <p className={styles.intro}>
          Dalam rangka meningkatkan rasa persaudaraan dan mempererat tali silaturrahmi sesama warga RT 01 RW 03 Kel. Debong Lor, dimohon dengan hormat atas kehadiran Bapak / Saudara pada pertemuan yang akan dilaksanakan pada :
        </p>

        <div className={styles.eventDetails}>
          <div className={styles.eventItem}>
            <span className={styles.icon}>📅</span>
            <div>
              <h3>Hari / Tanggal</h3>
              <p>Kamis malam Jum'at, 29 Mei 2025</p>
            </div>
          </div>
          <div className={styles.eventItem}>
            <span className={styles.icon}>⏰</span>
            <div>
              <h3>Pukul</h3>
              <p>19.30 WIB (Ba'da Isya) s/d selesai</p>
            </div>
          </div>
          <div className={styles.eventItem}>
            <span className={styles.icon}>📍</span>
            <div>
              <h3>Tempat</h3>
              <p>Rumah Bpk. JAMHARI</p>
            </div>
          </div>
          <div className={styles.eventItem}>
            <span className={styles.icon}>🎉</span>
            <div>
              <h3>Acara</h3>
              <p>Pertemuan Rutin Jamiyah Al Hidayah (RT 01)</p>
            </div>
          </div>
        </div>

        <p className={styles.closing}>
          Demikian undangan ini disampaikan, atas perhatian dan kehadirannya kami ucapkan terima kasih
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className={styles.greeting}
        >
          <p>Wassalamu' alaikum Wr. Wb.</p>
        </motion.div>

        <div className={styles.signatures}>
          <motion.div
            variants={itemVariants}
            className={styles.signatureBlock}
            whileHover={{ translateY: -5 }}
          >
            <p className={styles.role}>Sekretaris</p>
            <img src="/assets/images/signature-edi.png" alt="Signature Sekretaris" className={styles.signatureImage} />
            <div className={styles.signatureLine}></div>
            <p className={styles.name}>EDI HARTANTO, S.Pd.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className={styles.signatureBlock}
            whileHover={{ translateY: -5 }}
          >
            <p className={styles.role}>Ketua</p>
            <img src="/assets/images/signature-sorihin.png" alt="Signature Ketua" className={styles.signatureImage} />
            <div className={styles.signatureLine}></div>
            <p className={styles.name}>H. SORIHIN</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InvitationBody;
