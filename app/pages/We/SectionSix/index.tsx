

export function SectionSix () {
    return (
        <div className="bg-white text-center py-12">
      <p className="text-sm uppercase text-gray-500">From every corner of the globe</p>
      <h2 className="text-4xl font-bold my-4">Join clients all around the world.</h2>
      
      <div className="relative mt-6">
        {/* Placeholder for the world map */}
        <div className="inline-block">
          <div className="w-full h-96 bg-blue-100 rounded-lg overflow-hidden">
            {/* Insert your world map image here */}
          </div>
          
          {/* Example client images positioned over the map */}
          <div className="absolute top-10 left-20">
            <img src="/path-to-client-image.jpg" alt="Client" className="h-16 w-16 rounded-full border-2 border-white" />
          </div>
          <div className="absolute top-24 left-40">
            <img src="/path-to-client-image.jpg" alt="Client" className="h-16 w-16 rounded-full border-2 border-white" />
          </div>
          {/* Add more images positioned at different coordinates over the map */}
        </div>
      </div>
    </div>
    )
}