import { cn } from "@/lib/utils";
import Gradient from "./gradient";
import Link from "next/link";
import { Cairo } from "next/font/google";
import { ChevronLeft } from "lucide-react";

const font = Cairo({ subsets: ["latin"] });

export default function Hero() {
  return (
    <>
      <div
        className={cn(
          "w-full min-h-screen p-6 md:p-16 flex flex-col justify-center items-center bg-gray-900 text-violet-100 text-xl overflow-hidden",
          font.className
        )}
      >
        <Gradient />

        <span className="text-3xl w-4/6 text-center font-semibold leading-loose">
          تم تصميم منصتنا لتوفير حل احترافي و موثوق للمحامين الذين يبحثون عن
          المساعدة في مشاكلهم القانونية. ثق في خبرتنا وتجربتنا وتصفح تعقيدات
          القانون واعثر على أفضل نتيجة ممكمنة لقضيتك .{" "}
        </span>
        <br />

        <Link
          className="w-fit flex items-center gap-3 text-[#D2B2E1] bg-[#670099] text-lg rounded-md py-2 px-3 hover:bg-[#670099]/80 transition-all
          link"
          href={"/about-us"}
        >
          اعرف أكثر
          <ChevronLeft className="arrow transition-all" />
        </Link>
      </div>
    </>
  );
}
