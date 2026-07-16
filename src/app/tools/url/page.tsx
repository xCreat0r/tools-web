import type { Metadata } from "next";
import UrlTool from "@/components/tools/UrlTool";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdLayout from "@/components/AdLayout";

export const metadata: Metadata = {
  title: "URL Encoder / Decoder - Toolbox",
  description: "Free online URL encoding and decoding tool. Encode special characters for safe URL usage or decode percent-encoded URLs back to plain text.",
};

export default function UrlPage() {
  const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR;
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <AdLayout sidebarSlot={sidebarSlot} bottomSlot={bottomSlot}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">URL Encoder / Decoder</h1>
            <p className="text-muted-foreground">
              Encode or decode URL components. Convert special characters, spaces, and Unicode into percent-encoded format (and back).
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>What is URL Encoding?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>URL encoding (also called percent-encoding) converts characters that are not allowed in URLs into a format that can be transmitted over the Internet. For example, spaces become <code>%20</code> and Chinese characters like &ldquo;你好&rdquo; become <code>%E4%BD%A0%E5%A5%BD</code>.</p>
              <p>This is essential when you need to include special characters, non-ASCII text, or reserved characters (like <code>&amp;</code>, <code>?</code>, <code>=</code>) in a URL query string.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When to Use</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Constructing API URLs with query parameters containing special characters</li>
                <li>Decoding obfuscated or encoded URLs for debugging</li>
                <li>Encoding search queries that contain non-English characters</li>
                <li>Working with redirect URLs that contain dynamic parameters</li>
              </ul>
            </CardContent>
          </Card>

          <UrlTool />
        </div>
      </AdLayout>
    </div>
  );
}
