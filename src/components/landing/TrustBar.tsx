import { Activity, Lock, Server, Zap } from "lucide-react";

const items = [
  { icon: Zap, label: "p95 latency", value: "<240ms" },
  { icon: Activity, label: "Uptime SLA", value: "99.95%" },
  { icon: Server, label: "MCP-native", value: "v1.0 spec" },
  { icon: Lock, label: "Compliance", value: "SOC 2 in progress" },
];

export const TrustBar = () => {
  return (
    <section className="border-b border-border/60 bg-background/60">
      <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {label}
              </div>
              <div className="truncate text-sm font-medium text-foreground">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
