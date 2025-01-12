## ПРОЕКТ СОЗДАН С ЦЕЛЬЮ ОПИСАТЬ ПРОЦЕСС СОЗДАНИЯ КОНФИГУРАЦИИ ##

## Для инициализации webpack ## 

# Запустите следующие команды  #
```
    npm install --save-dev webpack wepback-cli webpack-dev-server
```

#  Чтобы добавить ts в ваш проект необходимо установить # 
-typescript
-типы для использования,
-лоудеры для WebPack 
-настроить tsconfig.json

#  Лоудеры : #
 - ts-loader
 - babel-loader _ (Так же необходимо будет настроить babel.config.mjs для использования) _

# Для установки typescript  #
```
    npm install --save-dev typescript ts-node
```

#  Для установки типов для использования  #
```
    npm install --save-dev @types/webpack @types/webpack-dev-server

```
_ Если используете реакт_
``` 
    npm install --save-dev @types/react @types/react-dom
```

#  Для установки лоудеров  #
```
    npm install --save-dev ts-loader // ts-loader по-умолчанию обрабатывает tsx файлы
```
```
    npm install --save-dev babel-loader
```

# Конфигурация babel выглядит следующим образом #
```
    module.exports = {
        presets: [
            '@babel/preset-typescript',
            '@babel/preser-react'
        ]
    }
```

#  Базовая настройка tsconfig.json  #
```
    {
        compilerOptions: {
            "jsx": "react-jsx", // Чтобы не импортировать реакт в каждый модуль
            "target": "ES6", // Версия JS 
            "module": "commonJs", // как импортировать модули
            "baseUrl": "./src", // точка входа в приложение
            "lib": ["ES6", "DOM", "DOM.Iterable"], // Подключенные библиотеки
        }
        "include": ["src"] // обрабатываемые пути
        "exclude": ["node_modules"], // необрабатываемы пути
    }

    "ts-node": {
        compilerOptions: {
            "module": "commonJS", // как работать с тс в конфигурации webpack
        }
    }
```

#  Для обработки Scss/Sass/Css файлов необходимо установить соответвующие лоудеры  #
```
    npm install --save-dev sass-loader css-loader style-loader
```
Вместо style-loader можно установить _ MiniCssExtractPlugin _ и использовать MiniCssExtractPlugin.loader


## Установка линтера ##
```
    npm init @eslint/config@latest
```
 Команда создаст файл конфигурации линтера eslint.config.mjs 
Дополним файл следующими правилами
```
    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "no-console: "warn,
        }
    }
```

## Husky - инструмент(Git hook), которые позволяет запускать команды до создания коммита  ##

  Для его установки  
```
    npx husky init
    npm install line-staged 
```
Что создаст директорию .husky и файл pre-commit, скрипт которые будет исполняться до коммита.
    В нем необходимо указать команды которые будут запускаться
    ``` npm run lint ```

_ А также необходимо расширить настройки package.json или создать файл конфигурации _

package.json
```
    "line-staged: {
        ".tsx|.ts": [],
    }
```
Описать какие именно файлы будут прогоняться через линтер