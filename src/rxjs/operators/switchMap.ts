import { Uri } from "vscode";

import { template } from "../util/template";

export const switchMap = function(assetsPath: Uri): string {
  const title = 'switchMap';
  const docsUrl = 'https://rxjs.dev/api/operators/switchMap';
  const marbleDiagramPath = `${assetsPath}/images/switchMap.png`;
  const importExample = `import { switchMap } from 'rxjs/operators';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
 
const source$ = of('RxJS').pipe(switchMap(value => of(value + ' is awesome!')));
source$.subscribe(value => console.log(value));

// Output
// 'RxJS is awesome!'`;
