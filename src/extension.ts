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

		const stylePath = styleRoot.with({ scheme: 'vscode-resource' });
		const imagesPath = imagesRoot.with({ scheme: 'vscode-resource' });

		panel.webview.html = getWebviewContent(stylePath, imagesPath);
	});

	context.subscriptions.push(disposableCommand);
}

export function deactivate() {}
