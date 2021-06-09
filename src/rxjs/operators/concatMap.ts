import { Uri } from "vscode";

import { template } from "../util/template";

export const concatMap = function(assetsPath: Uri): string {
  const title = 'concatMap';
  const docsUrl = 'https://rxjs.dev/api/operators/concatMap';
  const marbleDiagramPath = `${assetsPath}/images/concatMap.png`;
  const importExample = `import { concatMap } from 'rxjs/operators';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
 
const source$ = of('RxJS').pipe(concatMap(value => of(value + ' is awesome!')));
source$.subscribe(value => console.log(value));

// Output
// 'RxJS is awesome!'`;