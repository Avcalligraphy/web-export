import React from 'react'
import FeaturesContainer from '../ui/FeaturesContainer'

export default function Features() {
  return (
    <section className="border-10 border-secondary">
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