import NavBar from '@/components/NavBar';

export default function Layout({ children, home }) {
  return (
    <div>
      <main>{children}</main>
      {!home ? <NavBar /> : null}
    </div>
  );
}
