"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function useClipboard(resetAfterMs: number = 1800) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCopiedState = useCallback(() => {
    setCopied(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyText = useCallback(
    async (text: string) => {
      if (!text) {
        setCopyError("Nothing to copy");
        return false;
      }

      try {
        if (!navigator?.clipboard?.writeText) {
          throw new Error("Clipboard API not available in this browser");
        }

        await navigator.clipboard.writeText(text);
        setCopyError("");
        setCopied(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setCopied(false);
          timeoutRef.current = null;
        }, resetAfterMs);

        return true;
      } catch (err) {
        setCopied(false);
        setCopyError(err instanceof Error ? err.message : "Copy failed");
        return false;
      }
    },
    [resetAfterMs]
  );

  return { copied, copyError, copyText, clearCopiedState };
}
