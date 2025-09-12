const Stats = () => {
  const items = [
    {
      title: "Active Members",
      numbers: 1200,
    },
    {
      title: "Certified Trainers",
      numbers: 12,
    },
    {
      title: "Year Of Experience",
      numbers: 20,
    },
  ];
  return (
    <section className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="col-span-3 lg:col-span-1 space-y-1">
          <h2 className="font-bold text-2xl text-charcoal dark:text-white">{item.numbers}+</h2>
          <p className="text-lg font-rubik text-charcoal dark:text-white">{item.title}</p>
        </div>
      ))}
    </section>
  );
};
export default Stats;
