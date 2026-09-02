import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-10 w-full text-white">
      <nav className="mx-auto flex min-h-[82px] w-[min(1140px,calc(100%-40px))] items-center justify-between">

        {/* Logo */}

        <a
          href="#"
          className="inline-flex items-center gap-[10px] font-serif text-[1.25rem] font-bold">
          <span className="grid h-[31px] w-[31px] rotate-[-45deg] place-items-center rounded-[50%_50%_50%_9px] border-2 border-current text-[0.78rem]">
            <span className="rotate-[45deg]">
              U
            </span>
          </span>
          Uniworld Stays
        </a>


        {/* Desktop Navigation */}

        <div className="hidden items-center gap-[26px] text-[0.95rem] font-semibold md:flex">

          <a href="#about" className="hover:opacity-70">
            About us
          </a>

          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>

          <a
            href="https://wa.me/"
            className="rounded-full bg-white px-4 py-[10px] text-[0.95rem] text-black">
            WhatsApp
          </a>
        </div>


        {/* Mobile Hamburger */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-[44px] w-[44px] items-center justify-center text-2xl md:hidden"
          aria-label="Open menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>


      {/* Mobile Menu */}

    <div
    className={`mx-[14px] overflow-hidden rounded-[12px] bg-[#073d2b] shadow-lg transition-all duration-300 ease-out md:hidden ${
        menuOpen
        ? "max-h-[260px] translate-y-0 opacity-100"
        : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
    }`}>

    <div className="flex flex-col p-[24px]">
        <a
    href="#about"
    onClick={() => setMenuOpen(false)}
    className="ml-[16px] py-[12px] text-[1rem] font-semibold transition-opacity duration-200 hover:opacity-70">
    About us
    </a>

    <a
    href="#contact"
    onClick={() => setMenuOpen(false)}
    className="ml-[16px] py-[12px] text-[1rem] font-semibold transition-opacity duration-200 hover:opacity-70">
    Contact
    </a>

    <a
      href="https://wa.me/"
      onClick={() => setMenuOpen(false)}
      className="mt-[8px] w-fit rounded-full bg-white px-[20px] py-[11px] text-[1rem] font-semibold text-black transition-transform duration-200 hover:scale-105">
      WhatsApp
    </a>

  </div>
</div>

    </header>
  )
}

export default Navbar