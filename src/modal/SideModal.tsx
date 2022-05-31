import { ReactNode } from 'react';
import styles from './modal.module.css';
const SideModal: React.FC<{
  children: ReactNode;
  className?: string;
  otherProps?: any;
}> = ({ children, className, otherProps }) => {
  return (
    <div
      className={`${styles.sideModal} min-w-[15rem] min-h-[5rem] ${
        className && className
      }`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default SideModal;
