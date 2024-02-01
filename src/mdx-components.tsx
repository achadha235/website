import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: (props) => {
      // Make sure links open in a new tab
      return <a target="_blank" rel="noopener" {...props} />;
    },
  };
}
