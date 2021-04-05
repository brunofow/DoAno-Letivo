<img src= "assets/Grupo20Banner.png">

#

<p align="center" >
  <a href="#-sobre-o-projeto" >Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias-utilizadas">Tecnologias</a> •
  <a href="#-como-executar-o-projeto">Como executar o projeto</a> •
  <a href="#-contribuidores">Contribuidores</a> 
</p>

# 🖥️ Sobre o projeto

<p>📕 DoAno Letivo - é uma forma dos pais que não possuem condições de comprar materiais para seus filhos, acharem pessoas dispostas a doar dinheiro ou material.</p>

<p>Projeto desenvolvido durante o Programa de Formação da Fcamara 2021.</p>
<br>

# ⚙️ Funcionalidades

- Donatários se cadastram na plataforma e podem:
  - [x] Cadastrar seus filhos para receberem doações
  - [x] Ver os filhos cadastrados na plataforma
- Doadores se cadastram na plataforma e podem:
  - [x] Listar estudantes, e escolher um para doar
  - [x] Fazer o pagamento da doação por pix

<br>

# 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Java][java]
- [ReactJs][react]

<br>
<br>

# 🚀 Como executar o projeto

Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:[Git][git],[Node.js][node] (para poder rodar os comandos utilizando o npm ou [Yarn][yarn]). Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode] para o front e para o back [Eclipse][eclipse], [IntelliJ][intellij] ou alguma IDE que rode Java.

### Você precisara executar comandos em duas pastas diferentes

```bash
#Clone este repositorio
$ git clone https://github.com/brunofow/DoAno-Letivo.git

#Dentro da pasta server execute o comando:
$ ./mvnw spring-boot:run

#Deixe o comando anterior rodando, abra outra janela no terminal depois vá para a pasta web e execute o comando:
$ npm install
ou
$ yarn install

#Execute a aplicação
$ npm start
ou
$ yarn start

#A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### O front-end espera um servidor na porta 8080, caso o servidor java, não inicie na porta 8080, basta alterar a porta no arquivo web/src/services/api.js

## 📈 É necessário algumas configurações para o banco de dados funcionar:
```
# crie um banco de dados postgres com o nome doano
spring.datasource.url=jdbc:postgresql://localhost:5432/doano

# coloque seu usuario do banco de dados
spring.datasource.username=seu_usuario

# coloque a sua senha do banco de dados
spring.datasource.password=sua_senha 
```

# ✅ Contribuidores

<table align="center" >
<tr>
<td align="center">
<img style="border-radius: 50%;" src="https://github.com/leandromendes25.png" width="100px"> <br> <a href="https://github.com/leandromendes25" >Leandro Mendes  <br></a>
<div align="center">
🎉✨😃 <br>
<a href="https://linkedin.com/in/leandro-mendes1568" >
<img src="https://img.shields.io/static/v1?label=Linkedin&message=leandro-mendes1568&color=0A66C2&style=for-the-badge&logo=linkedin"></a></div>
</td>
<td align="center">
<img style="border-radius: 50%;" src="https://github.com/brunofow.png" width="100px"> <br> <a href="https://github.com/brunofow"  al>Bruno Campos <br>
</a>
<div align="center">
🎉✨😃 <br>
<a href="https://linkedin.com/in/brunofow" >
<img src="https://img.shields.io/static/v1?label=Linkedin&message=brunofow&color=0A66C2&style=for-the-badge&logo=linkedin"></a></div>
</td>
<td align="center">
<img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQHzQRHDRc6beQ/profile-displayphoto-shrink_800_800/0/1605888709006?e=1623283200&v=beta&t=gaOPKxtaMrtj9Zb8CNTtSMzl87hCEyAvLyrZarxLC-U" width="100px"> <br> <a href="" >Bruna Oliveira<br></a>
<div align="center">
🎉✨😃 <br>
<a href="https://linkedin.com/in/inbruna" >
<img src="https://img.shields.io/static/v1?label=Linkedin&message=inbruna&color=0A66C2&style=for-the-badge&logo=linkedin"></a>
</div>
</td>
<td align="center">
<img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQEDw2kxLg1Qrw/profile-displayphoto-shrink_800_800/0/1616297651735?e=1623283200&v=beta&t=86m1Y7uXLVrnHN4nJaasAVJCzKsInfw3nm058bMpocA" width="100px"> <br> <a href="" >Maria Luisa<br></a>
<div align="center">
🎉✨😃 <br>
<a href="https://linkedin.com/in/marialuizabianchi" >
<img src="https://img.shields.io/static/v1?label=Linkedin&message=marialuizabianchi&color=0A66C2&style=for-the-badge&logo=linkedin"></a>
</div>
</td>
</tr>
</table>

[java]: https://www.java.com/pt-BR/
[yarn]: https://yarnpkg.com
[react]: https://pt-br.reactjs.org/
[vscode]: https://code.visualstudio.com/
[git]: https://git-scm.com/downloads
[node]: https://nodejs.org/en/
[eclipse]: https://www.eclipse.org/downloads/
[intellij]: https://www.jetbrains.com/pt-br/idea/download/#section=windows
