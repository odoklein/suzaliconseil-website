export default function manifest() {
  return {
    name: "Suzali Conseil",
    short_name: "Suzali",
    description:
      "Cabinet de conseil en stratégie, management commercial et transformation digitale.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FAFB",
    theme_color: "#0D332B",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
