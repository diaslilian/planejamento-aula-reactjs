## Instalação do Node.js

---

### Fazer o download

Acesse o site oficial do [Node.js](https://nodejs.org)

---

### Instalar via terminal

- Debian/Ubuntu

Atualizar lista de pacotes:

```bash
 sudo apt update
```

Instalar o Node.js e o npm:

```bash
 sudo apt install nodejs npm
```

Verifique se a instalação foi bem-sucedida:

```bash
 node --version
 npm --version
```

- macOS

Instale o Homebrew (gerenciador de pacotes para macOS) se ainda não estiver instalado:

```bash
 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Instale o Node.js e o npm usando o Homebrew:

```bash
 brew install node
```

Verifique se a instalação foi bem-sucedida:

```bash
 node --version
 npm --version
```
