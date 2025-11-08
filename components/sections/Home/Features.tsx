import React from 'react'
import FeaturesContainer from '../../ui/FeaturesContainer'

export default function Features() {
  return (
    <section className="border-10 border-secondary">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold text-foreground font-urbanist mb-6 text-center">
          Why Choose Our Premium Coconut Charcoal Briquettes
        </h2>
        <p className="text-lg text-foreground/50 font-urbanist font-regular text-center mb-8 max-w-3xl mx-auto">
          Discover the key features that make our coconut charcoal briquettes the preferred choice for hookah and BBQ enthusiasts worldwide.
        </p>
      </div>
      <div className="grid grid-cols-5 border-1 border-gray-200 p-5 gap-5">
        <FeaturesContainer title="100% Natural Coconut Shell" />
        <FeaturesContainer title="Long Burning Time (3+ Hours)" />
        <FeaturesContainer title="Low Ash Content (<2%)" />
        <FeaturesContainer title="SGS & ISO Certified" />
        <FeaturesContainer title="OEM / Private Label Available" />
      </div>
    </section>
  )
}