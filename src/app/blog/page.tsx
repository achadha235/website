import { getArticles } from "@/app/blog/utils";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";
export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Abhishek Chadha | Mindful Machines",
  description: "A blog about software development, machine learning and life.",
  icons: ["/logo.svg"],
};

export default async function Page() {
  const articles = await getArticles();
  return (
    <div className="h-fit w-screen">
      <div className="max-w-2xl mx-auto flex flex-col gap-2 p-6">
        {articles.map((article) => {
          return (
            <Link key={article.slug} href={`/blog/${article.slug}`}>
              <div className="h-fit w-full rounded-box p-8 flex flex-col gap-8 prose hover:shadow-lg hover:-translate-y-2 bg-base-100 transition-all cursor-pointer">
                <div className="text-3xl font-bold line-clamp-2">
                  {article.title}
                </div>
                <div className=" line-clamp-3">{article.banner}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
