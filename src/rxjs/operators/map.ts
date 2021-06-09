import { Uri } from "vscode";

import { template } from "../util/template";

export const map = function(assetsPath: Uri): string {
  const title = 'map';
  const docsUrl = 'https://rxjs.dev/api/operators/map';
  const marbleDiagramPath = `${assetsPath}/images/map.png`;
  const importExample = `import { map } from 'rxjs/operators';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = of(1, 2, 3).pipe(map(value => value * 10));
source$.subscribe(value => console.log(value));

// Output
// 10
// 20
// 30`;