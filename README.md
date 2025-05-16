# Extensão VSCode para Compilar e Executar Código C

Essa extensão permite compilar e executar arquivos `.c` no Windows usando GCC direto do VSCode.

## Requisitos

- Visual Studio Code instalado
- GCC instalado e configurado no PATH (ex: MinGW)

## Como baixar e instalar

1. Baixe o arquivo `.vsix` desta extensão diretamente aqui:

[Download do run-compilerc-0.0.3.vsix](https://github.com/r7melo/run-compilerc/blob/releases/run-compilerc-0.0.3.vsix)

2. Instale a extensão no VSCode com o comando no terminal:

```bash
code --install-extension run-compilerc-0.0.3.vsix
```

# Como usar a extensão run-compilerc

1. Abra um arquivo `.c` no VSCode.

2. Escolha um dos comandos:

   - `Ctrl+F9` — compila e executa o arquivo aberto.
   - `Ctrl+F10` — compila somente o arquivo aberto.

4. O executável `.exe` será gerado na mesma pasta do arquivo fonte.
