const vscode = require('vscode');
const cp = require('child_process');
const path = require('path');

function activate(context) {
  
  let runDisposable = vscode.commands.registerCommand('extension.runCompileRC', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('Abra um arquivo C para compilar e executar.');
      return;
    }

    const filePath = editor.document.fileName;
    const fileDir = path.dirname(filePath);
    const fileName = path.basename(filePath, '.c');
    const exeName = `${fileName}.exe`;
    const exePath = path.join(fileDir, exeName);

    const compileCmd = `gcc "${filePath}" -o "${exePath}"`;

    vscode.window.showInformationMessage('Compilando e executando...');

    cp.exec(compileCmd, (err, stdout, stderr) => {
      if (err) {
        vscode.window.showErrorMessage(`Erro na compilação:\n${stderr}`);
        return;
      }

      // Executa em janela CMD externa que fecha automaticamente ao terminar
      const runCmd = `start cmd /c "${exePath}"`;
      cp.exec(runCmd);
    });
  });

  let buildDisposable = vscode.commands.registerCommand('extension.buildCompileRC', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('Abra um arquivo C para compilar.');
      return;
    }

    const filePath = editor.document.fileName;
    const fileDir = path.dirname(filePath);
    const fileName = path.basename(filePath, '.c');
    const exeName = `${fileName}.exe`;
    const exePath = path.join(fileDir, exeName);

    const compileCmd = `gcc "${filePath}" -o "${exePath}"`;

    vscode.window.showInformationMessage('Compilando...');

    cp.exec(compileCmd, (err, stdout, stderr) => {
      if (err) {
        vscode.window.showErrorMessage(`Erro na compilação:\n${stderr}`);
        return;
      }
      vscode.window.showInformationMessage(`Compilação concluída. Executável: ${exePath}`);
    });
  });

  context.subscriptions.push(runDisposable);
  context.subscriptions.push(buildDisposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
