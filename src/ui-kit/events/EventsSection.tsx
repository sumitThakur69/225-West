import Link from "next/link";
import Image from "next/image";
import NavigateButton from "@/ui-kit/NavigateButton";

interface EventsSectionProps {
  title: string;             
  events: any[];              
  href?: string;              
  background?: string;    
  className : string;    
}

export default function EventsSection({
  title,
  events,
  href,
  background ,
  className
}: EventsSectionProps) {

  return (
    <div style={{ backgroundColor: background }} className={`${className}`}>
      <div className="container flex flex-col">

        <div className="flex justify-between">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl md:max-w-[550px]">
              {title}
            </h1>
          </div>

          {href && (
            <div className="flex items-end max-md:hidden">
              <NavigateButton text="VIEW ALL EVENTS" href={href} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {events.map((item) => (
            <Link
              key={item._id}
              href={`/events/${item.slug}`}
              className="group space-y-8 block">
              <div className="relative overflow-hidden rounded-4xl aspect-square transition-all group-hover:rounded-full">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-all duration-400 ease-in-out group-hover:opacity-70"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300" />
                )}

                <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 scale-95 transition-all text-white duration-400 group-hover:opacity-100 group-hover:scale-100 inline-flex items-center gap-2 border-b-2 hover:border-current pointer-events-auto">
                    VIEW EVENT <span className="text-xl">→</span>
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-500">
                  <span>{item.date}</span>
                  <span>|</span>
                  <span>{item.time}</span>
                </div>

                <h1 className="text-3xl group-hover:underline">{item.title}</h1>
                <h1 className="text-gray-500">{item.mail}</h1>
              </div>
            </Link>
          ))}
        </div>

        {href && (
          <div className="md:hidden mt-8">
            <NavigateButton text="VIEW ALL EVENTS" href={href} />
          </div>
        )}
      </div>
    </div>
  );
}
