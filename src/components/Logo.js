import Image from 'next/image';
import styles from '@/styles/Logo.module.css';

const Logo = () => {
  const source = '/.././public/ArtBadge-Logo.png';
  const alt =
    'An orange-bordered badge with a green centre and the words "Art Badge" overlaid';
  return (
    <div className={styles.logo}>
      <Image src={source} width={300} height={300} alt={alt} />
    </div>
  );
};

export default Logo;
