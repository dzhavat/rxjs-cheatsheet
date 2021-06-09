import { Uri } from "vscode";

import { template } from "../util/template";

export const mergeMap = function(assetsPath: Uri): string {
  const title = 'mergeMap';
  const docsUrl = 'https://rxjs.dev/api/operators/mergeMap';
  const marbleDiagramPath = `${assetsPath}/images/mergeMap.png`;
  const importExample = `import { mergeMap } from 'rxjs/operators';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
 
const source$ = of('RxJS').pipe(mergeMap(value => of(value + ' is awesome!')));
source$.subscribe(value => console.log(value));

// Output
// 'RxJS is awesome!'`;