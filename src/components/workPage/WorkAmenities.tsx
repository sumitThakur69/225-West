import { WorkAmenityList, getAmenityIcon } from "@/constants/workAmenity";
import CircleBtn from "@/ui-kit/CircleBtn";
import BackgroundLogo from "../BackgroundLogo";

const WorkAmenities = () => {
  return (
    <BackgroundLogo className="bg-(--west-bg-secondary) py-18 text-(--west-bg)">
      <div className="container flex flex-col gap-16">
        <div className="space-y-8">
          <CircleBtn text="hot Desk amenity" />

          <h1 className="text-5xl md:text-6xl lg:text-7xl md:max-w-[900px]">
            Our flexible and collaborative workspaces
          </h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-14">
          {WorkAmenityList.map((item) => (
            <div key={item.id} className="space-y-4">
              
              <img
                src={getAmenityIcon(item.iconName)}
                alt={item.title}
                className="w-12 h-12
                transition-transform duration-300 ease-out
                hover:-translate-y-1
                hover:scale-110"
              />

              <h1 className="text-lg sm:text-xl md:text-2xl
                            text-(--west-bg)
                            wrap-break-words
                            leading-snug
                            max-w-full">
                {item.title}
              </h1>

              <h1 className="text-lg leading-relaxed text-(--west-bg)/80">
                {item.description}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </BackgroundLogo>
  );
};

export default WorkAmenities;
