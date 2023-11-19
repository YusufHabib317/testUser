import Container from "@/components/Container";
import Gradient from "../(root)/_components/gradient";
import { services } from "@/constant/services";

import { cn } from "@/lib/utils";
import Service from "./_components/service";
import { initialProfile } from "@/lib/initialProfile";
import { redirectToSignIn } from "@clerk/nextjs";

export default async function AboutUSpage() {
  const profile = await initialProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 z-50">
      <Gradient />

      <Container>
        <div className={cn("text-white pt-[5rem]")}>
          <div className=" flex flex-col space-y-5 p-6 rounded-lg border border-neutral-500 text-center">
            <h3 className="text-xl md:text-4xl font-bold ">
              ما هو <span className=" text-purple-700">بروفي</span> ؟
            </h3>
            <p className="text-sm md:text-2xl ">
              تطبيق قائم على الذكاء الاصطناعي مخصص للمحاميين والقضاة والحقوقين
              والقانونيين وطلاب الحقوق وكل من له صلة في تحقيق العدالة الفردية
              والاجتماعية{" . "}
            </p>
          </div>

          <div className="flex flex-col w-full mt-16 p-2 md:p-16 space-y-10 ">
            {services.map((service) => {
              return <Service key={service.id} service={service} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
