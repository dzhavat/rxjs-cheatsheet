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
			<h1 class="center">RxJS Cheatsheet</h1>

			<h2 class="center">Creation Functions</h2>

			<div class="row">
				<h2>concat (<a href="https://rxjs.dev/api/index/function/concat" target="_blank">Docs</a>)</h2>

				<h3>How to use</h3>
				<pre><code>import { concat } from 'rxjs';</code></pre>

				<h3>Marble diagram</h3>
				<img src="${imagesPath}/concat.png" alt="Marble diagram" />
			</div>

			<div class="row">
				<h2>from (<a href="https://rxjs.dev/api/index/function/from" target="_blank">Docs</a>)</h2>

				<h3>How to use</h3>
				<pre><code>import { from } from 'rxjs';</code></pre>

				<h3>Marble diagram</h3>
				<img src="${imagesPath}/from.png" alt="Marble diagram" />
			</div>

			<div class="row">
				<h2>fromEvent (<a href="https://rxjs.dev/api/index/function/fromEvent" target="_blank">Docs</a>)</h2>

				<h3>How to use</h3>
				<pre><code>import { fromEvent } from 'rxjs';</code></pre>

				<h3>Marble diagram</h3>
				<img src="${imagesPath}/fromEvent.png" alt="Marble diagram" />
			</div>

			<div class="row">
				<h2>merge (<a href="https://rxjs.dev/api/index/function/merge" target="_blank">Docs</a>)</h2>

				<h3>How to use</h3>
				<pre><code>import { merge } from 'rxjs';</code></pre>

				<h3>Marble diagram</h3>
				<img src="${imagesPath}/merge.png" alt="Marble diagram" />
			</div>

			<div class="row">
				<h2>of (<a href="https://rxjs.dev/api/index/function/of" target="_blank">Docs</a>)</h2>

				<h3>How to use</h3>
				<pre><code>import { of } from 'rxjs';</code></pre>

				<h3>Marble diagram</h3>
				<img src="${imagesPath}/of.png" alt="Marble diagram" />
			</div>

			<h2 class="center">Operators</h2>

			<div class="row">
				<h2>filter (<a href="https://rxjs.dev/api/operators/filter" target="_blank">Docs</a>)</h2>

				<h3>How to use</h3>
				<pre><code>import { filter } from 'rxjs/operators';</code></pre>

				<h3>Marble diagram</h3>
				<img src="${imagesPath}/filter.png" alt="Marble diagram" />
			</div>

			<div class="row">
				<h2>map (<a href="https://rxjs.dev/api/operators/map" target="_blank">Docs</a>)</h2>

				<h3>How to use</h3>
				<pre><code>import { map } from 'rxjs/operators';</code></pre>

				<h3>Marble diagram</h3>
				<img src="${imagesPath}/map.png" alt="Marble diagram" />
			</div>

			<div class="row">
				<h2>tap (<a href="https://rxjs.dev/api/operators/tap" target="_blank">Docs</a>)</h2>

				<h3>How to use</h3>
				<pre><code>import { tap } from 'rxjs/operators';</code></pre>

				<h3>Marble diagram</h3>
				<img src="${imagesPath}/tap.png" alt="Marble diagram" />
			</div>
		</main>
		<footer>
			<p>The cheatsheet is based on v6.5.5.</p>
		</footer>
	</body>
</html>
`;
}
