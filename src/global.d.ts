export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

declare module "*.mdx" {
  import { ComponentType } from "react";

  const MDXComponent: ComponentType<Record<string, unknown>>;
  export const frontmatter: Record<string, any>;
  export default MDXComponent;
}
