# Вибір базового образу
FROM mcr.microsoft.com/playwright:v1.44.1-focal

# Встановлення робочої директорії
WORKDIR /app

# Копіювання package.json та package-lock.json
COPY package*.json ./

# Встановлення залежностей
RUN npm install

# Копіювання решти файлів проекту
COPY . .

# Встановлення TypeScript
RUN npm install -g typescript

# Вказання команди для запуску тестів
CMD ["npm", "test", "--config=playwright.config.ts"]

