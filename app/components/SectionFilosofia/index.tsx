"use client"

import Image from "next/image"
import funilImg from "../../../public/funil.webp"

export function SectionFilosofia() {
    return (
        <div className=" 
        h-screen w-screen 
        bg-gradient-to-b text-black  from-emerald-100 to-blue-100 
        px-4 sm:px-8 md:px-12 overflow-x-hidden lg:px-20 xl:px-48 text-center
        "
        
        >
            <div className="flex items-center justify-center mt-12 ">
            <h1 className="font-semibold text-4xl mb-6">Por que seu negócio precisa da Hydra?</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
        {/* Strategy */}
        <div className="max-w-sm">
          <div className="flex justify-center items-center h-20 w-20 bg-blue-900 text-blue-500 rounded-full ml-40 mb-4 border-2">
            {/* Placeholder for image */}
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Strategy</h3>
          <p className="text-gray-600 text-center">
            We analyse the history of your brand and craft a strategy that is in harmony with your brand.
          </p>
        </div> 

        {/* Campaigns */}
        <div className="max-w-sm">
          <div className="flex justify-center items-center h-20 w-20  text-blue-500 rounded-full ml-40 mb-4 border-2">
            {/* Placeholder for image */}
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Campaigns</h3>
          <p className="text-gray-600 text-center">
            We create, run, optimize and scale campaigns that sell your product efficiently.
          </p>
        </div>
        {/* Results */}
        <div className="max-w-sm">
          <div className="flex justify-center items-center h-20 w-20   rounded-full ml-40 mb-4 border-2">
            <Image src={funilImg} alt="" />
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