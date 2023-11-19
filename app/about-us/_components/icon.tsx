import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  className?: string;
};
export default function Icon(props: IconProps) {
  const { icon: Icon, className } = props;
  return (
    <Icon
      className={cn(
        className,
        "w-[1.5rem] h-[1.5rem] md:w-[5rem] md:h-[5rem] text-fuchsia-400"
      )}
    />
  );
}
