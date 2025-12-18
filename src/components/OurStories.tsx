import React from 'react';
import NavigateButton from '@/ui-kit/NavigateButton';
import CircleBtn from '@/ui-kit/CircleBtn';

const OurStories = () => {
    return <section className="bg-(--west-bg-secondary) text-(--west-bg) py-8">
    <div className="container flex flex-col items-center justify-center text-center space-y-8">
   <CircleBtn text="Stories" />
    <h1 className="text-4xl md:text-6xl leading-[1.1] max-w-[800px] mx-auto ">
      So comfortable, you might forget you're not at home.
    </h1>

    <h2 className=" max-w-3xl mx-auto opacity-90">
      The Seed Hub is more than just a coworking space, it's a fertile ground
      for nurturing your ideas and growing your business. Whether you're a
      solopreneur with a budding vision or a startup ready to bloom,
      we provide the space, community, and resources you need to thrive.
    </h2>

    <NavigateButton text="Explore Full Story" href="/about" />
  </div>
</section>

}

export default OurStories;