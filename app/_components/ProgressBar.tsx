import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
}

export default function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <div
      className={cn(
        "w-full h-2 bg-muted rounded-full overflow-hidden",
        className
      )}
    >
      <div
        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
