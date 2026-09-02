function Footer() {
  return (
    <footer className="bg-[#073d2b] text-white">
      <div className="mx-auto flex w-[min(1140px,calc(100%-40px))] items-center justify-between border-t border-white/10 py-[24px]">

  {/* Contact Links - Left */}

  <div className="flex items-center gap-[18px] text-[.9rem]">

    <a
      href="mailto:hello@uniworldstays.com"
      className="text-[.9rem] opacity-75 hover:opacity-100"
    >
      hello@uniworldstays.com
    </a>

    <span className="h-[18px] w-px bg-white/30"></span>

    <a
      href="https://wa.me/"
      className="text-[.9rem] opacity-75 hover:opacity-100"
    >
      WhatsApp
    </a>

    <span className="h-[18px] w-px bg-white/30"></span>

    <a
      href="tel:"
      className="text-[.9rem] opacity-75 hover:opacity-100"
    >
      Call us
    </a>

  </div>


  {/* Copyright - Right */}

  <p className="text-[.85rem] opacity-75">
    © 2026 Uniworld Stays. All rights reserved.
  </p>

</div>

    </footer>
  )
}

export default Footer