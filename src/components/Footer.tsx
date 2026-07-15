import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-sm font-semibold mb-3">Toolbox</h3>
          <p className="text-sm text-muted-foreground">
            A curated collection of free online tools for developers and daily use.
            No registration required, all tools run directly in your browser.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Tools</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/tools/calculator" className="hover:text-foreground transition-colors">Calculator</Link></li>
            <li><Link href="/tools/json-formatter" className="hover:text-foreground transition-colors">JSON Formatter</Link></li>
            <li><Link href="/tools/base64" className="hover:text-foreground transition-colors">Base64 Encoder/Decoder</Link></li>
            <li><Link href="/tools/timestamp" className="hover:text-foreground transition-colors">Timestamp Converter</Link></li>
            <li><Link href="/tools/url" className="hover:text-foreground transition-colors">URL Encoder/Decoder</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t px-4 py-6 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Toolbox. All tools are free to use. No data is stored on our servers.</p>
      </div>
    </footer>
  );
}
