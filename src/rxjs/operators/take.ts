import { Uri } from "vscode";

import { template } from "../util/template";

export const take = function(assetsPath: Uri): string {
  const title = 'take';
  const docsUrl = 'https://rxjs.dev/api/operators/take';
  const marbleDiagramPath = `${assetsPath}/images/take.png`;
  const importExample = `import { take } from 'rxjs/operators';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { of } from 'rxjs';
import { take } from 'rxjs/operators';

const source$ = of('a', 'b', 'c', 'd').pipe(take(2));
source$.subscribe(value => console.log(value));

// Output
// 'a'
// 'b'`;
