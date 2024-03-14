module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#449c6f",
                secondary: "#e8ede8",
                background: "rgba(var(--background))",
                background_secondary: "rgba(var(--background_secondary))",
                text_100: "rgba(var(--text_100))",
                text_60: "rgba(var(--text_60))",
                text_80: "rgba(var(--text_80))",
                text_90: "rgba(var(--text_90))",
            },
            fontSize: {
                clamp: "clamp(1rem, 5vw, 3.75rem)",
            },
        },
    },
    plugins: [],
};
