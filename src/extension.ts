import * as vscode from 'vscode';
import { join } from 'path';
import { getWebviewContent } from './webviewContent';

export function activate(context: vscode.ExtensionContext) {

	const disposableCommand = vscode.commands.registerCommand('rxjs.cheatsheet', () => {
		const assetsRoot = vscode.Uri.file(join(context.extensionPath, 'assets'));

		const panel = vscode.window.createWebviewPanel(
			'rxjsCheatsheet',
			'RxJS Cheatsheet',
			vscode.ViewColumn.Beside, {
				localResourceRoots: [
					assetsRoot,
				],
				enableScripts: true
			},
		);

		const assetsPath = panel.webview.asWebviewUri(assetsRoot);
		const cspSource = panel.webview.cspSource;

		panel.webview.html = getWebviewContent(cspSource, assetsPath);
	});

	context.subscriptions.push(disposableCommand);
}

export function deactivate() { }
