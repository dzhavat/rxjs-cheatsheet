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
			<div class="container">
				<h1>RxJS Cheatsheet</h1>

			</div>
		</main>	
	</body>
</html>
`;
}
