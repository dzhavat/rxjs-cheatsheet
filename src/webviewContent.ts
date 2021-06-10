import { Uri } from "vscode";

import * as rxjs from './rxjs';

export function getWebviewContent(cspSource: string, assetsPath: Uri): string {
	return /*html*/`
		<!doctype html>
		<html lang="en">
			<head>
				<meta charset="utf-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${cspSource}; img-src ${cspSource}; script-src ${cspSource}">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">

				<title>RxJS Cheatsheet</title>

				<link href="${assetsPath}/style/custom.css" rel="stylesheet">
				<link href="${assetsPath}/style/prism.css" rel="stylesheet">
			</head>

			<body>
				<main id="top">
					<h1 class="center"><span class="rxjs">RxJS</span> Cheatsheet</h1>
					<p class="center">Valid for v6.5.0+ and v7.0.0+</p>

					<section class="toc">
						<h3>Creation Functions</h3>
						<nav>
							<ul>
								<li><a href="#concat" title="concat">concat</a></li>
								<li><a href="#forkJoin" title="forkJoin">forkJoin</a></li>
								<li><a href="#from" title="from">from</a></li>
								<li><a href="#fromEvent" title="fromEvent">fromEvent</a></li>
								<li><a href="#merge" title="merge">merge</a></li>
								<li><a href="#of" title="of">of</a></li>
							</ul>
						</nav>

						<h3>Operators</h3>					
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
					</section>

					<section>
						<h2>Creation Functions</h2>

						<article id="concat" class="row">
							${rxjs.concat(assetsPath)}
						</article>

						<article id="forkJoin" class="row">
							${rxjs.forkJoin(assetsPath)}
						</article>

						<article id="from" class="row">
							${rxjs.from(assetsPath)}
						</article>

						<article id="fromEvent" class="row">
							${rxjs.fromEvent(assetsPath)}
						</article>

						<article id="merge" class="row">
							${rxjs.merge(assetsPath)}
						</article>

						<article id="of" class="row">
							${rxjs.of(assetsPath)}
						</article>
					</section>

					<section>
						<h2>Operators</h2>

						<article id="concatMap" class="row">
							${rxjs.concatMap(assetsPath)}
						</article>

						<article id="delay" class="row">
							${rxjs.delay(assetsPath)}
						</article>

						<article id="filter" class="row">
							${rxjs.filter(assetsPath)}
						</article>

						<article id="map" class="row">
							${rxjs.map(assetsPath)}
						</article>

						<article id="mergeMap" class="row">
							${rxjs.mergeMap(assetsPath)}
						</article>

						<article id="switchMap" class="row">
							${rxjs.switchMap(assetsPath)}
						</article>

						<article id="take" class="row">
							${rxjs.take(assetsPath)}
						</article>

						<article id="tap" class="row">
							${rxjs.tap(assetsPath)}
						</article>
					</section>
				</main>

				<script src="${assetsPath}/js/prism.js"></script>
			</body>
		</html>
	`;
}
