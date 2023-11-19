type SubTitleProps = {
  sub: { id: number; title: string; description: string };
};

export default function SubTitle(props: SubTitleProps) {
  const { sub } = props;

  return (
    <div className="flex flex-col p-6 md:space-y-3 space-y-2 w-full text-neutral-300">
      <h4 className="md:text-lg text-sm font-semibold">{sub.title} </h4>
      <p className="text-[0.9rem]">{sub.description}</p>
    </div>
  );
}
