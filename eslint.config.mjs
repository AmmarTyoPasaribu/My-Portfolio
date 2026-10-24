import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    "porto orang/**",
    "porto orang gacor/**",
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // The ported ReactBits-style components (components/site) are vendored, imperative animation code:
  // refs/setState patterns that React Compiler's lint rules flag but that behave correctly at runtime.
  {
    files: ["components/site/**/*.{js,jsx}"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/immutability": "off",
      "react-hooks/refs": "off",
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
