import { type Config } from "@react-router/dev/config";

export default {
  ssr: true,
  // aboutは事前レンダリング
  prerender: ["/about"],
} satisfies Config;
