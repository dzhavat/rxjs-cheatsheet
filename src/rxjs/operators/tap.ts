import { Uri } from "vscode";

import { template } from "../util/template";

export const tap = function(assetsPath: Uri): string {
  const title = 'tap';
  const docsUrl = 'https://rxjs.dev/api/operators/tap';
  const marbleDiagramPath = `${assetsPath}/images/tap.png`;
  const importExample = `import { tap } from 'rxjs/operators';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

const source$ = of(1, 2, 3).pipe(tap(value => console.log(value)));
source$.subscribe();

// Output
// 1
// 2
// 3`;