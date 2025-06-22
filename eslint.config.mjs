// eslint.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  // If you need to specify a different resolvePluginsPath, do it here.
  // resolvePluginsPath: __dirname,
});

const eslintConfig = [
  // 1. Add a config object specifically for ignoring files.
  // This should ideally be at the beginning of your config array
  // to ensure these files are ignored before any other rules are applied.
  {
    ignores: [
      "lib/generated/", // Ignore everything inside the generated folder
      "node_modules/", // Standard ignore for node modules
      ".next/", // Standard ignore for Next.js build output
      "dist/", // Common ignore for compiled output
    ],
  },

  // 2. Extend your existing configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 3. Your custom rules
  {
    rules: {
      // Keep 'no-unused-vars' off if it's causing issues,
      // but reconsider enabling it for your own code for better quality.
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      " @typescript-eslint/no-explicit-any": "off",

      // Add the specific rules you want to disable globally for your project (if any).
      // Since the generated files are now ignored, you might want to re-enable these
      // for your *own* code and fix them manually if they appear there.
      // For now, I'll keep them off as per your likely intention, assuming they were
      // also appearing outside generated code.
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-this-alias": "off",
    },
  },
];

export default eslintConfig;
