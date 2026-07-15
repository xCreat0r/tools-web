import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy - Toolbox",
  description: "Privacy policy for Toolbox - how we handle your data and use cookies.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <Card>
          <CardHeader>
            <CardTitle>1. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Toolbox does not collect, store, or transmit any personal information. All tools run entirely in your browser and no data is sent to our servers.</p>
            <p>We do not require registration, login, or any form of personal identification to use our tools.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Cookies and Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Google AdSense, a third-party advertising service, may use cookies to serve ads on this website. Google&apos;s use of the DART cookie enables it to serve ads based on your visit to this site and other sites on the Internet.</p>
            <p>You may opt out of the DART cookie by visiting the Google ad and content network privacy policy at <a href="https://policies.google.com/technologies/ads" className="text-primary underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p><strong>Google AdSense:</strong> We display advertisements served by Google AdSense. Google may use cookies and web beacons to collect information from your browser for ad personalization. This information is governed by Google&apos;s Privacy Policy.</p>
            <p>This site does not use analytics or tracking services beyond AdSense.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Data Security</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>Since all tool processing happens locally in your browser, your data never leaves your device. We do not have access to any content you type, paste, or upload into our tools.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>If you have any questions about this privacy policy, please visit our <a href="/contact" className="text-primary underline">Contact page</a>.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
