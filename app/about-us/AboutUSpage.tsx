import Container from "@/components/Container";
import Gradient from "../(root)/_components/gradient";
import { services } from "@/constant/services";
import Service from "./_components/service";

export default function AboutUSpage() {
  return (
    <div className="w-full min-h-screen bg-gray-900 z-50">
      <Gradient />

      <Container>
        <div className="text-white pt-[5rem]">
          <div className=" flex flex-col space-y-5 p-6 rounded-lg border border-neutral-500 text-center">
            <h3 className="text-4xl font-bold">
              ما هو <span className=" text-purple-700">بروفي</span> ؟
            </h3>
            <p className="text-2xl ">
              تطبيق قائم على الذكاء الاصطناعي مخصص للمحاميين والقضاة والحقوقين
              والقانونيين وطلاب الحقوق وكل من له صلة في تحقيق العدالة الفردية
              والاجتماعية
            </p>
          </div>

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
