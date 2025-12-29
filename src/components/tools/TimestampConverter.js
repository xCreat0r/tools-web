"use client";

import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";

export default function TimestampConverter() {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [timestamp, setTimestamp] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [convertedResult, setConvertedResult] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timestampToDate = () => {
    try {
      const ts = parseInt(timestamp);
      if (isNaN(ts)) {
        setConvertedResult("Please enter a valid timestamp");
        return;
      }
      // 判断是秒还是毫秒
      const milliseconds = ts.toString().length === 10 ? ts * 1000 : ts;
      const date = new Date(milliseconds);
      setConvertedResult(date.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }));
    } catch (err) {
      setConvertedResult("Conversion failed: " + err.message);
    }
  };

  const dateToTimestamp = () => {
    try {
      const date = new Date(dateTime);
      if (isNaN(date.getTime())) {
        setConvertedResult("Please enter a valid date and time");
        return;
      }
      setConvertedResult(`Seconds: ${Math.floor(date.getTime() / 1000)} | Milliseconds: ${date.getTime()}`);
    } catch (err) {
      setConvertedResult("Conversion failed: " + err.message);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Timestamp Converter</CardTitle>
        <CardDescription>Convert between timestamp and date time</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Time */}
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
                onClick={() => copyToClipboard(String(Math.floor(currentTime / 1000)))}
              >
                Copy
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Timestamp (milliseconds): {currentTime}</span>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => copyToClipboard(String(currentTime))}
              >
                Copy
              </Button>
            </div>
          </div>
        </div>

        {/* Timestamp to Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Timestamp to Date</label>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter timestamp (seconds or milliseconds)"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
            />
            <Button onClick={timestampToDate}>Convert</Button>
          </div>
        </div>

        {/* Date to Timestamp */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Date to Timestamp</label>
          <div className="flex gap-2">
            <Input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
            />
            <Button onClick={dateToTimestamp}>Convert</Button>
          </div>
        </div>

        {/* Conversion Result */}
        {convertedResult && (
          <div className="bg-muted p-4 rounded-lg">
            <div className="text-sm font-medium mb-2">Conversion Result</div>
            <div className="text-lg font-mono break-all">{convertedResult}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

