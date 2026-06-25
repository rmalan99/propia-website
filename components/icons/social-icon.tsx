import { readFileSync } from "fs";
import { join } from "path";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  name: "github" | "linkedin" | "mail" | "portfolio";
  className?: string;
}

export function SocialIcon({ name, className }: SocialIconProps) {
  const svgPath = join(
    process.cwd(),
    "public",
    "icons",
    "social",
    `${name}.svg`
  );
  const svgContent = readFileSync(svgPath, "utf8");

  return (
    <span
      className={cn("inline-flex", className)}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
