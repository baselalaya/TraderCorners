export type PageKey =
  | "home"
  | "platforms"
  | "accounts"
  | "about"
  | "privacy"
  | "terms"
  | "economicCalendar"
  | "fxCalculator"
  | "login"
  | "signup";

type SEOEntry = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  type?: string; // og:type
  breadcrumb?: { name: string; url: string }[];
};

export const SITE = {
  name: "Trader Corners",
  baseUrl: "https://tradercorners.com",
  defaultImage: "/logo.png",
  twitter: "@tradercorners",
  locale: "en_US",
  organization: {
    name: "Trader Corners",
    url: "https://tradercorners.com",
    logo: "/logo.png",
    sameAs: [
      "https://twitter.com/tradercorners",
      "https://www.linkedin.com/company/tradercorners",
      "https://www.youtube.com/@tradercorners",
      "https://t.me/tradercorners",
    ],
  },
} as const;

export const SEO_DATA: Record<PageKey, SEOEntry> = {
  home: {
    path: "/",
    title: "Trader Corners – Trade Bold. Win Smart.",
    description:
      "Trade Forex, Crypto, and CFDs with premium tools, lightning-fast execution, and secure platforms. Start trading with Trader Corners today.",
    keywords: [
      "forex trading",
      "crypto trading",
      "CFDs",
      "trading platform",
      "Trader Corners",
    ],
    ogImage: "/logo.png",
    type: "website",
    breadcrumb: [{ name: "Home", url: "/" }],
  },
  platforms: {
    path: "/platforms",
    title: "Trading Platforms – MetaTrader 5, Web & Mobile | Trader Corners",
    description:
      "Trade anywhere with MetaTrader 5, our Web Platform, and Mobile Apps. Powerful tools, charts, and execution speed.",
    keywords: ["MetaTrader 5", "web trader", "mobile trading", "MT5"],
    ogImage: "/logo.png",
    type: "website",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Platforms", url: "/platforms" },
    ],
  },
  accounts: {
    path: "/accounts",
    title: "Account Types – Basic, Premium, Institutional | Trader Corners",
    description:
      "Compare Basic, Premium, and Institutional accounts: minimum deposits, spreads, leverage, platforms, and stop-out levels.",
    keywords: ["trading accounts", "basic account", "premium account", "institutional account"],
    ogImage: "/logo.png",
    type: "website",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Accounts", url: "/accounts" },
    ],
  },
  about: {
    path: "/about",
    title: "About Trader Corners",
    description:
      "Discover Trader Corners – our mission, platform, and the team behind a premium trading experience.",
    ogImage: "/logo.png",
    type: "website",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ],
  },
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy | Trader Corners",
    description:
      "How Trader Corners collects, uses, and protects your personal information.",
    ogImage: "/logo.png",
    type: "website",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
  terms: {
    path: "/terms-of-service",
    title: "Terms of Service | Trader Corners",
    description: "Read the terms and conditions for using Trader Corners.",
    ogImage: "/logo.png",
    type: "website",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Terms of Service", url: "/terms-of-service" },
    ],
  },
  economicCalendar: {
    path: "/economic-calendar",
    title: "Economic Calendar | Trader Corners",
    description:
      "Stay updated with major economic events affecting forex, stocks, and crypto.",
    ogImage: "/logo.png",
    type: "website",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Tools", url: "/economic-calendar" },
    ],
  },
  fxCalculator: {
    path: "/fx-calculator",
    title: "FX Calculator – Pip Value, Margin & Risk | Trader Corners",
    description:
      "Calculate pip value, margin, and risk quickly with our FX Calculator.",
    ogImage: "/logo.png",
    type: "website",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "FX Calculator", url: "/fx-calculator" },
    ],
  },
  login: {
    path: "/login",
    title: "Login | Trader Corners",
    description: "Access your Trader Corners account.",
    ogImage: "/logo.png",
    type: "website",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Login", url: "/login" },
    ],
  },
  // signup page disabled; handled via redirect in router
};
