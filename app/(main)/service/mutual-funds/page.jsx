import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { FaRegCheckCircle } from "react-icons/fa";
import { getSiteData } from "@/lib/functions";

export const metadata = {
  title: "Mutual Funds",
  description:
    "Explore a diverse range of mutual funds tailored to your financial goals and risk appetite.",
};

const MutualFunds = async () => {
  const siteData=await getSiteData()
  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Mutual Funds
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pt-10 pb-10">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Diversified. Managed. Growth.
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Mutual funds are professionally managed investment schemes that pool money from multiple investors to invest in diversified asset classes. At {siteData?.websiteName}, we offer a wide range of mutual fund options that align with your financial goals, risk profile, and investment horizon.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            Whether you&apos;re looking to grow your wealth, save taxes, or build a retirement corpus, our curated mutual fund solutions offer flexibility, transparency, and expert fund management to help you succeed in your investment journey.
          </p>
        </div>

        {/* Types of Mutual Funds */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Types of mutual funds
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
  <li className="inline-block w-full items-start gap-2">
    <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
    <strong className="inline-block ml-2">Equity funds:</strong>
    <span className="ml-2">Invest in stocks for higher growth potential over the long term.</span>
  </li>
  <li className="inline-block w-full items-start gap-2">
    <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
    <strong className="inline-block ml-2">Debt funds:</strong>
    <span className="ml-2">Lower risk investment in government and corporate bonds.</span>
  </li>
  <li className="inline-block w-full items-start gap-2">
    <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
    <strong className="inline-block ml-2">Hybrid funds:</strong>
    <span className="ml-2">Combine equity and debt for balanced risk and return.</span>
  </li>
  <li className="inline-block w-full items-start gap-2">
    <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
    <strong className="inline-block ml-2">ELSS (Tax saving funds):</strong>
    <span className="ml-2">Get tax benefits under Section 80C with a 3-year lock-in.</span>
  </li>
  <li className="inline-block w-full items-start gap-2">
    <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
    <strong className="inline-block ml-2">Liquid funds:</strong>
    <span className="ml-2">Ideal for parking surplus funds with quick liquidity.</span>
  </li>
</ul>

        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Invest in Mutual Funds with Us
          </h2>
         <ul className="list-none pl-5 space-y-4 text-gray-700">
  <li className="inline-block w-full items-start gap-2 align-top">
    <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
    <strong className="inline-block ml-2">Diversified portfolio:</strong>
    <span className="ml-2">Reduce risk through asset diversification across sectors and markets.</span>
  </li>
  <li className="inline-block w-full items-start gap-2 align-top">
    <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
    <strong className="inline-block ml-2">Professional management:</strong>
    <span className="ml-2">Expert fund managers handle all investment decisions.</span>
  </li>
  <li className="inline-block w-full items-start gap-2 align-top">
    <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
    <strong className="inline-block ml-2">Flexible investment options:</strong>
    <span className="ml-2">Start with SIPs or lump sums based on your convenience.</span>
  </li>
  <li className="inline-block w-full items-start gap-2 align-top">
    <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
    <strong className="inline-block ml-2">Liquidity:</strong>
    <span className="ml-2">Easy entry and exit options with most open-ended funds.</span>
  </li>
  <li className="inline-block w-full items-start gap-2 align-top">
    <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
    <strong className="inline-block ml-2">Goal-based planning:</strong>
    <span className="ml-2">Tailored solutions for retirement, education, and wealth creation.</span>
  </li>
</ul>

        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Take control of your financial future with smart mutual fund investments. Whether you&apos;re new to investing or a seasoned pro, {siteData?.websiteName} offers the right mix of funds to help you meet your goals.
          </p>
          <Link
                        href="/login"
                        className="vl-btn1"
                      >
                        Explore funds now
                      </Link>
       
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;
