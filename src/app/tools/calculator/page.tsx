import type { Metadata } from "next";
import Calculator from "@/components/tools/Calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdLayout from "@/components/AdLayout";

export const metadata: Metadata = {
  title: "Calculator - Toolbox",
  description: "Free online calculator with basic arithmetic functions. Simple, fast, and runs directly in your browser.",
};

export default function CalculatorPage() {
  const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR;
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <AdLayout sidebarSlot={sidebarSlot} bottomSlot={bottomSlot}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Online Calculator</h1>
            <p className="text-muted-foreground">
              A free, browser-based calculator for quick arithmetic. No downloads, no registration — just open and start calculating.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>Click the number buttons to enter digits, then press an operator (+, -, ×, ÷) followed by the next number. Press <strong>=</strong> to see the result.</p>
              <p>Use the <strong>C</strong> button to clear the display and start a new calculation.</p>
              <p>You can enter decimal numbers by pressing the <strong>.</strong> button.</p>
            </CardContent>
          </Card>

          <Calculator />
        </div>
      </AdLayout>
    </div>
  );
}
