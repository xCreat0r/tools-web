"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import useClipboard from "@/hooks/useClipboard";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const { copied, copyError, copyText, clearCopiedState } = useClipboard();

  const encode = () => {
    try {
      if (!input) {
        throw new Error("Please enter content to encode");
      }
      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      const binaryString = String.fromCharCode(...data);
      const encoded = btoa(binaryString);
      setOutput(encoded);
      setError("");
      clearCopiedState();
    } catch (err) {
      setError("Encoding failed: " + (err instanceof Error ? err.message : String(err)));
      setOutput("");
    }
  };

  const decode = () => {
    try {
      if (!input) {
        throw new Error("Please enter Base64 text to decode");
      }
      const binaryString = atob(input);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const decoder = new TextDecoder();
      const decoded = decoder.decode(bytes);
      setOutput(decoded);
      setError("");
      clearCopiedState();
    } catch {
      setError("Decoding failed, please ensure the input is a valid Base64 string");
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
        <CardTitle>Base64 Encode/Decode Tool</CardTitle>
        <CardDescription>Base64 encoding and decoding tool, supports Chinese characters</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Input</label>
          <Textarea
            placeholder="Enter content to encode/decode..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[150px] font-mono text-sm"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button onClick={encode}>Base64 Encode</Button>
          <Button onClick={decode} variant="secondary">Base64 Decode</Button>
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
