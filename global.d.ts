declare global {
  // namespace Express {
  //   interface Request {
  //     user?: User;
  //   }
  // }
}

interface BlogMeta {
  title: string;
  author: string;
  publishedAt: string;
  banner: string;
  path: string;
}

declare module '*.mdx' {
  const value: string;
  export default value;
  export const id: string;
  export const name: string;
  export const meta: BlogMeta;
}
