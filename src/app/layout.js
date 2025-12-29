import {Geist, Geist_Mono} from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Toolbox - Practical Tools Collection",
    description: "Practical tools including calculator, JSON formatter, Base64 encode/decode, timestamp converter, URL encode/decode, etc.",
};

export default function RootLayout({children}) {
    const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {adsenseClientId && (
            <>
                <Script
                    id="adsbygoogle-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (adsbygoogle = window.adsbygoogle || []).push({
                                google_ad_client: "${adsenseClientId}",
                                enable_page_level_ads: true
                            });
                        `,
                    }}
                />
                <Script
                    async
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
            </>
        )}
        {children}
        </body>
        </html>
    );
}
