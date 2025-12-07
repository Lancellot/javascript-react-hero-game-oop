# javascript-react-hero-game-oop
Este projeto foi desenvolvido como parte do desafio "Escrevendo as Classes de um Jogo" da DIO, onde o objetivo é criar uma classe genérica que represente heróis de uma aventura, utilizando os conceitos fundamentais de programação orientada a objetos.

# ⚔️ Desafio DIO - Escrevendo as Classes de um Jogo

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Projeto desenvolvido para o bootcamp da Digital Innovation One (DIO)**

[🎮 Ver Demo](#) | [📝 Sobre](#sobre) | [🚀 Como Usar](#como-usar)

</div>

---

## 📋 Sobre

Este projeto foi desenvolvido como parte do desafio **"Escrevendo as Classes de um Jogo"** da DIO, onde o objetivo é criar uma classe genérica que represente heróis de uma aventura, utilizando os conceitos fundamentais de programação orientada a objetos.

### 🎯 Objetivo do Desafio

Criar uma classe `Heroi` que possua:
- ✅ Propriedades: `nome`, `idade`, `tipo`
- ✅ Método `atacar()` que exibe mensagens personalizadas
- ✅ Diferentes tipos de ataque conforme a classe do herói

---

## 🎮 Classes de Heróis

| Classe | Ataque | Ícone |
|--------|--------|-------|
| 🗡️ **Guerreiro** | Usou espada | ⚔️ |
| 🔮 **Mago** | Usou magia | ✨ |
| 🥋 **Monge** | Usou artes marciais | 👊 |
| ⭐ **Ninja** | Usou shuriken | 🌟 |

---

## 💻 Tecnologias Utilizadas

- **JavaScript ES6+**
  - Classes e Objetos
  - Métodos e Construtores
  - Switch/Case
- **React**
  - Hooks (useState)
  - Componentes Funcionais
  - Gerenciamento de Estado
- **Tailwind CSS**
  - Design Responsivo
  - Animações
  - Gradientes
- **Lucide React**
  - Ícones SVG

---

## 🏗️ Estrutura do Código

### Classe Heroi

```javascript
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    
    switch(this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque';
    }
    
    return `o ${this.tipo} atacou usando ${ataque}`;
  }
}
```

### Exemplo de Uso

```javascript
// Criando heróis
const heroi1 = new Heroi('Arthas', 30, 'guerreiro');
const heroi2 = new Heroi('Gandalf', 150, 'mago');
const heroi3 = new Heroi('Bruce Lee', 32, 'monge');
const heroi4 = new Heroi('Naruto', 17, 'ninja');

// Executando ataques
console.log(heroi1.atacar()); // o guerreiro atacou usando usou espada
console.log(heroi2.atacar()); // o mago atacou usando usou magia
console.log(heroi3.atacar()); // o monge atacou usando usou artes marciais
console.log(heroi4.atacar()); // o ninja atacou usando usou shuriken
```

---

## 🚀 Como Usar

### Pré-requisitos

- Node.js instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/desafio-dio-herois.git

# Entre no diretório
cd desafio-dio-herois

# Instale as dependências
npm install

# Execute o projeto
npm start
```

---

## ✨ Funcionalidades

- ✅ Criação de heróis com nome, idade e tipo
- ✅ Sistema de ataques personalizado por classe
- ✅ Interface visual interativa
- ✅ Gerenciamento de múltiplos heróis
- ✅ Feedback visual com animações
- ✅ Design responsivo para mobile e desktop
- ✅ Validação de formulário

---

## 📸 Screenshots

### Tela Principal
Interface moderna com formulário de criação de heróis e lista de heróis criados.

### Sistema de Ataque
Cada herói possui seu ataque característico com feedback visual.

---

## 🎓 Conceitos Aplicados

### Programação Orientada a Objetos
- ✅ **Classes**: Estrutura base do Heroi
- ✅ **Objetos**: Instâncias de heróis criados
- ✅ **Métodos**: Função atacar()
- ✅ **Propriedades**: nome, idade, tipo
- ✅ **Encapsulamento**: Lógica interna da classe

### Estruturas de Programação
- ✅ **Variáveis**: Armazenamento de dados
- ✅ **Operadores**: Comparações e atribuições
- ✅ **Estruturas de Decisão**: Switch/Case, If/Else
- ✅ **Laços de Repetição**: Map para renderização
- ✅ **Funções**: Handlers de eventos

---

## 🎯 Desafios Superados

1. **Implementação da Classe**: Criar estrutura orientada a objetos
2. **Sistema de Ataques**: Lógica condicional para diferentes tipos
3. **Interface Interativa**: React + Tailwind para UX moderna
4. **Gerenciamento de Estado**: Múltiplos heróis simultâneos
5. **Validações**: Garantir integridade dos dados

---

## 📈 Melhorias Futuras

- [ ] Sistema de batalha entre heróis
- [ ] Níveis e experiência
- [ ] Inventário de itens
- [ ] Diferentes habilidades por classe
- [ ] Sistema de salvamento (localStorage)
- [ ] Animações de combate
- [ ] Sons e efeitos
- [ ] Modo multiplayer

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com 💜 por **[Assis]**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/assispiresneto)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lancellot)
[![DIO](https://img.shields.io/badge/DIO-0000FF?style=for-the-badge&logo=digital-ocean&logoColor=white)](https://www.dio.me/users/seu-usuario)

---

## 🙏 Agradecimentos

- [Digital Innovation One](https://www.dio.me/) pelo desafio
- Comunidade DIO pelo suporte
- Instrutores pelos ensinamentos

---

<div align="center">

**⭐ Se este projeto te ajudou, deixe uma estrela! ⭐**

**Feito com 💜 para a comunidade DIO**

</div>
