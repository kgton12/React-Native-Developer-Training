import react from "eslint-plugin-react";
import typescript from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import unusedImports from "eslint-plugin-unused-imports";

export default [
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: parser,
            ecmaVersion: "latest",
            sourceType: "module",
        },
        plugins: {
            react,
            "@typescript-eslint": typescript,
            "unused-imports": unusedImports,
        },
        rules: {
            "react/prop-types": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "unused-imports/no-unused-imports": "warn",
            "unused-imports/no-unused-vars": [
                "warn",
                { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
            ],
            ...prettierConfig.rules,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
