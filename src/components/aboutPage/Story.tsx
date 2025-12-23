import CircleBtn from "@/ui-kit/CircleBtn";

const stats = [
  { value: "6", label: "inspiring locations" },
  { value: "7", label: "years of empowering entrepreneurs" },
  { value: "80", label: "passionate team members" },
  { value: "2.5k+", label: "thriving members" },
  { value: "25k", label: "sqm of flexible workspace" },
  { value: "$5M", label: "turnover" },
];

const Story = () => {
  return (
    <section id="stories" className="container py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <div className="space-y-4 md:space-y-8">
          <CircleBtn text="Our Story" />

          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight text-[--west-bg-secondary] max-w-[600px]">
            Cultivating a space where businesses bloom.
          </h1>

          <h1 className="max-w-[470px] text-(--west-bg-secondary)/80 leading-relaxed">
            The Seed Hub wasn't born from a corporate boardroom, but from a shared
            frustration. We, a group of remote workers, were tired of feeling
            isolated and uninspired in traditional workspaces. We craved a space
            that fostered collaboration, nurtured creativity, and offered the
            resources to help our businesses flourish.
          </h1>
        </div>

        <div className="space-y-0">
        {stats.map((item, index) => (
        <div
          key={index}
          className=" flex flex-row items-center gap-4 sm:gap-10 border-b border-(--west-bg-secondary)/40 py-4 sm:py-6">
          <span
            className="text-4xl sm:text-5xl md:text-6xl font-light text-(--west-bg-secondary) text-left sm:text-right  sm:min-w-[140px]">
            {item.value}
          </span>

          <h1
            className="text-base sm:text-lg md:text-xl text-(--west-bg-secondary)/70">
            {item.label}
          </h1>
        </div>
        ))}
        </div>

      </div>
    </section>
  );
};

export default Story;
