import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us - Toolbox",
  description: "Get in touch with the Toolbox team for questions, feedback, or support.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground">Have questions, feedback, or suggestions? We&apos;d love to hear from you.</p>

        <Card>
          <CardHeader>
            <CardTitle>Email</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>For general inquiries, bug reports, or feature requests, please email us at:</p>
            <p className="mt-2">
              <a href="mailto:ljh6c6a68@gmail.com" className="text-primary underline font-medium">
                ljh6c6a68@gmail.com
              </a>
            </p>
            <p className="mt-4 text-sm">We typically respond within 24-48 hours on business days.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Connect</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-medium w-16">X</span>
              <a
                href="https://x.com/xCreat0r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                @xCreat0r
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium w-16">GitHub</span>
              <a
                href="https://github.com/xCreat0r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                github.com/xCreat0r
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Report an Issue</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>If you encounter a bug or unexpected behavior in any of our tools, please include the following in your report:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Which tool you were using</li>
              <li>What steps led to the issue</li>
              <li>Your browser and operating system</li>
              <li>Screenshots or error messages (if applicable)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
