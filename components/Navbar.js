import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <button className="menuButton">
        <img src="/icons/menu.svg" className="linkIcon"/>
      </button>
      <div className="navbarContent">
        <Link href="/">
          home
        </Link>
        <Link href="/mixes">
          mixes
        </Link>
        <Link href="/blog">
          bullshitting
        </Link>
      </div>
    </nav>
  )
}