import { Uri } from "vscode";

import { template } from "../util/template";

export const forkJoin = function(assetsPath: Uri): string {
  const title = 'forkJoin';
  const docsUrl = 'https://rxjs.dev/api/function/forkJoin';
  const marbleDiagramPath = `${assetsPath}/images/forkJoin.png`;
  const importExample = `import { forkJoin } from 'rxjs';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { forkJoin, of } from 'rxjs';

const source1$ = of(1, 2, 3);
const source2$ = of('a', 'b', 'p');
const source3$ = of('m', 'n', 'o');

const result$ = forkJoin([source1$, source2$, source3$]);
result$.subscribe(value => console.log(value));

// Output
// [3, 'p', '0']`;
