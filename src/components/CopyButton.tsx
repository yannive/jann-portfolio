import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({
  value,
  label = "Copy email",
}: {
  value: string | null;
  label?: string;
}) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    if (!value) return;
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
      timer.current = setTimeout(() => setState("idle"), 2400);
    } catch {
      setState("error");
    }
  }
  return (
    <div className="copy-control">
      <button
        type="button"
        className="copy-button"
        onClick={copy}
        disabled={!value}
        aria-label={value ? label : "Email address not available yet"}
      >
        {state === "copied" ? <Check size={15} /> : <Copy size={15} />}
        <span>{state === "copied" ? "Copied!" : label}</span>
      </button>
      <span
        className={state === "error" ? "copy-error" : "sr-only"}
        role="status"
      >
        {state === "error"
          ? "Clipboard unavailable. Select and copy the text manually."
          : state === "copied"
            ? "Copied to clipboard."
            : ""}
      </span>
    </div>
  );
}
