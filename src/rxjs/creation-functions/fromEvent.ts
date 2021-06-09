import { Uri } from "vscode";

import { template } from "../util/template";

export const fromEvent = function(assetsPath: Uri): string {
  const title = 'fromEvent';
  const docsUrl = 'https://rxjs.dev/api/function/fromEvent';
  const marbleDiagramPath = `${assetsPath}/images/fromEvent.png`;
  const importExample = `import { fromEvent } from 'rxjs';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { fromEvent } from 'rxjs';

const source$ = fromEvent(document, 'click');
source$.subscribe(value => console.log(event));

// Output
// 'MouseEvent' object logged on every click`;
