import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    environmentOptions: {
      happyDOM: {
        width: 1920,
        height: 1024,
        settings: {
          navigator: { userAgent: "Mozilla/5.0 HappyDOM/jsdom/compatible" },
        },
      },
    },
  },
});
