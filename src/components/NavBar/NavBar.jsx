import { useEffect, useState } from 'react';
import { CheckSquare, LayoutList, Menu, X } from 'lucide-react';

import styles from './NavBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);

    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className={styles.toggleIcon} />
        ) : (
          <Menu className={styles.toggleIcon} />
        )}
      </button>

      <nav className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.topSpace} />

        {isOpen && (
          <>
            <div className={styles.separator} />

            <div className={styles.menu}>
              <a href="#about" className={styles.item}>
                <LayoutList className={styles.icon} />
                <span className={styles.label}>About</span>
              </a>

              <a href="#skills" className={styles.item}>
                <CheckSquare className={styles.icon} />
                <span className={styles.label}>Skills</span>
              </a>

              <a href="#projects" className={styles.item}>
                <LayoutList className={styles.icon} />
                <span className={styles.label}>Projects</span>
              </a>

              <a href="#contact" className={styles.item}>
                <CheckSquare className={styles.icon} />
                <span className={styles.label}>Contact</span>
              </a>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;