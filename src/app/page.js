"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Calculator from "@/components/tools/Calculator";
import JsonFormatter from "@/components/tools/JsonFormatter";
import Base64Tool from "@/components/tools/Base64Tool";
import TimestampConverter from "@/components/tools/TimestampConverter";
import UrlTool from "@/components/tools/UrlTool";
import AdSense from "@/components/AdSense";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Page Title */}
        <div className="text-center space-y-4 py-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Toolbox
          </h1>
          <p className="text-muted-foreground">
            A collection of practical tools to help with your daily work
          </p>
        </div>

        {/* AdSense - Top Banner */}
        <AdSense 
          adSlot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP}
          adFormat="horizontal"
        />

        {/* Tools Tabs */}
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
            <TabsTrigger value="calculator" className="text-xs md:text-sm">
              🔢 Calculator
            </TabsTrigger>
            <TabsTrigger value="json" className="text-xs md:text-sm">
              📋 JSON
            </TabsTrigger>
            <TabsTrigger value="base64" className="text-xs md:text-sm">
              🔐 Base64
            </TabsTrigger>
            <TabsTrigger value="timestamp" className="text-xs md:text-sm">
              ⏰ Timestamp
            </TabsTrigger>
            <TabsTrigger value="url" className="text-xs md:text-sm">
              🔗 URL
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="calculator" className="mt-0">
              <Calculator />
            </TabsContent>

            <TabsContent value="json" className="mt-0">
              <JsonFormatter />
            </TabsContent>

            <TabsContent value="base64" className="mt-0">
              <Base64Tool />
            </TabsContent>

            <TabsContent value="timestamp" className="mt-0">
              <TimestampConverter />
            </TabsContent>

            <TabsContent value="url" className="mt-0">
              <UrlTool />
            </TabsContent>
          </div>
        </Tabs>

        {/* AdSense - Bottom Banner */}
        <AdSense 
          adSlot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM}
          adFormat="horizontal"
        />

        {/* Footer */}
        {/* <div className="text-center text-sm text-muted-foreground py-4">
          <p>
            Built with Next.js 15 + Turbopack + shadcn/ui | 
            <span className="ml-2">Designed for backend developers</span>
          </p>
        </div> */}
      </div>
    </div>
  );
}
