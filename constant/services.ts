import { FileSearch2, BookText, Phone, GraduationCap } from "lucide-react";

export const services = [
  {
    id: 0,
    icon: FileSearch2,
    title: " البحث القانوني",
    subTitle: [
      {
        id: 0,
        title: " تسريع البحث في السوابق القضائية :",
        description:
          "يستطيع التطبيق تحليل السوابق القضائية وتلخيصها مما يساعد المحامين على تحديد النقاط الرئيسية و السوابق ذات الصلة بسرعة وهذا لايوفر الوقت فحسب بل يضمن عدم اغفال اي معلومات مهمة",
      },
      {
        id: 1,
        title: "أتمتة البحث القانوني :",
        description:
          " يستطيع التطبيق استخراج الأقسام ذات الصلة من القوانين واللوائح مما يسهل على المحامين العثور على القوانين وفهم اثارها ",
      },
      {
        id: 2,
        title: "المساعدة في التحليل القانوني :",
        description:
          " يساعد التطبيق المحامين في تقييم الحجج القانونية وتحديد نقاط القوة والضغط وتقديم الرؤى لدعم المطالبات او دحضها ",
      },
    ],
  },
  {
    id: 1,
    icon: BookText,
    title: " صياغة المستندات القانونية ",
    subTitle: [
      {
        id: 0,
        title: "انشاء القوالب :",
        description:
          " يمكن للتطبيق انشاء قوالب لمختلف المستندات القانونية مثل العقود والوصايا والمرافعات ويمكن تخصيص هذه القوالب لتناسب احتياجات العملاء المحددة",
      },
      {
        id: 1,
        title: "التدقيق اللغوي والتحرير :",
        description:
          " يستطبع التطبيق مراجعة المستندات القانونية وتحريرها مما يضمن انها واضحة وموجزة وخالية من الاخطاء ",
      },
      {
        id: 2,
        title: " تقديم اقتراحات اللغة :",
        description:
          " يمكن للتطبيق توفير خيارات صياغة لغوية بديلة لمساعدة المحامين في انشاء حجج اكثر اقناعا وتجنب المخاطر المحتملة",
      },
    ],
  },
  {
    id: 2,
    icon: Phone,
    title: " التواصل مع العملاء ",
    subTitle: [
      {
        id: 0,
        title: "صياغة رسائل البريد الإلكتروني و الخطابات بسرعة ",
        description: "",
      },
      {
        id: 1,
        title: " انشاء تحديثات للعملاء :",
        description: `  يمكن للتطبيق مساعدة المحامين من انشاء تحديثات منتظمة حول تقدم القضية مما يضمن ان العملاء على اطلاع دائم
                بالاضافة لتذكيرات شخصية بشأن جلسات المحكمة القادمة والمواعيد النهائية   `,
      },
    ],
  },
  {
    id: 3,
    icon: GraduationCap,
    title: " التعليم والتدريب القانوني",
    subTitle: [
      {
        id: 0,
        title: "ابقى على اطلاع دائم :",
        description:
          "تجميع مخصص للاخبار القانونية والمراسيم والتشريعات الاخيرة",
      },
      {
        id: 1,
        title: " جواب لكل شيء :",
        description: `اجابات على الاستفسارات القانونية الشائعة `,
      },
      {
        id: 2,
        title: " مناسب للجميع :",
        description: `تسهيل الإرشاد والتوجيه للمحاميين الجدد والمبتدئين `,
      },
      {
        id: 3,
        title: " تجربة تعليمية مميزة :",
        description: `تقديم تعليم مخصص لتناسب انماط التعلم الفردية `,
      },
    ],
  },
];
