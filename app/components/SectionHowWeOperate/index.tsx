
export function SectionHowWeOperate () {
    return (
        <div className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Why choose stage digital?</h2>
        <p className="uppercase text-gray-500 text-sm">How we operate</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Strategy */}
        <div className="max-w-sm">
          <div className="flex justify-center items-center h-20 w-20 bg-blue-100 text-blue-500 rounded-full mb-4 border-2">
            {/* Placeholder for image */}
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Strategy</h3>
          <p className="text-gray-600 text-center">
            We analyse the history of your brand and craft a strategy that is in harmony with your brand.
          </p>
        </div>

        {/* Campaigns */}
        <div className="max-w-sm">
          <div className="flex justify-center items-center h-20 w-20 bg-blue-100 text-blue-500 rounded-full mb-4 border-2">
            {/* Placeholder for image */}
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Campaigns</h3>
          <p className="text-gray-600 text-center">
            We create, run, optimize and scale campaigns that sell your product efficiently.
          </p>
        </div>

        {/* Results */}
        <div className="max-w-sm">
          <div className="flex justify-center items-center h-20 w-20 bg-blue-100 text-blue-500 rounded-full mb-4 border-2">
            {/* Placeholder for image */}
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Results</h3>
          <p className="text-gray-600 text-center">
            We always strive to achieve a ROI of 4x+ - but we often deliver results far beyond that.
          </p>
        </div>
      </div>
    </div>
    )
}