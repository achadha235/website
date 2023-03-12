import { isNil } from "lodash";
import { useState } from "react";

export default function MDXComponent({
  importedModule,
}: {
  importedModule: Promise<any>;
}) {
  const [content, setContent] = useState<any>();
  importedModule.then((stuff: any) => {
    setContent(stuff);
  });
  if (isNil(content) || isNil(content.default)) {
    return null;
  }
  return <content.default />;
}
