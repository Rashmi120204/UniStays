import room2 from '../assets/manas might like this room.avif'
import room3 from '../assets/room3.avif'
import room4 from '../assets/room4.avif'

function FeaturedStays() {
  return (
    <section
      id="featured"
      className="bg-[#edf4ee] py-[90px]">

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
            className="mb-[5px] max-w-[280px] font-semibold text-[#1f6750] hover:underline">
            Need something different? Tell us what you need →
          </a>
        </div>


        {/* Property Cards */}

        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}

          <a
            href="#property"
            className="overflow-hidden rounded-[8px] bg-white shadow-[0_8px_24px_rgba(16,36,33,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,36,33,.14)]">

            <img
              src={room2}
              alt="Oxford Road Shared Apartment"
              className="h-[220px] w-full object-cover transition duration-500 hover:scale-110"/>


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
            className="overflow-hidden rounded-[8px] bg-white shadow-[0_8px_24px_rgba(16,36,33,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,36,33,.14)]">

            <img
              src={room4}
              alt="Rathmines Student Studio"
              className="h-[220px] w-full object-cover transition duration-500 hover:scale-110"/>

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
            className="overflow-hidden rounded-[8px] bg-white shadow-[0_8px_24px_rgba(16,36,33,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,36,33,.14)]">

            <img
              src={room3}
              alt="Navigli Two-Bedroom Flat"
              className="h-[220px] w-full object-cover transition duration-500 hover:scale-110"/>


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
  )
}

export default FeaturedStays