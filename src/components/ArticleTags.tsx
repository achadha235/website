export default function ArticleTags({ tags }) {
  return (
    <div className="flex gap-2 my-2 max-w-screen flex-wrap">
      {tags.map((tag) => {
        return (
          <div key={tag} className="p-2 text-sm px-4 badge badge-primary h-8">
            {tag}
          </div>
        );
      })}
    </div>
  );
}
