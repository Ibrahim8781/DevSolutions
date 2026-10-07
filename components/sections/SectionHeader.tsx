export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-h2 mt-5 text-balance">{title}</h2>
      {lead && <p className="text-lead mt-5 text-balance">{lead}</p>}
    </div>
  );
}
