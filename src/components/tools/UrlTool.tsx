"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import useClipboard from "@/hooks/useClipboard";

export default function UrlTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const { copied, copyError, copyText, clearCopiedState } = useClipboard();

  const encodeUrl = () => {
    try {
      if (!input) {
        throw new Error("Please enter URL text to encode");
      }
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
      setError("");
      clearCopiedState();
    } catch (err) {
      setError("Encoding failed: " + (err instanceof Error ? err.message : String(err)));
      setOutput("");
    }
  };

  const decodeUrl = () => {
    try {
      if (!input) {
        throw new Error("Please enter URL text to decode");
      }
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
      setError("");
      clearCopiedState();
    } catch (err) {
      setError("Decoding failed: " + (err instanceof Error ? err.message : String(err)));
      setOutput("");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
    clearCopiedState();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>URL Encode/Decode Tool</CardTitle>
        <CardDescription>URL encoding and decoding tool, supports Chinese characters and special characters</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Input</label>
          <Textarea
            placeholder="Example: https://example.com/search?q=hello"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[150px] font-mono text-sm"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button onClick={encodeUrl}>URL Encode</Button>
          <Button onClick={decodeUrl} variant="secondary">URL Decode</Button>
          <Button onClick={clearAll} variant="outline">Clear</Button>
          {output && (
            <Button onClick={() => copyText(output)} variant="outline">
              {copied ? "Copied" : "Copy Result"}
            </Button>
          )}
        </div>

        {error && (
          <div className="bg-destructive/10 text-destructive p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {copyError && (
          <div className="bg-destructive/10 text-destructive p-3 rounded-lg text-sm">
            Copy error: {copyError}
          </div>
        )}

        {output && (
          <div>
            <label className="text-sm font-medium mb-2 block">Output Result</label>
            <Textarea
              value={output}
              readOnly
              className="min-h-[150px] font-mono text-sm bg-muted"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
