import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import style from '../styles/BackButton.module.css';

export default function BackButton() {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <>
      <Icon
        onClick={handleClick}
        className={style.vector}
        icon="ion:arrow-back-circle"
        data-cy="back"
      />
    </>
  );
}
