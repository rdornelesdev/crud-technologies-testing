# Imagem oficial do Node como base - alpine é o Alpine Linux
FROM node:18-alpine

#instala o cliente psql que o script wait-for-it precisa pra funcionar
RUN apk add --no-cache postgresql-client

# Diretório de trabalho do conteiner
WORKDIR /usr/src/app

# Copia os arquivos de dependências e instala
COPY package*.json ./
RUN npm install

# Copia todo o código do projeto para o diretorio de trabalho 
COPY . .

# Comando para rodar as migrações e depois iniciar a aplicação
CMD [ "npm", "run", "dev" ]