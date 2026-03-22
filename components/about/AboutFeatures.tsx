import Image from "next/image";
import ShadcnButton from "@/components/common/ShadcnButton";

const features = [
  {
    id: 1,
    title: "Наша еда",
    image: "/images/about-img-1.png",
    imagePosition: "right",
    button: true,
    paragraphs: [
      "Наша страсть — создавать исключительные впечатления от еды по отличной цене. От традиционных и современных блюд до наших собственных кулинарных творений, таких как фаршированные тортеллини премиум-класса, наши сверхприготовленные рецепты отличаются индивидуальностью, креативностью и ярким вкусом кухни всего мира.",
      "От «Панне Розе» до японской лапши, салата «Мед» и всемирно известных макарон с сыром «Висконсин» — мы используем только самые лучшие и полезные ингредиенты. Каждое блюдо готовится свежим и делается на заказ. Наше богатое меню наполнено яркими, яркими и пряными вкусами.",
    ],
  },
  {
    id: 2,
    title: "Наш путь",
    image: "/images/about-img-2.png",
    imagePosition: "left",
    button: false,
    paragraphs: [
      "С самого начала мы взяли на себя обязательство предлагать свежие продукты, свежие ингредиенты и новый взгляд на заботу о наших гостях, членах нашей команды и наших сообществах. Мы искренне верим, что нет ничего, что могло бы объединить людей или сделать мир лучше, чем тарелка лапши.",
      "Продолжая расти, мы реализуем ключевые инициативы во всей нашей компании, чтобы поддержать светлое будущее. В нашем отчете о влиянии рассматриваются некоторые из этих областей, таких как создание меню, наполненного свежими и привлекательными вкусами; активация лучших в отрасли льгот для людей; и некоторые способы лучше заботиться о наших сообществах — и о нашей планете — которую мы называем домом.",
    ],
  },
];

export default function AboutFeatures() {
  return (
    <section className="flex flex-col gap-26.25 mt-23.75">
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`flex items-center gap-24 ${
            feature.imagePosition === "left" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="flex-1 flex flex-col gap-10">
            <h2 className="text-[40px] font-extrabold text-black">
              {feature.title}
            </h2>
            {feature.paragraphs.map((p, i) => (
              <p key={i} className="text-[20px] text-black font-medium">
                {p}
              </p>
            ))}
            {feature.button && (
              <div className="mt-12.5">
                <ShadcnButton label="Посмотреть меню" href="/menu" />
              </div>
            )}
          </div>

          <div className="relative w-125.75 h-169 shrink-0">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
