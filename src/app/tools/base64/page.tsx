import type { Metadata } from "next";
import Base64Tool from "@/components/tools/Base64Tool";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Base64 Encoder / Decoder - Toolbox",
  description: "Free online Base64 encoding and decoding tool with full UTF-8 support. Encode text to Base64 or decode Base64 back to readable text.",
};

export default function Base64Page() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Base64 Encoder / Decoder</h1>
          <p className="text-muted-foreground">
            Encode any text to Base64 or decode Base64 strings back to readable text. Supports all Unicode characters including Chinese, Japanese, and emoji.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What is Base64?</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It&apos;s commonly used for:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Embedding images directly in HTML or CSS (data URIs)</li>
              <li>Encoding email attachments (MIME)</li>
              <li>Storing binary data in JSON or XML</li>
              <li>Basic authentication headers in HTTP requests</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How This Tool Works</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>Our encoder uses the modern <strong>TextEncoder</strong> API to properly handle UTF-8 characters, avoiding the legacy issues with special characters that older Base64 tools suffer from.</p>
            <p>The decoder uses <strong>TextDecoder</strong> to accurately reconstruct the original text, ensuring Chinese characters, emojis, and other Unicode content are preserved.</p>
          </CardContent>
        </Card>

        <Base64Tool />
      </div>
    </div>
  );
}
