import Link from "next/link";
import CircleBtn from "@/ui-kit/CircleBtn";
import { solutionsList , getImage } from "../constants/solutionList";
import BackgroundLogo from "./BackgroundLogo";
import { slugify } from "@/utils/slugify";

const Solutions = () => {

  return (
    <BackgroundLogo className="py-16 bg-(--west-bg-secondary)">
      <div className="container flex max-md:flex-col text-(--west-bg) items-start py-12 gap-8 lg:gap-28 ">
        <CircleBtn text="SOLUTIONS" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl md:max-w-[650px] lg:ml-28 leading-tight md:leading-[1.1]">
          Find your fertile ground with our flexible workspace solutions!
        </h1>
      </div>

      <div className="container flex flex-row flex-wrap gap-12 px-6 mt-16">
        {solutionsList.map((item) => {
          const imgsrc = getImage(item.imgName);
          return (
            <Link href={`/workspaces#${slugify(item.title)}`} key={item.id} className="group flex-1 transition-all duration-700 md:hover:flex-[1.6] min-w-[350px]">
              <div className="relative overflow-hidden rounded-3xl h-80 md:h-[420px] transition-all duration-700">
                <img
                  src={imgsrc}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                  alt={item.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              </div>

          <div className="mt-6 relative space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl md:text-3xl text-white font-light">{item.title}</h2>
                <button
                  className="bg-white/90 hover:bg-white text-teal-900 rounded-full w-16 h-10 flex items-center justify-center
                  md:absolute md:right-0 md:top-0 md:opacity-0 md:transition-all md:duration-500 md:group-hover:opacity-100 md:group-hover:-translate-y-2">
                  <span className="text-[30px]">→</span>
                </button>
              </div>
        <div className="flex max-md:flex-row max-md:items-center max-md:justify-between md:block">
          <p
            className="text-white/90 text-sm leading-relaxed max-w-[300px] md:absolute md:transition-all md:duration-500 md:opacity-0 md:-translate-x-6 md:group-hover:opacity-100 md:group-hover:translate-x-0">
            {item.descr}
          </p>
          <p
            className="text-sm text-white/80 mt-2 text-left max-md:text-right group-hover:text-right">
            {item.price}
          </p>
         </div>
            </div>
            </Link>
          );
        })}
      </div>
    </BackgroundLogo>
  );
};

export default Solutions;
