import { useState } from 'react'

function ExploreDestinations() {
  const [showAllCities, setShowAllCities] = useState(false)

  return (
    <section className="bg-[#fffefa] pt-[72px] pb-[90px]">
      <div className="mx-auto w-[min(1140px,calc(100%-40px))]">

        {/* Explore Heading */}

        <div className="mb-[38px] flex flex-col items-start justify-between gap-[20px] lg:flex-row lg:items-end lg:gap-[30px]">
          <div>
            <p className="mb-[19px] flex items-center gap-[9px] text-[.82rem] font-extrabold uppercase tracking-[.12em] text-[#1f6750]">
              <span className="h-[2px] w-[27px] bg-current"></span>
              Explore destinations
            </p>

            <h2 className="mb-0 max-w-[650px] font-serif text-[clamp(2.25rem,4vw,3.45rem)] font-bold leading-[1.06] tracking-[-.04em] text-[#102421]">
              Start with your new city.
            </h2>
          </div>

          <p className="mb-0 max-w-[390px] text-[#5d706a]">
            Browse popular study destinations, then refine your search by budget
            and property type.
          </p>
        </div>


        {/* City Cards */}

        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-4">


          {/* Manchester */}

          <a
            href="#featured"
            className="city-card bg-[url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80')]">
            <span>Manchester</span>
          </a>


          {/* London */}

          <a
            href="#featured"
            className="city-card bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80')]">
            <span>London</span>
          </a>


          {/* Sydney */}

          <a
            href="#featured"
            className="city-card bg-[url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=700&q=80')]">
            <span>Sydney</span>
          </a>


          {/* Milan */}

          <a
            href="#featured"
            className="city-card bg-[url('https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=700&q=80')]">
            <span>Milan</span>
          </a>


          {/* Extra Cities */}

          {showAllCities && (
            <>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Dublin</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Dubai</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Melbourne</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Abu Dhabi</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Birmingham</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Edinburgh</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Glasgow</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Leeds</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Liverpool</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Bristol</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Cardiff</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Nottingham</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Sheffield</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Newcastle</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Canberra</span>
              </a>

              <a href="#featured" className="city-card bg-[url('...')]">
                <span>Perth</span>
              </a>
            </>
          )}
        </div>


        {/* View All Cities */}

        <div className="mt-[28px] text-center">

          <button
            type="button"
            onClick={() => setShowAllCities(!showAllCities)}
            className="rounded-full border border-[#1f6750] px-6 py-3 font-semibold text-[#1f6750] transition hover:bg-[#1f6750] hover:text-white">
            {showAllCities ? 'Show fewer cities ↑' : 'View all cities →'}
          </button>

        </div>

      </div>

    </section>
  )
}

export default ExploreDestinations