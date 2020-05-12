import { Uri } from "vscode";

export function getWebviewContent(stylePath: Uri, imagesPath: Uri) {
	return `<!doctype html>
	<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src vscode-resource:; img-src vscode-resource:;">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>RxJS Cheatsheet</title>

		<link rel="stylesheet" href="${stylePath}/custom.css">
	</head>

	<body>
		<main>
			<h1 class="center"><span class="rxjs">RxJS</span> Cheatsheet</h1>
			<p class="center">Based on v6.5.5.</p>

			<div class="toc">
				<h3>Jump to</h3>

				<div>Creation Functions</div>
				<nav>
					<ul>
						<li><a href="#concat" title="concat">concat</a></li>
						<li><a href="#from" title="from">from</a></li>
						<li><a href="#fromEvent" title="fromEvent">fromEvent</a></li>
						<li><a href="#merge" title="merge">merge</a></li>
						<li><a href="#of" title="of">of</a></li>
					</ul>
				</nav>

				<div>Operators</div>					
				<nav>
					<ul>
						<li><a href="#concatMap" title="concatMap">concatMap</a></li>
						<li><a href="#delay" title="delay">delay</a></li>
						<li><a href="#filter" title="filter">filter</a></li>
						<li><a href="#map" title="map">map</a></li>
						<li><a href="#mergeMap" title="mergeMap">mergeMap</a></li>
						<li><a href="#switchMap" title="switchMap">switchMap</a></li>
						<li><a href="#take" title="take">take</a></li>
						<li><a href="#tap" title="tap">tap</a></li>
					</ul>
				</nav>
			</div>

			<section>
				<h2>Creation Functions</h2>

				<div class="row">
					<h2 id="concat">concat (<a href="https://rxjs.dev/api/index/function/concat" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { concat } from 'rxjs';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/concat.png" alt="Marble diagram" />
				</div>

				<div id="from" class="row">
					<h2>from (<a href="https://rxjs.dev/api/index/function/from" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { from } from 'rxjs';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/from.png" alt="Marble diagram" />
				</div>

				<div id="fromEvent" class="row">
					<h2>fromEvent (<a href="https://rxjs.dev/api/index/function/fromEvent" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { fromEvent } from 'rxjs';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/fromEvent.png" alt="Marble diagram" />
				</div>

				<div id="merge" class="row">
					<h2>merge (<a href="https://rxjs.dev/api/index/function/merge" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { merge } from 'rxjs';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/merge.png" alt="Marble diagram" />
				</div>

				<div id="of" class="row">
					<h2>of (<a href="https://rxjs.dev/api/index/function/of" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { of } from 'rxjs';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/of.png" alt="Marble diagram" />
				</div>
			</section>

			<section>
				<h2>Operators</h2>

				<div id="concatMap" class="row">
					<h2>concatMap (<a href="https://rxjs.dev/api/operators/concatMap" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { concatMap } from 'rxjs/operators';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/concatMap.png" alt="Marble diagram" />
				</div>

				<div id="delay" class="row">
					<h2>delay (<a href="https://rxjs.dev/api/operators/delay" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { delay } from 'rxjs/operators';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/delay.png" alt="Marble diagram" />
				</div>

				<div id="filter" class="row">
					<h2>filter (<a href="https://rxjs.dev/api/operators/filter" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { filter } from 'rxjs/operators';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/filter.png" alt="Marble diagram" />
				</div>

				<div id="map" class="row">
					<h2>map (<a href="https://rxjs.dev/api/operators/map" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { map } from 'rxjs/operators';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/map.png" alt="Marble diagram" />
				</div>

				<div id="mergeMap" class="row">
					<h2>mergeMap (<a href="https://rxjs.dev/api/operators/mergeMap" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { mergeMap } from 'rxjs/operators';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/mergeMap.png" alt="Marble diagram" />
				</div>

				<div id="switchMap" class="row">
					<h2>switchMap (<a href="https://rxjs.dev/api/operators/switchMap" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { switchMap } from 'rxjs/operators';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/switchMap.png" alt="Marble diagram" />
				</div>

				<div id="take" class="row">
					<h2>take (<a href="https://rxjs.dev/api/operators/take" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { take } from 'rxjs/operators';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/take.png" alt="Marble diagram" />
				</div>

				<div id="tap" class="row">
					<h2>tap (<a href="https://rxjs.dev/api/operators/tap" target="_blank">Docs</a>)</h2>

					<h3>How to import</h3>
					<pre><code>import { tap } from 'rxjs/operators';</code></pre>

					<h3>Marble diagram</h3>
					<img src="${imagesPath}/tap.png" alt="Marble diagram" />
				</div>
			</section>
		</main>
	</body>
</html>
`;
}
