"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useClipboard from "@/hooks/useClipboard";

export default function TimestampConverter() {
  const [currentTime, setCurrentTime] = useState<number>(() => Date.now());
  const [timestamp, setTimestamp] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [convertedResult, setConvertedResult] = useState("");
  const { copied, copyError, copyText, clearCopiedState } = useClipboard();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timestampToDate = () => {
    try {
      const raw = timestamp.trim();
      if (!raw) {
        setConvertedResult("Please enter a timestamp");
        return;
      }

      const ts = Number(raw);
      if (Number.isNaN(ts)) {
        setConvertedResult("Please enter a valid timestamp");
        return;
      }

      const milliseconds = Math.abs(ts) < 1e12 ? Math.trunc(ts * 1000) : Math.trunc(ts);
      const date = new Date(milliseconds);
      if (Number.isNaN(date.getTime())) {
        setConvertedResult("Timestamp is out of valid range");
        return;
      }

      setConvertedResult(
        [
          `Input: ${raw}`,
          `Milliseconds: ${milliseconds}`,
          `Local Time: ${date.toLocaleString("en-US")}`,
          `UTC Time: ${date.toUTCString()}`,
          `ISO: ${date.toISOString()}`,
        ].join("\n")
      );
      clearCopiedState();
    } catch (err) {
      setConvertedResult("Conversion failed: " + (err instanceof Error ? err.message : String(err)));
    }
  };

  const dateToTimestamp = () => {
    try {
      const date = new Date(dateTime);
      if (isNaN(date.getTime())) {
        setConvertedResult("Please enter a valid date and time");
        return;
      }

      const ms = date.getTime();
      setConvertedResult(
        [
          `Input Date: ${date.toLocaleString("en-US")}`,
          `Seconds: ${Math.floor(ms / 1000)}`,
          `Milliseconds: ${ms}`,
          `ISO: ${date.toISOString()}`,
        ].join("\n")
      );
      clearCopiedState();
    } catch (err) {
      setConvertedResult("Conversion failed: " + (err instanceof Error ? err.message : String(err)));
    }
  };

  const useNowSeconds = () => {
    setTimestamp(String(Math.floor(Date.now() / 1000)));
  };

  const useNowMilliseconds = () => {
    setTimestamp(String(Date.now()));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Timestamp Converter</CardTitle>
        <CardDescription>Convert between timestamp and date time</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-primary text-primary-foreground p-4 rounded-lg">
          <div className="text-sm opacity-90 mb-1">Current Time</div>
          <div className="text-2xl font-bold">
            {new Date(currentTime).toLocaleString("en-US")}
          </div>
          <div className="text-sm mt-2 space-y-1">
            <div className="flex justify-between items-center">
              <span>Timestamp (seconds): {Math.floor(currentTime / 1000)}</span>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => copyText(String(Math.floor(currentTime / 1000)))}
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Timestamp (milliseconds): {currentTime}</span>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => copyText(String(currentTime))}
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Timestamp to Date</label>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter timestamp (seconds or milliseconds)"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && timestampToDate()}
            />
            <Button onClick={timestampToDate}>Convert</Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={useNowSeconds}>Use Now (sec)</Button>
            <Button variant="outline" size="sm" onClick={useNowMilliseconds}>Use Now (ms)</Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Date to Timestamp</label>
          <div className="flex gap-2">
            <Input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && dateToTimestamp()}
            />
            <Button onClick={dateToTimestamp}>Convert</Button>
          </div>
        </div>

        {convertedResult && (
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="text-sm font-medium">Conversion Result</div>
              <Button variant="outline" size="sm" onClick={() => copyText(convertedResult)}>
                {copied ? "Copied" : "Copy Result"}
              </Button>
            </div>
            <div className="text-sm font-mono whitespace-pre-wrap break-all">{convertedResult}</div>
          </div>
        )}

        {copyError && (
          <div className="bg-destructive/10 text-destructive p-3 rounded-lg text-sm">
            Copy error: {copyError}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
