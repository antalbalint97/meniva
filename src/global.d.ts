export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export const frontmatter: Record<string, any>;
  export default MDXComponent;
}
