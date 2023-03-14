import Image from 'next/image';

const Logo = () => {
  const source = '.././public/ArtBadge-Logo.png';
  console.log(source);
  return <Image src={source} alt="Art Badge logo" />;
};

export default Logo;
