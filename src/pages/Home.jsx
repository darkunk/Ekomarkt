import React from 'react'
    import SponsoredBanner from '../components/sponsored/SponsoredBanner'

    export default function Home() {
      return (
        <div className="container mx-auto px-4 py-8">
          {/* Sponsored Banner Section */}
          <div className="mb-8">
            <SponsoredBanner />
          </div>

          {/* Additional content can be added here */}
        </div>
      )
    }
