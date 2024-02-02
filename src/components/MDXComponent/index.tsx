import clsx from "clsx";
import { isNil } from "lodash";
import { useEffect, useState } from "react";

export default function MDXComponent({
  importedModule,
  className = "",
}: {
  className?: string;
  importedModule: Promise<any>;
}) {
  const [content, setContent] = useState<any>();
  useEffect(() => {
    importedModule.then((stuff: any) => {
      setContent(stuff);
    });
  }, []);

  if (isNil(content) || isNil(content.default)) {
    return null;
  }
  return (
    <div className={clsx("prose prose-xl", className)}>
      <content.default />
    </div>
  );
}
