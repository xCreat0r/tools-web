import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Braces, Link2, Clock, Binary } from "lucide-react";
import AdSense from "@/components/AdSense";

const tools = [
  {
    icon: Calculator,
    title: "Calculator",
    description: "Simple four-function calculator for quick arithmetic. Supports addition, subtraction, multiplication, and division.",
    href: "/tools/calculator",
  },
  {
    icon: Braces,
    title: "JSON Formatter",
    description: "Format, minify, and validate JSON data. Perfect for debugging API responses and configuration files.",
    href: "/tools/json-formatter",
  },
  {
    icon: Binary,
    title: "Base64 Tool",
    description: "Encode text to Base64 or decode Base64 back to plain text. Full UTF-8 support including Chinese and emoji.",
    href: "/tools/base64",
  },
  {
    icon: Clock,
    title: "Timestamp Converter",
    description: "Convert Unix timestamps to human-readable dates and vice versa. Supports both seconds and milliseconds.",
    href: "/tools/timestamp",
  },
  {
    icon: Link2,
    title: "URL Tool",
    description: "Encode special characters for URLs or decode percent-encoded strings. Essential for web development.",
    href: "/tools/url",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background to-muted">
      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-12">
        <div className="text-center space-y-4 py-8 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Toolbox
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of free online tools for developers and daily use.
            All tools run directly in your browser — no registration, no data collection, completely free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <tool.icon className="size-5" />
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground space-y-2 py-4 border-t">
          <p>No installation required. No account needed. Your data never leaves your browser.</p>
          <p>All tools are free and open to use for everyone.</p>
        </div>

        {process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM && (
          <div className="flex justify-center">
            <AdSense adSlot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM} adFormat="horizontal" />
          </div>
        )}
      </div>
    </div>
  );
}
