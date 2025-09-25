import useWhyUsData from "@/lib/constants/why-us.const";

const WhyUsContent = () => {
  const whyUsData = useWhyUsData();
  return (
    <section className="content space-y-8">
      {whyUsData.map((item) => (
        <div key={item.id} className="flex gap-6 items-center">
          <div>
            <div className="flex items-center justify-center text-grayExtra font-bold text-xs size-[60px] rounded-full bg-main border border-charcoal/15">
              0 {item.id}
            </div>
          </div>
          <div className="flex flex-col gap-2 py-1">
            <h2 className="capitalize font-bold text-charcoal">{item.title}</h2>
            <p className="font-rubik text-charcoal">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
export default WhyUsContent;
