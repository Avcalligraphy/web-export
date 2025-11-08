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
              {t('title')}
            </h2>
            <p className="text-lg text-foreground/80 font-urbanist">
              {t('description')}
            </p>
          </div>

          {/* Right Column - Feature Cards Grid */}
          <div className="border-10 border-secondary rounded-xl bg-secondary">
          <div className="flex flex-col bg-secondary p-15 rounded-xl border-1 border-gray-200">
            <div className="flex items-stretch">
                <div className="flex-1">
                  <StoryCard icon="/assets/icons/ic_trust.png" title={storyCards[0]} description={t('trust.description')} />
                </div>
                <div className="w-[1px] bg-gray-200 mx-7.5" />
                <div className="flex-1">
                  <StoryCard icon="/assets/icons/ic_excellence.png" title={storyCards[1]} description={t('excellence.description')} />
                </div>
            </div>
            <div className="w-full h-[1px] my-7.5 bg-gray-200" />
            <div className="flex items-stretch">
                <div className="flex-1">
                  <StoryCard icon="/assets/icons/ic_sustainability.png" title={storyCards[2]} description={t('sustainability.description')} />
                </div>
                <div className="w-[1px] bg-gray-200 mx-7.5" />
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

