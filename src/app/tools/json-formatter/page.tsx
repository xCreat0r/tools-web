import type { Metadata } from "next";
import JsonFormatter from "@/components/tools/JsonFormatter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdLayout from "@/components/AdLayout";

export const metadata: Metadata = {
  title: "JSON Formatter - Toolbox",
  description: "Free JSON formatter, validator, and minifier. Format messy JSON into readable, properly indented output instantly.",
};

export default function JsonFormatterPage() {
  const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR;
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <AdLayout sidebarSlot={sidebarSlot} bottomSlot={bottomSlot}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">JSON Formatter</h1>
            <p className="text-muted-foreground">
              Format, validate, and minify JSON data directly in your browser. Paste any JSON string and make it readable in one click.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>What is JSON?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format used extensively in web APIs, configuration files, and data storage. It&apos;s human-readable but can become difficult to parse when minified into a single line.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p><strong>Format:</strong> Transforms minified or poorly-formatted JSON into a clean, 2-space indented structure for easy reading and debugging.</p>
              <p><strong>Minify:</strong> Compresses formatted JSON into a single line — ideal for reducing file size in production environments.</p>
              <p><strong>Validation:</strong> Automatically detects and reports syntax errors in your JSON, with detailed error messages.</p>
              <p>Pro tip: Press <strong>Cmd+Enter</strong> (Mac) or <strong>Ctrl+Enter</strong> (Windows) to format instantly.</p>
            </CardContent>
          </Card>

          <JsonFormatter />
        </div>
      </AdLayout>
    </div>
  );
}
