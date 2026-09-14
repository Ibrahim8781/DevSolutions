import { Terminal, Users2, Cpu, LineChart } from "lucide-react";

export default function LeadershipTeam() {
  const team = [
    {
      role: "Principal Systems Architect & Founder",
      focus: "Backend Architecture & Workflow Engineering",
      bio: "Focuses on decomposing complex business bottlenecks into clean, scalable API topologies and deterministic data synchronization pipelines.",
      flag: "[REAL COPY / FOUNDER BIO TO BE INSERTED]",
      icon: Cpu,
      color: "#533afd",
    },
    {
      role: "Head of Applied AI & Telephony",
      focus: "Autonomous Agents & Conversational Voice AI",
      bio: "Specializes in multi-modal LLM orchestration, structured tool-calling loops, and low-latency SIP telephony integration for inbound qualification.",
      flag: "[REAL COPY / LEAD BIO TO BE INSERTED]",
      icon: Terminal,
      color: "#ea2261",
    },
    {
      role: "Quantitative Systems Engineer",
      focus: "Algorithmic Execution & Strategy Automation",
      bio: "Engineers custom broker order execution daemons, volatility circuit breakers, and sub-second webhook routing for systematic trade execution.",
      flag: "[REAL COPY / LEAD BIO TO BE INSERTED]",
      icon: LineChart,
      color: "#9b6829",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#f6f9fc]/60 border-b border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 text-[#533afd] text-xs font-mono font-medium">
            <Users2 className="w-3.5 h-3.5" />
            LEADERSHIP & ENGINEERING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#0d253d] tracking-[-1px] leading-[1.1]">
            Technical leadership behind our delivery
          </h2>
          <p className="text-base sm:text-lg font-light text-[#64748d] leading-relaxed">
            Every client project is led directly by experienced systems architects and engineers — never outsourced to junior account managers.
          </p>
        </div>

        {/* 3 Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {team.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.role}
                className="rounded-2xl bg-white border border-[#e3e8ee] p-7 sm:p-8 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,55,112,0.06)] hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: member.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-light text-[#0d253d]">
                      {member.role}
                    </h3>
                    <div className="text-xs font-mono text-[#533afd] mt-1 font-medium">
                      {member.focus}
                    </div>
                  </div>

                  <p className="text-[14px] font-light text-[#64748d] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#e3e8ee] text-xs font-mono text-[#ea2261] bg-rose-50/70 p-2.5 rounded-lg">
                  {member.flag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
