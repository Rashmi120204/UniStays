import { useState } from 'react'
import room2 from './assets/manas might like this room.avif'
import room3 from './assets/room3.avif'
import room4 from './assets/room4.avif'
import building from './assets/building.avif'


// City link with flag
function City({ name, flag }) {
  return (
    <a href="#featured" className="city-link">
      {name}

      <span className="flag">
        <img
          src={`https://flagcdn.com/w40/${flag}.png`}
          alt=""
        />
      </span>
    </a>
  )
}


function App() {
  const [showAllCities, setShowAllCities] = useState(false)

  return (
    <div className="min-h-screen bg-green-950">


      {/* Navbar */}

      <header className="absolute top-0 left-0 z-10 w-full text-white">
        <nav className="mx-auto flex min-h-[82px] w-[min(1140px,calc(100%-40px))] flex-col items-start justify-center gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-0">

          {/* Logo */}

          <a
            href="#"
            className="inline-flex items-center gap-[10px] font-serif text-[1.25rem] font-bold"
          >
            <span className="grid h-[31px] w-[31px] rotate-[-45deg] place-items-center rounded-[50%_50%_50%_9px] border-2 border-current text-[0.78rem]">
              <span className="rotate-[45deg]">
                U
              </span>
            </span>

            Uniworld Stays
          </a>


          {/* Navigation Links */}

          <div className="flex items-center gap-4 text-[0.85rem] font-semibold sm:gap-[26px] sm:text-[0.95rem]">
            <a href="#about" className="hover:opacity-70">
              About us
            </a>

            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>

            <a
              href="https://wa.me/"
              className="rounded-full bg-white px-4 py-[10px] text-[0.95rem] text-black"
            >
              WhatsApp
            </a>

          </div>

        </nav>
      </header>



      {/* Hero Section */}

      <section
        className="relative min-h-[680px] overflow-hidden bg-cover bg-center bg-[url('./assets/room.avif')] px-0 pb-[90px] pt-[150px] text-white"
      >

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
                className="min-h-[57px] w-full rounded-[8px] border-0 bg-white px-[18px] text-[#102421] placeholder:text-[#5d706a] outline-none"
              />

              <button
                type="submit"
                className="min-h-[57px] rounded-[8px] border-0 bg-[#e36f50] px-[22px] font-extrabold text-white"
              >
                Search properties
              </button>

            </form>


            <p className="mt-[13px] px-[7px] text-[0.85rem] text-[#d7e8df]">
              Search by destination city. You can refine your budget and property type next.
            </p>

          </div>

        </div>


        {/* Trust Strip / Marquee */}

        <div className="absolute bottom-0 left-0 w-full border-t border-white/20 bg-[#091e18]/60">

          <div className="mx-auto flex min-h-[75px] w-[min(1140px,calc(100%-40px))] items-center gap-[30px]">

            {/* Fixed Text */}

            <strong className="shrink-0 whitespace-nowrap text-[1.02rem]">
              Homes across 5 countries and 50+ cities
            </strong>


            {/* Scrolling Cities */}

            <div className="marquee-wrapper">

              <div className="marquee">

                {/* Marquee Group 1 */}

                <div className="marquee-group">

                  <City name="Manchester" flag="gb" />
                  <City name="London" flag="gb" />
                  <City name="Milan" flag="it" />
                  <City name="Sydney" flag="au" />
                  <City name="Dublin" flag="ie" />
                  <City name="Dubai" flag="ae" />

                  <City name="Manchester" flag="gb" />
                  <City name="London" flag="gb" />
                  <City name="Milan" flag="it" />
                  <City name="Sydney" flag="au" />
                  <City name="Dublin" flag="ie" />
                  <City name="Dubai" flag="ae" />

                </div>


                {/* Marquee Group 2 */}

                <div className="marquee-group" aria-hidden="true">

                  <City name="Manchester" flag="gb" />
                  <City name="London" flag="gb" />
                  <City name="Milan" flag="it" />
                  <City name="Sydney" flag="au" />
                  <City name="Dublin" flag="ie" />
                  <City name="Dubai" flag="ae" />

                  <City name="Manchester" flag="gb" />
                  <City name="London" flag="gb" />
                  <City name="Milan" flag="it" />
                  <City name="Sydney" flag="au" />
                  <City name="Dublin" flag="ie" />
                  <City name="Dubai" flag="ae" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Explore Destinations */}

      <section
        className="bg-[#fffefa] pt-[72px] pb-[90px]"
      >

        <div className="mx-auto w-[min(1140px,calc(100%-40px))]">


          {/* Explore Heading */}

          <div className="mb-[38px] flex items-end justify-between gap-[30px]">

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
              className="city-card bg-[url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80')]"
            >
              <span>Manchester</span>
            </a>


            {/* London */}

            <a
              href="#featured"
              className="city-card bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80')]"
            >
              <span>London</span>
            </a>


            {/* Sydney */}

            <a
              href="#featured"
              className="city-card bg-[url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=700&q=80')]"
            >
              <span>Sydney</span>
            </a>


            {/* Milan */}

            <a
              href="#featured"
              className="city-card bg-[url('https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=700&q=80')]"
            >
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


          {/* View All Cities Button */}

          <div className="mt-[28px] text-center">

            <button
              type="button"
              onClick={() => setShowAllCities(!showAllCities)}
              className="rounded-full border border-[#1f6750] px-6 py-3 font-semibold text-[#1f6750] transition hover:bg-[#1f6750] hover:text-white"
            >
              {showAllCities ? 'Show fewer cities ↑' : 'View all cities →'}
            </button>

          </div>

        </div>

      </section>



      {/* Featured Stays */}

      <section
        id="featured"
        className="bg-[#edf4ee] py-[90px]"
      >

        <div className="mx-auto w-[min(1140px,calc(100%-40px))]">


          {/* Featured Heading */}

          <div className="mb-[38px] flex flex-col items-start justify-between gap-[20px] lg:flex-row lg:items-end lg:gap-[30px]">

            <div>

              <p className="mb-[18px] flex items-center gap-[9px] text-[.82rem] font-extrabold uppercase tracking-[.12em] text-[#1f6750]">
                <span className="h-[2px] w-[27px] bg-current"></span>
                Featured stays
              </p>


              <h2 className="max-w-[600px] font-serif text-[clamp(2.4rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-.04em] text-[#102421]">
                Homes students are exploring.
              </h2>

            </div>


            {/* Right Text */}

            <a
              href="#contact"
              className="mb-[5px] max-w-[280px] font-semibold text-[#1f6750] hover:underline"
            >
              Need something different? Tell us what you need →
            </a>

          </div>


          {/* Property Cards */}

          <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3">


            {/* Card 1 */}

            <a
              href="#property"
              className="overflow-hidden rounded-[8px] bg-white shadow-[0_8px_24px_rgba(16,36,33,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,36,33,.14)]"
            >

              <img
                src={room2}
                alt="Oxford Road Shared Apartment"
                className="h-[220px] w-full object-cover"
              />


              {/* Card Details */}

              <div className="p-[14px]">

                <p className="mb-[8px] text-[.72rem] font-extrabold uppercase tracking-[.08em] text-[#4d7869]">
                  Manchester, United Kingdom
                </p>

                <h3 className="mb-[7px] text-[1rem] font-bold text-[#102421]">
                  Oxford Road Shared Apartment
                </h3>

                <p className="mb-[10px] text-[.82rem] text-[#6a7973]">
                  2 bedrooms · Shared · Bills included
                </p>

                <strong className="text-[.9rem] text-[#102421]">
                  From £720/month
                </strong>

              </div>

            </a>


            {/* Card 2 */}

            <a
              href="#property"
              className="overflow-hidden rounded-[8px] bg-white shadow-[0_8px_24px_rgba(16,36,33,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,36,33,.14)]"
            >

              <img
                src={room4}
                alt="Rathmines Student Studio"
                className="h-[220px] w-full object-cover"
              />


              {/* Card Details */}

              <div className="p-[14px]">

                <p className="mb-[8px] text-[.72rem] font-extrabold uppercase tracking-[.08em] text-[#4d7869]">
                  Dublin, Ireland
                </p>

                <h3 className="mb-[7px] text-[1rem] font-bold text-[#102421]">
                  Rathmines Student Studio
                </h3>

                <p className="mb-[10px] text-[.82rem] text-[#6a7973]">
                  Studio · Independent · Furnished
                </p>

                <strong className="text-[.9rem] text-[#102421]">
                  From €1,100/month
                </strong>

              </div>

            </a>


            {/* Card 3 */}

            <a
              href="#property"
              className="overflow-hidden rounded-[8px] bg-white shadow-[0_8px_24px_rgba(16,36,33,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,36,33,.14)]"
            >

              <img
                src={room3}
                alt="Navigli Two-Bedroom Flat"
                className="h-[220px] w-full object-cover"
              />


              {/* Card Details */}

              <div className="p-[14px]">

                <p className="mb-[8px] text-[.72rem] font-extrabold uppercase tracking-[.08em] text-[#4d7869]">
                  Milan, Italy
                </p>

                <h3 className="mb-[7px] text-[1rem] font-bold text-[#102421]">
                  Navigli Two-Bedroom Flat
                </h3>

                <p className="mb-[10px] text-[.82rem] text-[#6a7973]">
                  2 bedrooms · Shared · Wi-Fi included
                </p>

                <strong className="text-[.9rem] text-[#102421]">
                  From €890/month
                </strong>

              </div>

            </a>

          </div>

        </div>

      </section>



      {/* About Uniworld Stays */}

      <section
        id="about"
        className="bg-[#fffefa] py-[100px]"
      >

        <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] grid-cols-1 items-start gap-[45px] md:grid-cols-2 md:gap-[clamp(35px,8vw,110px)]">


          {/* About Image */}

          <img
            src={building}
            alt="Modern apartment building"
            className="h-[360px] w-full rounded-[10px] object-cover sm:h-[420px] md:h-[480px]"
          />


          {/* About Text */}

          <div className="pt-[0px]">

            <p className="mb-[19px] flex items-center gap-[9px] text-[.82rem] font-extrabold uppercase tracking-[.12em] text-[#1f6750]">
              <span className="h-[2px] w-[27px] bg-current"></span>
              About Uniworld Stays
            </p>


            <h2 className="max-w-[560px] font-serif text-[2.7rem] font-semibold leading-[1.02] tracking-[-.035em] text-[#102421]">
              Moving abroad is big. Finding a home should feel simpler.
            </h2>


            <p className="my-5 max-w-[515px] text-[1rem] leading-[1.5] text-[#5d706a]">
              Uniworld Stays helps students explore accommodation in their
              destination city and speak to a real team when they are ready.
              No customer account required.
            </p>


            {/* Steps */}

            <div className="mt-[30px] grid gap-[15px]">


              {/* Step 1 */}

              <div className="grid grid-cols-[35px_1fr] items-start gap-[13px]">

                <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#dce8d9] text-[.82rem] font-extrabold text-[#124735]">
                  1
                </span>

                <div>

                  <strong className="block text-[#102421]">
                    Search your city
                  </strong>

                  <span className="text-[.94rem] text-[#5d706a]">
                    Browse available properties and use filters to narrow your options.
                  </span>

                </div>

              </div>


              {/* Step 2 */}

              <div className="grid grid-cols-[35px_1fr] items-start gap-[13px]">

                <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#dce8d9] text-[.82rem] font-extrabold text-[#124735]">
                  2
                </span>

                <div>

                  <strong className="block text-[#102421]">
                    Choose a property
                  </strong>

                  <span className="text-[.94rem] text-[#5d706a]">
                    View photos, the monthly price, key details, and location information.
                  </span>

                </div>

              </div>


              {/* Step 3 */}

              <div className="grid grid-cols-[35px_1fr] items-start gap-[13px]">

                <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#dce8d9] text-[.82rem] font-extrabold text-[#124735]">
                  3
                </span>

                <div>

                  <strong className="block text-[#102421]">
                    Send an enquiry
                  </strong>

                  <span className="text-[.94rem] text-[#5d706a]">
                    Tell us what you need and the team will get in touch.
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Enquiry Section */}

      <section
        id="contact"
        className="bg-[#14583f] py-[150px] text-white"
      >

        <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] grid-cols-1 gap-[50px] md:grid-cols-2 md:gap-[90px]">

          {/* Enquiry Text */}

          <div>

            <p className="mb-[20px] flex items-center gap-[9px] text-[.78rem] font-extrabold uppercase tracking-[.12em]">
              <span className="h-[2px] w-[27px] bg-current"></span>
              Contact us
            </p>


            <h2 className="max-w-[500px] font-serif text-[3.5rem] font-bold leading-[1.02] tracking-[-.035em]">
              Can't find the right place?
            </h2>


            <p className="mt-[24px] max-w-[450px] text-[1.05rem] leading-[1.55]">
              Tell us where you are moving and what you need. We will help you
              explore suitable options.
            </p>

          </div>


          {/* Enquiry Form */}
          <form className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">


            {/* Full Name */}

            <input
              type="text"
              placeholder="Full name"
              className="h-[48px] rounded-[5px] border border-white/20 bg-white/10 px-3 text-[.9rem] text-white outline-none placeholder:text-white/70 focus:border-white/50"
            />


            {/* Email */}

            <input
              type="email"
              placeholder="Email address"
              className="h-[48px] rounded-[5px] border border-white/20 bg-white/10 px-3 text-[.9rem] text-white outline-none placeholder:text-white/70 focus:border-white/50"
            />


            {/* Phone */}

            <input
              type="tel"
              placeholder="Phone number (optional)"
              className="h-[48px] rounded-[5px] border border-white/20 bg-white/10 px-3 text-[.9rem] text-white outline-none placeholder:text-white/70 focus:border-white/50"
            />


            {/* University / Company */}

            <input
              type="text"
              placeholder="University / Company"
              className="h-[48px] rounded-[5px] border border-white/20 bg-white/10 px-3 text-[.9rem] text-white outline-none placeholder:text-white/70 focus:border-white/50"
            />


            {/* Destination City */}

            <select
              className="col-span-2 h-[48px] w-full rounded-[5px] border border-white/20 bg-white/10 px-3 text-[.9rem] text-white outline-none focus:border-white/50"
              defaultValue=""
            >

              <option value="" disabled>
                Destination city
              </option>

              <option value="manchester">
                Manchester
              </option>

              <option value="london">
                London
              </option>

              <option value="milan">
                Milan
              </option>

              <option value="sydney">
                Sydney
              </option>

              <option value="dublin">
                Dublin
              </option>

              <option value="dubai">
                Dubai
              </option>

            </select>


            {/* Message */}

            <textarea
              placeholder="Tell us what you are looking for"
              className="sm:col-span-2 h-[110px] resize-none rounded-[5px] border border-white/20 bg-white/10 px-3 py-3 text-[.9rem] text-white outline-none placeholder:text-white/70 focus:border-white/50"
            ></textarea>


            {/* Disclaimer */}

            <p className="col-span-2 text-[.68rem] opacity-75">
              By submitting, you agree that Uniworld Stays may contact you about
              your enquiry.
            </p>


            {/* Submit Button */}

            <div>

              <button
                type="submit"
                className="rounded-[5px] bg-[#ee7052] px-5 py-3 text-[.85rem] font-bold text-white transition hover:opacity-90"
              >
                Send enquiry
              </button>

            </div>

          </form>

        </div>

      </section>



      {/* Footer */}

      <footer className="bg-[#073d2b] text-white">

        <div className="mx-auto flex w-[min(1140px,calc(100%-40px))] flex-col items-start justify-between gap-5 py-[30px] sm:flex-row sm:items-center">

          {/* Copyright */}

          <p className="text-[.78rem] opacity-70">
            © 2026 Uniworld Stays. All rights reserved.
          </p>


          {/* Contact Details */}

         <div className="flex flex-wrap items-center gap-5 text-[.85rem] sm:gap-[40px] lg:gap-[90px]">

            <a
              href="mailto:hello@uniworldstays.com"
              className="transition hover:opacity-70"
            >
              hello@uniworldstays.com
            </a>

            <a
              href="https://wa.me/"
              className="transition hover:opacity-70"
            >
              WhatsApp
            </a>

            <a
              href="tel:+0000000000"
              className="transition hover:opacity-70"
            >
              Call us
            </a>

          </div>

        </div>

      </footer>


    </div>
  )
}

export default App