# 🧠 Extensão VSCode: Compile e Execute Arquivos C

Esta extensão permite **compilar** e **executar** arquivos `.c` diretamente do Visual Studio Code com um clique, usando `gcc`.

---

## ✅ Funcionalidades

- 📥 Compila o arquivo `.c` atual (comando: Build C)
- 🚀 Compila e executa o `.c` atual em um terminal externo do Windows (comando: Run C)
- ❌ Mostra erros de compilação direto no VSCode

---

## 🧪 Requisitos

- **GCC instalado**  
  Instale o [MinGW](http://www.mingw.org/) ou use o WSL com gcc.  
  No terminal, verifica com: `gcc --version`

---

## 💾 Instalação da Extensão (Modo Dev)

1. Clone o repositório: `git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo`

2. Abre o projeto no VSCode: `code .`

3. Pressiona F5 ou vai em Run > Start Debugging pra abrir uma nova janela do VSCode com a extensão carregada.

4. Abre um arquivo `.c` e pressiona `Ctrl+Shift+P`, digita:
- Run C → compila e executa
- Build C → só compila

---

## 📁 Estrutura do projeto
```
.
├── extension.js # Código principal da extensão
├── package.json # Metadata da extensão VSCode
├── .gitignore # Arquivos ignorados no Git
├── README.md # Esse arquivo
```
---

## 🚧 Observações

- Testado só no Windows, pois usa `start cmd /c` pra abrir o executável.
- Futuramente planejo suporte para Linux e Mac.

---

