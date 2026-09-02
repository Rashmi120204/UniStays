import City from './City'

function Marquee() {
  return (
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
  )
}

export default Marquee