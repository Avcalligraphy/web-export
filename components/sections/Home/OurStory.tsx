import React from 'react';
import StoryCard from '../../ui/StoryCard';

const storyCards = [
  {
    icon: '/assets/icons/ic_trust.png',
    title: 'Trust',
    description: 'Trust is the foundation of every partnership we build. From our production process to every shipment we deliver, transparency and reliability guide everything we do.'
  },
  {
    icon: '/assets/icons/ic_excellence.png',
    title: 'Excellence',
    description: 'We strive for excellence in every detail — from sourcing high-quality coconut shells to maintaining international export standards. Our briquettes are crafted with precision to ensure consistent performance and premium quality.'
  },
  {
    icon: '/assets/icons/ic_sustainability.png',
    title: 'Sustainability',
    description: 'Sustainability is at the heart of our business. We\'re committed to eco-friendly production practices that reduce waste, conserve energy, and support local communities.'
  },
  {
    icon: '/assets/icons/ic_commitment.png',
    title: 'Our Commitment',
    description: 'We are dedicated to providing exceptional products and services to our partners around the world. Our goal is simple to deliver energy that fuels industries while protecting the planet we all share.'
  }
];

export default function OurStory() {
  return (
    <section className="py-16 bg-background-base w-full mt-50">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-20">
          {/* Left Column - Our Story */}
          <div className="flex flex-col max-w-lg">
            <div className="mb-6">
              <img 
                src="/assets/icons/ic_stars.png" 
                alt="stars" 
                className="w-auto h-6 mb-4"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-urbanist mb-6">
              Our Story
            </h2>
            <p className="text-lg text-foreground/80 font-urbanist">
              Our journey began with a simple mission — to transform natural resources into sustainable energy solutions for the world. From a humble local operation, we've grown into a trusted global exporter of premium coconut charcoal briquettes, built on quality, integrity, and innovation.
            </p>
          </div>

          {/* Right Column - Feature Cards Grid */}
          <div className="border-10 border-secondary rounded-xl bg-secondary">
          <div className="flex flex-col bg-secondary p-15 rounded-xl border-1 border-gray-200">
            <div className="flex items-stretch">
                <div className="flex-1">
                  <StoryCard icon={storyCards[0].icon} title={storyCards[0].title} description={storyCards[0].description} />
                </div>
                <div className="w-[1px] bg-gray-200 mx-7.5" />
                <div className="flex-1">
                  <StoryCard icon={storyCards[1].icon} title={storyCards[1].title} description={storyCards[1].description} />
                </div>
            </div>
            <div className="w-full h-[1px] my-7.5 bg-gray-200" />
            <div className="flex items-stretch">
                <div className="flex-1">
                  <StoryCard icon={storyCards[2].icon} title={storyCards[2].title} description={storyCards[2].description} />
                </div>
                <div className="w-[1px] bg-gray-200 mx-7.5" />
                <div className="flex-1">
                  <StoryCard icon={storyCards[3].icon} title={storyCards[3].title} description={storyCards[3].description} />
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

