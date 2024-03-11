module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#449c6f",
                secondary: "#e8ede8",
            },
            fontSize: {
                clamp: "clamp(1rem, 5vw, 3.75rem)",
            },
        },
    },
    plugins: [],
};
