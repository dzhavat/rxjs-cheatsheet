import { Uri } from "vscode";

import { template } from "../util/template";

export const concat = function(assetsPath: Uri): string {
  const title = 'concat';
  const docsUrl = 'https://rxjs.dev/api/function/concat';
  const marbleDiagramPath = `${assetsPath}/images/concat.png`;
  const importExample = `import { concat } from 'rxjs';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { concat, of } from 'rxjs';

const source1$ = of('a', 'b');
const source2$ = of('x', 'y');

const result$ = concat(source1$, source2$);
result$.subscribe(value => console.log(value));

// Output
// 'a'
// 'b'
// 'x'
// 'y'`;
