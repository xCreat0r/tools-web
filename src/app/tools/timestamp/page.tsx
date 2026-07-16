import type { Metadata } from "next";
import TimestampConverter from "@/components/tools/TimestampConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdLayout from "@/components/AdLayout";

export const metadata: Metadata = {
  title: "Timestamp Converter - Toolbox",
  description: "Free Unix timestamp to date converter. Convert between Unix timestamps (seconds/milliseconds) and human-readable dates instantly.",
};

export default function TimestampPage() {
  const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR;
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <AdLayout sidebarSlot={sidebarSlot} bottomSlot={bottomSlot}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Timestamp Converter</h1>
            <p className="text-muted-foreground">
              Convert Unix timestamps to human-readable dates and vice versa. Supports both second-level and millisecond-level timestamps.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>What is a Unix Timestamp?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>A Unix timestamp (also known as Epoch time) is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT). It is widely used in programming, databases, and APIs because it provides a simple, timezone-independent way to represent a point in time.</p>
              <p>Some systems and programming languages (such as JavaScript) use milliseconds instead of seconds. This tool automatically detects which format your input uses.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Use Cases</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Debugging API responses that return timestamps</li>
                <li>Converting log file timestamps to readable dates</li>
                <li>Checking when a database record was created or modified</li>
                <li>Generating a timestamp for the current time for testing</li>
              </ul>
            </CardContent>
          </Card>

          <TimestampConverter />
        </div>
      </AdLayout>
    </div>
  );
}
