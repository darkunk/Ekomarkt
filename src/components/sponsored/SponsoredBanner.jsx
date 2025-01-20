import React from 'react'

    const SponsoredBanner = () => {
      return (
        <div className="w-full overflow-hidden rounded-lg">
          <div className="relative aspect-[3/1]">
            <img
              src="/sponsored/banner1.jpg"
              alt="Sponsored Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">Sponsored Content</h2>
            </div>
          </div>
        </div>
      )
    }

    export default SponsoredBanner
