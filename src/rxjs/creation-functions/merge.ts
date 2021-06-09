import { Uri } from "vscode";

import { template } from "../util/template";

export const merge = function(assetsPath: Uri): string {
  const title = 'merge';
  const docsUrl = 'https://rxjs.dev/api/function/merge';
  const marbleDiagramPath = `${assetsPath}/images/merge.png`;
  const importExample = `import { merge } from 'rxjs';`;

  return template({ title, docsUrl, marbleDiagramPath, importExample, usageExample });
};

const usageExample = `import { merge, interval } from 'rxjs';
import { take } from 'rxjs/operators';
 
const timer1$ = interval(1000).pipe(take(4));
const timer2$ = interval(2000).pipe(take(4));

const result$ = merge(timer1$, timer2$);
result$.subscribe(value => console.log(value));

// Output
// timer1$ | timer2$ | Timeline
//                       0s
//    0                    1s
//              0            2s
//    1                      2s
//    2                        3s
//              1                4s
//    3                          4s
//                                 5s
//              2                    6s
//                                     7s
//              3                        8s`;
