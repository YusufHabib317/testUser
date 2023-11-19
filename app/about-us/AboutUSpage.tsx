import Container from "@/components/Container";
import Gradient from "../(root)/_components/gradient";
import { services } from "@/constant/services";
import { cn } from "@/lib/utils";
import Service from "./_components/service";
import { font } from "./page";

export default function AboutUSpage() {
  return (
    <div className="w-full min-h-screen bg-gray-900 z-50">
      <Gradient />

      <Container>
        <div className={cn("text-white pt-[5rem]", font.className)}>
          <div className=" flex flex-col space-y-5 p-6 rounded-lg border border-neutral-500 text-center">
            <h3 className="text-4xl font-bold">
              ما هو <span className=" text-purple-700">بروفي</span> ؟
            </h3>
            <p className="text-2xl ">
              {/* <span className="text-3xl font-bold text-purple-700">بروفي </span> */}
              تطبيق قائم على الذكاء الاصطناعي مخصص للمحاميين والقضاة والحقوقين
              والقانونيين وطلاب الحقوق وكل من له صلة في تحقيق العدالة الفردية
              والاجتماعية
            </p>
          </div>

          {/* <div className="w-full text-center flex justify-center items-center mt-5">
              <h3 className="text-3xl font-semibold">
                {" "}
                يستطيع{" "}
                <span className=" text-purple-700 font-bold mr-2">بروفي </span>
              </h3>
            </div> */}

          <div className="flex justify-between items-center gap-4 mt-16 p-16">
            {services.map((service) => {
              return <Service key={service.id} service={service} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
