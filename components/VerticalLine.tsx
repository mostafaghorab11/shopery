type Props = { color?: string };

export default function VerticalLine({ color = "bg-gray-100" }: Props) {
  return (
    <div
      className={`dark:bg-white/10 inline-block min-h-[1em] w-0.5 self-stretch ${color}`}
    />
  );
}
