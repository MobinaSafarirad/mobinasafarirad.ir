import localFont from "next/font/local";

export const rubik = localFont({
  src: [
    {
      path: "../fonts/rubik/Rubik-VariableFont_wght.ttf",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../fonts/rubik/Rubik-Italic-VariableFont_wght.ttf",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-rubik",
  display: "swap",
});

export const digiHamishe = localFont({
  src: [
    {
      path: "../fonts/digi-hamishe/DigiHamishe-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/digi-hamishe/DigiHamishe-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-digi-hamishe",
  display: "swap",
});
