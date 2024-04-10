import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.html"],
    theme: {
        extend: {
            colors: {
                black: "#000",
                white: "#FFF",
                grey: {
                    light: "#CCC",
                    dark: "#666",
                },
                red: "#F33",
            },
            borderRadius: {},
            gridTemplateColumns: {},
            fontSize: {},
        },
    },
    plugins: [],
};
export default config;
