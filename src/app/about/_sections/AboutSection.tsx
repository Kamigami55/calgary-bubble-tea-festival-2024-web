import Image from 'next/image';

import flower1Img from '@/assets/flower1.svg';
import flower2Img from '@/assets/flower2.svg';
import holdingBubbleTeaOnStreetImg from '@/assets/holding-bubble-tea-on-street.jpg';

export function AboutSection() {
  return (
    <section>
      <div className="relative mx-auto max-w-[1440px] px-4 py-10 xs:px-16 xs:py-20">
        <Image
          src={flower1Img}
          alt=""
          className="absolute left-[10%] top-[35px] -z-10 w-[40px] xs:w-[54px] lg:left-[20%] lg:top-[44px]"
        />
        <Image
          src={flower2Img}
          alt=""
          className="absolute right-[20%] top-[120px] -z-10 w-[24px] xs:w-[38px]"
        />
        <h1 className="text-headline2 xs:text-headline1 mb-4 text-center">
          About
        </h1>
        <p className="text-body1regular mb-10 text-center xs:mb-16 lg:mb-20">
          Learn more about Taiwanese Bubble Tea Festival!
        </p>
        <div className="flex flex-col justify-evenly gap-20 lg:flex-row">
          <div className="w-full">
            <h2 className="text-headline2 mb-6">
              Welcome to the 2024 Calgary Bubble Tea Festival!
            </h2>
            <p className="text-body2">
              Come together on 13th July to honor the pioneers of bubble tea and
              appreciate the creativity that Taiwanese tea culture has brought
              to the world.
              <br />
              <br />
              Whether you’re a seasoned bubble tea drinker or a newcomer, we
              invite you to join us in this celebration at Haultain Park. Our
              aim of this festival is to interweave the Taiwanese heritage with
              the diverse fabric of Calgary, creating a harmonious blend that
              enriches the lives of our city’s residents.
              <br />
              <br />
              This festival isn’t only about bubble tea - it offers an
              opportunity to experience cultural booths, interactive game
              stalls, and local feature stalls, as well as savor both Taiwanese
              and global cuisines.
              <br />
              <br />
              Above all, the festival presents an opportunity for Calgarians to
              try Asian desserts they may not have tried before, while raising
              money for a good cause. So save the dates and get ready for a
              joyous and enriching celebration!
            </p>
          </div>
          <div className="w-full">
            <Image
              src={holdingBubbleTeaOnStreetImg}
              alt="holding bubble tea on street"
              className="aspect-[343/303] w-full rounded-xl object-cover object-center xs:aspect-[640/552] lg:aspect-[625/574]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
