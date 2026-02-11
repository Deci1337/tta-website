import { MarqueeRow } from "../components/MarqueeRow";

const advantages = [
  {
    icon: <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Time Saving",
    description: "Automation of routine tasks saves hours of work every day"
  },
  {
    icon: <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    title: "Increased Reach",
    description: "Optimization algorithms increase views and engagement"
  },
  {
    icon: <svg className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: "Cross-platform",
    description: "Works on Windows, macOS and Linux without limitations"
  },
  {
    icon: <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>,
    title: "Open Source",
    description: "Full transparency and code security for all users"
  },
  {
    icon: <svg className="w-12 h-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Easy Setup",
    description: "Ready to work in 5 minutes after installation"
  },
];

export function Advantages() {
  return (
    <section className="relative py-14">
      <div className="mb-12 px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-4">Advantages</h2>
        <p className="text-xl text-white/60">Why choose TikTok Agent</p>
      </div>
      
      <div 
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        <MarqueeRow items={advantages} direction="left" />
      </div>
    </section>
  );
}
