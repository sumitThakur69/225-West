import { WorkAmenityList, getAmenityIcon } from "@/constants/workAmenity";

const WorkAmenities = () => {
  return (
    <div className="bg-(--west-bg-secondary) py-18">
      <div className="container flex flex-col gap-16">
        <div className="space-y-8">
          <div
            className="inline-flex items-center justify-center
            border border-(--west-bg-2)
            rounded-2xl h-8 px-6 uppercase tracking-wide
            text-[16px] text-(--west-bg) leading-none"
          >
            Hot Desk Amenities
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl md:max-w-[900px] text-(--west-bg)">
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
    </div>
  );
};

export default WorkAmenities;
