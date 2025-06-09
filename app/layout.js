import { Montaga } from "next/font/google";
import "./globals.css";
import RenewalPopup from "@/components/renewalPopup";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import Script from "next/script";

const poppins = Montaga({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"], // You can adjust the weights as needed
});

export const dynamic = "force-dynamic";
export const metadata = {
  title: {
    default: "Omnicompounding Enterprises Private Limited",
    template: "%s - Omnicompounding Enterprises Private Limited",
  },
  description:
    "Welcome to Omnicompounding Enterprises Private Limited, your trusted financial companion in India. We are in mutual funds distribution services since eighteen years, we understand that your financial journey is more than just numbers; it's a story of dreams, aspirations, and the legacy you want to leave behind. At Omnicompounding Enterprises Private Limited, we are driven by the belief that everyone deserves a secure and prosperous future.",
  twitter: {
    card: "summary_large_image",
  },
  author: "Omnicompounding Enterprises Private Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable}`}>
        <SubscriptionProvider>
          {/* <RenewalPopup /> */}
          <div className="bg-white font-sans">
            {children}
          </div>
        </SubscriptionProvider>
      </body>
    </html>
  );
}
