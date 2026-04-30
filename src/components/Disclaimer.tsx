import { cn } from "../lib/utils";

interface DisclaimerProps {
  type?: "card" | "page" | "calculator";
  className?: string;
}

export default function Disclaimer({ type = "page", className }: DisclaimerProps) {
  const texts = {
    card: "Variable returns | Capital at risk",
    calculator: "This is a projection only. Actual returns depend on business performance.",
    page: "This platform connects businesses and investors through commercial agreements. It is not a bank, NBFC, or SEBI-registered investment adviser. Returns are variable and not guaranteed. Capital invested is at risk. Please consult a financial adviser before investing."
  };

  return (
    <p className={cn(
      "text-slate-500 italic",
      type === "card" ? "text-[10px]" : "text-xs",
      className
    )}>
      {texts[type]}
    </p>
  );
}
