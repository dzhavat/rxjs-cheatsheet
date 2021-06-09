import { Uri } from "vscode";

import { template } from "../util/template";

export const of = function(assetsPath: Uri): string {
  const title = 'of';
  const docsUrl = 'https://rxjs.dev/api/function/of';
  const marbleDiagramPath = `${assetsPath}/images/of.png`;
  const importExample = `import { of } from 'rxjs';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { of } from 'rxjs';

const source$ = of(1, 2, 3);
source$.subscribe(value => console.log(value));

// Output
// 1
// 2
// 3`;
