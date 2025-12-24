import Image from "next/image";

const Hero = () => {
  return ( 
    <div className="Hero relative pt-20 flex flex-col items-center">
      
      <div className="flex-col mx-auto">
        <h1 className="text-center max-w-[400px] mx-auto">
          From freelancer to scaling startup - connect, collaborate, and thrive at The Seed Hub.
        </h1>

        <h2 className="text-5xl md:text-8xl text-center max-w-[800px] mx-auto tracking-tight mt-2 px-2">
          More than just a space, it's a feeling.
        </h2>
      </div>
      
      <div className="relative w-full h-[650px] overflow-hidden">

        <Image
          src="/assets/posters/Hero.png"
          alt="The Seed Hub workspace"
          fill   
          priority  
          sizes="100vw"
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-bottom-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
