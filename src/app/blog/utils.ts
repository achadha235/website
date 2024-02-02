"use server";
import fs from "fs";

export async function getArticlePaths() {
  const files = fs.readdirSync("src/app/blog/articles");
  return files.filter((file) => file.endsWith(".mdx"));
}

export async function loadArticle(file) {
  return import(`@/app/blog/articles/${file}`);
}

export async function getArticle(file) {
  const article = await loadArticle(file);
  return { file, slug: file.replace(".mdx", ""), ...article.metadata };
}

export async function getArticles() {
  const files = await getArticlePaths();
  const articles = await Promise.all(
    files.map(async (file) => {
      const article = await loadArticle(file);
      return { file, slug: file.replace(".mdx", ""), ...article.metadata };
    })
  );
  return articles;
}
