import Link from 'next/link';
import { Icon } from '@iconify/react';
import style from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={style.NavContainer}>
      <ul>
        <li>
          <Link href="/">
            <Icon className={style.vector} icon="material-symbols:home" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Icon
              className={style.vector}
              icon="material-symbols:help-center"
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Icon className={style.addButton} icon="material-symbols:add" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Icon className={style.vector} icon="fa6-solid:ranking-star" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Icon
              className={style.vector}
              icon="fluent:book-contacts-20-filled"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
