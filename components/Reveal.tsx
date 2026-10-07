// Fades content in as it scrolls into view using CSS scroll-driven animations
// (see .reveal in globals.css). Content is always visible without JS, in
// browsers that lack support, and when reduced motion is requested.
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
