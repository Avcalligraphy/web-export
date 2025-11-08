import React from 'react';
import StoryCard from '../../ui/StoryCard';
import { useTranslations } from 'next-intl';



export default function OurStory() {
  const t = useTranslations('ourStory');

  const storyCards = [
    t('trust.title'),
    t('excellence.title'),
    t('sustainability.title'),
    t('commitment.title'),
  ];
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background-base w-full mt-20 md:mt-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-20">
          {/* Left Column - Our Story */}
          <div className="flex flex-col w-full lg:max-w-lg">
            <div className="mb-4 md:mb-6">
              <img 
                src="/assets/icons/ic_stars.png" 
                alt="stars" 
                className="w-auto h-5 md:h-6 mb-3 md:mb-4"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-urbanist mb-4 md:mb-6">
              {t('title')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-urbanist">
              {t('description')}
            </p>
          </div>

          {/* Right Column - Feature Cards Grid */}
          <div className="w-full lg:flex-1 border-10 border-secondary rounded-xl bg-secondary">
          <div className="flex flex-col bg-secondary p-6 md:p-10 lg:p-15 rounded-xl border-1 border-gray-200">
            <div className="flex flex-col md:flex-row items-stretch">
                <div className="flex-1">
                  <StoryCard icon="/assets/icons/ic_trust.png" title={storyCards[0]} description={t('trust.description')} />
                </div>
                <div className="w-full md:w-[1px] h-[1px] md:h-auto bg-gray-200 my-4 md:my-0 md:mx-4 lg:mx-7.5" />
                <div className="flex-1">
                  <StoryCard icon="/assets/icons/ic_excellence.png" title={storyCards[1]} description={t('excellence.description')} />
                </div>
            </div>
            <div className="w-full h-[1px] my-4 md:my-6 lg:my-7.5 bg-gray-200" />
            <div className="flex flex-col md:flex-row items-stretch">
                <div className="flex-1">
                  <StoryCard icon="/assets/icons/ic_sustainability.png" title={storyCards[2]} description={t('sustainability.description')} />
                </div>
                <div className="w-full md:w-[1px] h-[1px] md:h-auto bg-gray-200 my-4 md:my-0 md:mx-4 lg:mx-7.5" />
                <div className="flex-1">
                  <StoryCard icon="/assets/icons/ic_commitment.png" title={storyCards[3]} description={t('commitment.description')} />
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

