import * as vscode from 'vscode';
import { join } from 'path';
import { getWebviewContent } from './webviewContent';

export function activate(context: vscode.ExtensionContext) {

	const disposableCommand = vscode.commands.registerCommand('rxjs.cheatsheet', () => {
		const styleRoot = vscode.Uri.file(join(context.extensionPath, 'style'));
		const imagesRoot = vscode.Uri.file(join(context.extensionPath, 'images'));

		const panel = vscode.window.createWebviewPanel(
			'rxjsCheatsheet',
			'RxJS Cheatsheet',
			vscode.ViewColumn.Beside, {
				localResourceRoots: [
					styleRoot,
					imagesRoot
				]
			}
		);

		const stylePath = panel.webview.asWebviewUri(styleRoot);
		const imagesPath = panel.webview.asWebviewUri(imagesRoot);
		const cspSource = panel.webview.cspSource;

		panel.webview.html = getWebviewContent(cspSource, stylePath, imagesPath);
	});

	context.subscriptions.push(disposableCommand);
}

export function deactivate() {}
