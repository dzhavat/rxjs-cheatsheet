import { Uri } from "vscode";

import { template } from "../util/template";

export const filter = function(assetsPath: Uri): string {
  const title = 'filter';
  const docsUrl = 'https://rxjs.dev/api/operators/filter';
  const marbleDiagramPath = `${assetsPath}/images/filter.png`;
  const importExample = `import { filter } from 'rxjs/operators';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

const source$ = of(1, 2, 3, 4).pipe(filter(value => value % 2 === 1));
source$.subscribe(value => console.log(value));

// Output
// 1
// 3`;