import building from '../assets/building.avif'

function About() {
  return (
    <section
      id="about"
      className="bg-[#fffefa] py-[100px]">
        
        <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] grid-cols-1 items-start gap-[45px] md:grid-cols-2 md:gap-[clamp(35px,8vw,110px)]">

        {/* About Image */}

        <img
          src={building}
          alt="Modern apartment building"
          className="h-[360px] w-full rounded-[10px] object-cover sm:h-[420px] md:h-[480px]"/>


        {/* About Text */}

        <div>
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
  )
}

export default About