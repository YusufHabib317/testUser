import { LucideIcon } from "lucide-react";
import Icon from "./icon";
import SubTitle from "./subTitle";

type ServiceProps = {
  service: {
    id: number;
    icon: LucideIcon;
    title: string;
    subTitle: {
      id: number;
      title: string;
      description: string;
    }[];
  };
};

export default function Service(props: ServiceProps) {
  const { service } = props;

  return (
    <div className="flex flex-col sm:flex-row p-2 md:p-6 items-center border border-neutral-400 z-10 gr rounded-lg">
      <div className="w-1/6 flex flex-col space-y-4 items-center text-center">
        <div className="">
          <Icon icon={service.icon} />
        </div>
        <h3 className=" font-bold md:text-2xl text-sm">{service.title}</h3>
      </div>

      <div className="flex flex-col w-5/6 md:space-y-4 space-y-2">
        {service.subTitle.map((sub, idx) => {
          return <SubTitle key={idx} sub={sub} />;
        })}
      </div>
    </div>
  );
}
