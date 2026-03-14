import Link from "next/link";

const Header = () => {
  return (
    <header className="header-container flex justify-between items-center gap-4">
      <div className="logo">LOGO</div>
      <nav>
        <Link href="/">Asosiy</Link>
        <Link href="/menu">Menyu</Link>
        <Link href="/news">Yangiliklar</Link>
        <Link href="/contacts">Kontakt</Link>
      </nav>
      <div className="icons">icons</div>
    </header>
  );
};

export default Header;
