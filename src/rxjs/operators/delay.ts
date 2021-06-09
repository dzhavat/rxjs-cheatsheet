import { Uri } from "vscode";

import { template } from "../util/template";

export const delay = function(assetsPath: Uri): string {
  const title = 'delay';
  const docsUrl = 'https://rxjs.dev/api/operators/delay';
  const marbleDiagramPath = `${assetsPath}/images/delay.png`;
  const importExample = `import { delay } from 'rxjs/operators';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const source$ = of(['a', 'b']).pipe(delay(1000));
source$.subscribe(value => console.log(value));

// Output
// ['a', 'b'] after 1 second`;