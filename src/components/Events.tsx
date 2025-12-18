import Link from "next/link";
import Image from "next/image";
import CircleBtn from "@/ui-kit/CircleBtn";
import NavigateButton from "@/ui-kit/NavigateButton";
import { getEvents } from "@/sanity/lib/getEvents";

export default async function Events() {
const events = await getEvents(null , null)

  return (
    <div className="bg-(--west-bg) py-16">
      <div className="container flex flex-col">
        <div className="flex justify-between">
          <div className="space-y-8">
            <CircleBtn text="EVENTS" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl md:max-w-[550px]">
              Grow your network & ideas.
            </h1>
          </div>

          <div className="flex items-end max-md:hidden">
            <NavigateButton text="VIEW ALL EVENTS" href="/events" />
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {events.slice(0, 3).map((item: any) => (
            <Link
              key={item._id}
              href={`/events/${item.slug}`}
              className="group space-y-8 block"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-square transition-all group-hover:rounded-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover shadow-2xl transition-all duration-400 ease-in-out group-hover:opacity-70"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 scale-95 transition-all text-white duration-400 group-hover:opacity-100 group-hover:scale-100
                   inline-flex items-center gap-2 border-b-2 hover:border-current pointer-events-auto">
                    VIEW EVENT <span className="text-xl">→</span>
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {/* <h1 className="text-gray-500">{item.d_and_b}</h1> */}
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

        <div className="md:hidden mt-8">
          <NavigateButton text="VIEW ALL EVENTS" href="/events" />
        </div>
      </div>
    </div>
  );
}
