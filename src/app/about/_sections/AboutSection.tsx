import Image from 'next/image';

import Flower1Svg from '@/assets/flower1.svg';
import Flower2Svg from '@/assets/flower2.svg';
import holdingBubbleTeaImg from '@/assets/holding-bubble-tea.jpg';

export function AboutSection() {
  return (
    <section>
      <div className="relative mx-auto max-w-[1440px] px-4 py-10 xs:px-16 xs:py-20">
        <Flower1Svg className="absolute left-[10%] top-[35px] -z-10 w-[40px] xs:w-[54px] lg:left-[20%] lg:top-[44px]" />
        <Flower2Svg className="absolute right-[20%] top-[120px] -z-10 w-[24px] xs:w-[38px]" />
        <h1 className="text-headline2 xs:text-headline1 mb-4 text-center">
          About
        </h1>
        <p className="text-body1regular mb-10 text-center xs:mb-16 lg:mb-20">
          Learn more about Us!
        </p>
        <div className="flex flex-col justify-evenly gap-20 lg:flex-row">
          <div className="w-full">
            <h2 className="text-headline2 mb-6">
              Team of Calgary Bubble Tea Festival
            </h2>
            <p className="text-body2">
              We are Alberta Taiwanese Culture And Commerce Society, a
              passionate team driven by a love of Taiwanese culture. Through
              careful planning, we create unforgettable experiences for our
              visitors.
              <br />
              <br />
              Behind the scenes, our team of professionals handles every aspect
              of festival planning. From coordinating logistics and managing
              finances to creating captivating visuals and marketing campaigns,
              we work tirelessly to ensure a seamless and memorable experience
              for all.
              <br />
              <br />
              As organizers, we are proud of our diverse lineup of carefully
              selected vendors who showcased the best of Taiwanese cuisine and
              bubble tea. From traditional flavors to innovative products, there
              is something to satisfy your taste buds.
              <br />
              <br />
              But our festival is not just about food, it's about celebrating
              Taiwanese traditions and values. Through engaging activities and
              cultural performances, visitors can immerse themselves in our rich
              heritage and deepen their understanding of Taiwanese culture.
              <br />
              <br />
              Join us at the Calgary Bubble Tea Festival to sample new flavors,
              make memories and celebrate our vibrant community!
            </p>
          </div>
          <div className="w-full">
            <Image
              src={holdingBubbleTeaImg}
              alt="holding bubble tea on street"
              className="aspect-[343/303] w-full rounded-xl object-cover object-center xs:aspect-[640/552] lg:aspect-[625/574]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
