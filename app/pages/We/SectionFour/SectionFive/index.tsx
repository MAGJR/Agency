
export function SectionFive () {
    return (
        <div className="bg-blue-900 text-white py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase">What we can do for you</h2>
          <p className="text-gray-300">Our services</p>
        </div>
  
        <div className="flex flex-wrap justify-center items-center">
          {/* Placeholder for the mobile device image */}
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <div className="bg-white rounded-lg p-4 max-w-xs">
              {/* Insert your mobile device image here */}
              <div className="bg-gray-300 h-96 w-60 rounded-md"></div>
            </div>
          </div>
  
          {/* Services List */}
          <div className="flex-1 max-w-md">
            <ul className="space-y-6">
              <li className="flex items-center">
                <span className="text-blue-300 text-2xl mr-4">💠</span> 
                <div>
                  <h3 className="text-xl font-semibold">Meta Ads</h3>
                  <p>We run, scale and optimize your meta ads.</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-red-400 text-2xl mr-4">🎵</span> 
                <div>
                  <h3 className="text-xl font-semibold">Tiktok Ads</h3>
                  <p>We skyrocket your brand through the most growing platform.</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-2xl mr-4">▶️</span> 
                <div>
                  <h3 className="text-xl font-semibold">Youtube Ads</h3>
                  <p>We offer 1-on-1 consulting to ensure you are on the right track.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}