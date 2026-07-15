"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import useClipboard from "@/hooks/useClipboard";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const { copied, copyError, copyText, clearCopiedState } = useClipboard();

  const parseInput = () => {
    const value = input.trim();
    if (!value) {
      throw new Error("Please enter JSON content first");
    }
    return JSON.parse(value);
  };

  const formatJson = () => {
    try {
      const parsed = parseInput();
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError("");
      clearCopiedState();
    } catch (err) {
      setError("JSON format error: " + (err instanceof Error ? err.message : String(err)));
      setOutput("");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = parseInput();
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError("");
      clearCopiedState();
    } catch (err) {
      setError("JSON format error: " + (err instanceof Error ? err.message : String(err)));
      setOutput("");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
    clearCopiedState();
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      formatJson();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>JSON Formatter</CardTitle>
        <CardDescription>Format, minify and validate JSON data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Input JSON</label>
          <Textarea
            placeholder='{"name": "John", "age": 18}'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onInputKeyDown}
            className="min-h-[150px] font-mono text-sm"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button onClick={formatJson}>Format</Button>
          <Button onClick={minifyJson} variant="secondary">Minify</Button>
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
              className="min-h-[200px] font-mono text-sm bg-muted"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
