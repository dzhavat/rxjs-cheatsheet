import { Uri } from "vscode";

import { template } from "../util/template";

export const from = function(assetsPath: Uri): string {
  const title = 'from';
  const docsUrl = 'https://rxjs.dev/api/function/from';
  const marbleDiagramPath = `${assetsPath}/images/from.png`;
  const importExample = `import { from } from 'rxjs';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { from } from 'rxjs';

const source$ = from([10, 20, 30]);
source$.subscribe(value => console.log(value));

// Output
// 10
// 20
// 30`;