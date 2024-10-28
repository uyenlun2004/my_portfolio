import { Project } from "@/app/interface";
import Image from "next/image";
import { SeeMoreProject } from "./see-more-project";

interface BlockProjectProp {
  data: Project;
}

export const BlockProject = ({ data }: BlockProjectProp) => {
  return (
    <section className="lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)]">
      <div className="flex flex-col lg:h-full lg:flex-row space-y-4 space-y-reverse lg:space-y-0 lg:space-x-20 pt-[7.5vh]">
        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
          <div className="h-[70vh]">
            <div className="relative inline-flex text-[var(--text-opaque)] font-medium leading-6 text-[16px]">
              {data?.company}
            </div>
            <h2 className="text-5xl text-[var(--primary-color)] font-bold mb-20 mt-8">{data?.name}</h2>
            <div className="font-medium leading-6 text-[16px] flex gap-5">{data?.descriptions}</div>
            <div className="relative z-[999999]">
              <SeeMoreProject card={data} index={data?.id} />
            </div>
          </div>
        </div>
        <div className="flex items-center lg:scale-[var(--stick-scale)] lg:opacity-[var(--stick-visibility)] transition duration-300 mt-[10vh]">
          <Image width="0" height="0" src={data?.banner ?? ""} alt="Illustration 01" className="h-[70vh] w-[50vh]" />
        </div>
      </div>
    </section>
  );
};