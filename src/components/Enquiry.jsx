function Enquiry() {
  return (
    <section
      id="contact"
      className="bg-[#14583f] py-[150px] text-white">

      <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] grid-cols-1 gap-[50px] md:grid-cols-2 md:gap-[90px]">

        {/* Enquiry Text */}

    <div className="max-w-[560px]">
        <p className="mb-[32px] flex items-center gap-[9px] text-[.9rem] font-extrabold uppercase tracking-[.12em]">
        <span className="h-[2px] w-[35px] bg-current"></span>
        Contact us
        </p>

        <h2 className="max-w-[560px] font-serif text-[5rem] font-bold leading-[1.02] tracking-[-.035em]">
        Can't find the right place?
        </h2>

        <p className="mt-[40px] max-w-[520px] text-[1.3rem] leading-[1.65]">
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
            className="h-[48px] rounded-[5px] border border-white/20 bg-white/10 px-3 text-[.9rem] text-white outline-none placeholder:text-white/70 focus:border-white/50"/>


          {/* Email */}

          <input
            type="email"
            placeholder="Email address"
            className="h-[48px] rounded-[5px] border border-white/20 bg-white/10 px-3 text-[.9rem] text-white outline-none placeholder:text-white/70 focus:border-white/50"/>


          {/* Phone */}

          <input
            type="tel"
            placeholder="Phone number (optional)"
            className="h-[48px] rounded-[5px] border border-white/20 bg-white/10 px-3 text-[.9rem] text-white outline-none placeholder:text-white/70 focus:border-white/50"/>


          {/* University / Company */}

          <input
            type="text"
            placeholder="University / Company"
            className="h-[48px] rounded-[5px] border border-white/20 bg-white/10 px-3 text-[.9rem] text-white outline-none placeholder:text-white/70 focus:border-white/50"/>


          {/* Destination City */}

          <select
            className="col-span-2 h-[48px] w-full rounded-[5px] border border-white/20 bg-white/10 px-3 text-[.9rem] text-white outline-none focus:border-white/50"
            defaultValue="">

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
  className="col-span-2 w-full min-h-[140px] h-[140px] box-border resize-none rounded-[5px] border border-white/20 bg-white/10 px-3 py-3 text-[.9rem] text-white outline-none placeholder:text-white/70 focus:border-white/50 sm:col-span-2"/>


          {/* Disclaimer */}

          <p className="col-span-2 text-[.68rem] opacity-75">
            By submitting, you agree that Uniworld Stays may contact you about
            your enquiry.
          </p>


          {/* Submit Button */}

          <div>
            <button
              type="submit"
              className="rounded-[5px] bg-[#ee7052] px-5 py-3 text-[.85rem] font-bold text-white transition hover:opacity-90">
              Send enquiry
            </button>

          </div>

        </form>

      </div>

    </section>
  )
}

export default Enquiry