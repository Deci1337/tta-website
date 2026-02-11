export function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:scale-105">
      {icon && <div className="mb-4 text-3xl">{icon}</div>}
      <h3 className="mb-2 text-lg font-medium text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}
