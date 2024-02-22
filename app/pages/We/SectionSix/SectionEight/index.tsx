
export function SectionEight () {
    return (
        <div className="bg-blue-900 text-white py-12">
        <div className="text-center mb-6">
          <p className="text-sm uppercase text-gray-300">Get on the phone with my team</p>
          <h2 className="text-3xl font-bold my-2">Book a free strategy call</h2>
          <p className="mt-2">For Businesses looking to increase their online sales with a breathtaking return on investment.</p>
          <p className="mt-1">Businesses looking to optimise their social media marketing efforts in conjunction with the leading agency in the industry.</p>
          <p className="mt-1">Businesses looking to be taken from mediocre to superior within the field of eCommerce & Online Sales.</p>
          <p className="mt-1">Businesses looking for an agency that has no higher priority than the clients it serves.</p>
        </div>
  
        {/* Placeholder for the awards/badges */}
        <div className="flex justify-center my-4">
          {/* Add images for each badge, using the appropriate paths */}
          <img src="/path-to-badge.jpg" alt="Award Badge" className="h-12 mx-2" />
          <img src="/path-to-badge.jpg" alt="Award Badge" className="h-12 mx-2" />
          <img src="/path-to-badge.jpg" alt="Award Badge" className="h-12 mx-2" />
          {/* Repeat for each badge you have */}
        </div>
  
        <div className="text-center mt-8">
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Book a free call
          </button>
        </div>
  
        {/* Footer with copyright */}
        <div className="text-center mt-12 text-gray-300 text-xs">
          <p>Copyrights 2023 | Stage Digital | Built with Coetail</p>
        </div>
      </div>
    )
}