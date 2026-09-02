import Marquee from './Marquee'

function Hero() {
  return (
    <section
      className="relative min-h-[680px] overflow-hidden bg-cover bg-center bg-[url('./assets/room.avif')] px-0 pb-[90px] pt-[150px] text-white">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b23]/90 via-[#0d2b23]/70 to-[#0d2b23]/20"></div>


      {/* Hero Content */}

      <div className="relative mx-auto w-[min(1140px,calc(100%-40px))] translate-x-0 sm:translate-x-[50px] lg:translate-x-[100px]">
        <p className="mb-[19px] flex items-center gap-[9px] text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[#c8e8d5]">
          <span className="h-[2px] w-[27px] bg-current"></span>
          Student accommodation abroad
        </p>


        <h1 className="mb-[19px] max-w-[700px] font-serif text-[clamp(3rem,6vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.055em]">
          Find your next home abroad.
        </h1>


        <p className="mb-8 max-w-[550px] text-[clamp(1rem,1.7vw,1.18rem)] text-[#e5eee9]">
          Explore accommodation in the city you are moving to. Find a place you
          like, then our team will help you take the next step.
        </p>


        {/* Search */}

        <div className="max-w-[700px] rounded-[13px] border border-white/40 bg-white/15 p-[10px] backdrop-blur-[10px]">
          <form className="grid grid-cols-1 gap-[9px] sm:grid-cols-[1fr_auto]">
            <input
              type="text"
              placeholder="Where are you moving? Try Manchester"
              className="min-h-[57px] w-full rounded-[8px] border-0 bg-white px-[18px] text-[#102421] placeholder:text-[#5d706a] outline-none"/>

            <button
              type="submit"
              className="min-h-[57px] rounded-[8px] border-0 bg-[#e36f50] px-[22px] font-extrabold text-white">
              Search properties
            </button>
          </form>


          <p className="mt-[13px] px-[7px] text-[0.85rem] text-[#d7e8df]">
            Search by destination city. You can refine your budget and property type next.
          </p>
        </div>
      </div>

      {/* Trust Strip */}

      <Marquee />

    </section>
  )
}

export default Hero