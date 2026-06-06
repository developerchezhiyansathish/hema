import { Noto_Serif, Epilogue, Manrope } from "next/font/google";

/* ─── Hero & Headline ─── */
export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

/* ─── Navigation & Labels ─── */
export const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-epilogue",
  display: "swap",
});

/* ─── Body Text ─── */
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-manrope",
  display: "swap",
});
