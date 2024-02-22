
export function SectionTree () {
    return (
        <div className="bg-blue-900 text-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold uppercase">Numbers that make sense</h2>
        <p className="text-gray-400">Results speak for themselves</p>
      </div>

      <div className="flex flex-wrap justify-around items-start">
        {/* Number of Clients */}
        <div className="text-center px-4 mb-8">
          <p className="text-6xl font-bold">12</p>
          <p className="text-gray-300 mt-2">
            Is the number of <span className="text-white underline">trusted clients</span> we have at Stage Digital,
            deliberately kept low to ensure <span className="text-white underline">dedicated focus</span> on each one.
          </p>
        </div>

        {/* Average ROI */}
        <div className="text-center px-4 mb-8">
          <p className="text-6xl font-bold">5.6x</p>
          <p className="text-gray-300 mt-2">
            is our average <span className="text-white underline">ROI</span> on the ADS we run for our clients at Stage
            Digital. We are <span className="text-white underline">committed</span> to driving their success.
          </p>
        </div>

        {/* Monthly Ad-Spend */}
        <div className="text-center px-4 mb-8">
          <p className="text-6xl font-bold">+246.000€</p>
          <p className="text-gray-300 mt-2">
            is the <span className="text-white underline">monthly ad-spend</span> we manage to ensure heightened
            visibility for our valued clients at Stage Digital.
          </p>
        </div>
      </div>

      <p className="text-gray-300 text-center mt-8 px-4">
        This isn’t a fancy consulting agency where you're paying for conversation. Instead, you're <span className="text-white underline">paying for conversion</span>.
      </p>
      <p className="text-gray-300 text-center mt-2 px-4">
        We don’t like fluff. We don’t like to be paid for advice. We like to <span className="text-white underline">deliver results</span>, and that’s what we charge you for.
      </p>
      <p className="text-gray-300 text-center mt-2 px-4">
        When working with us you can be sure of one thing:
      </p>
      <p className="text-gray-300 text-center mt-2 px-4 font-bold">
        We'll deliver the <span className="text-white underline">highest possible ROAS</span> (return on ad spend) possible with your brand & product.
      </p>

      <div className="text-center mt-8">
        <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Book a free call
        </button>
      </div>
    </div>
    )
}