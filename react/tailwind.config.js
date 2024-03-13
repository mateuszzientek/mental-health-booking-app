module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "rgba(var(--primary))",
                secondary: "#e8ede8",
                background: "rgba(var(--background))",
            },
            fontSize: {
                clamp: "clamp(1rem, 5vw, 3.75rem)",
            },
        },
    },
    plugins: [],
};
