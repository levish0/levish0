import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <Link href="/" className="text-xl normal-case btn btn-ghost">
          SHIÜO
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a>Blog</a>
          </li>
          <li>
            <Link href="/social">Social</Link>
          </li>
          <li>
            <Link href="/artworks">Art</Link>
          </li>
          <li>
            <Link href="/music">Music</Link>
          </li>
          <li>
            <Link href="/softwares">Software</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="https://www.patreon.com/shiueo" className="btn">
          Become a patron!
        </Link>
      </div>
    </div>
  );
}
