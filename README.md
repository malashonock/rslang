## Используемые библиотеки 

1 **React** — библиотека для разработки пользовательских интерфейсов; основополагающая технология для данного приложения.  

2 **create-react-app** — пакет для разворачивания шаблонного React-приложения с подключением базовых зависимостей (включая babel и typescript) и структурой проекта.  

3 **Formik** — библиотека для работы с формами, которая упрощает получение данных из формы, валидацию данных, вывод сообщений об ошибках и др.; использовали для реализации sign-up/sign-in формы  

4 **Yup**— библиотека для упрощения валидации моделей, используемых функционалом аутентификации.  

5 **Redux и Redux Toolkit** — инструментарий для управления глобальным состоянием приложения (вообще и React-приложения в частности); подключали для управления состоянием авторизации и состоянием словаря (какие страницы полностью изучены).  

6 **React Router** – стандартная библиотека для маршрутизации в React-приложениях; использовали для реализации  
SPA-парадигмы: в главном навигационном меню; также на привязке к url основана навигация по словарю и подбор слов для мини-игр.  

7 **Bootstrap и React Bootstrap** – основной CSS-фреймворк и основная библиотека UI-компонентов для данного приложения.  

8 **MUI** – адаптация Material Design под React;
использовалась для разработки sign-up/sign-in формы, а также для пагинации в словаре; подключение MUI было обусловлено ограниченностью функционала Bootstrap-библиотеки в определенных задачах.  

9 **Axios** – HTTP-клиент для браузера и node.js на основе Promise; был использован в качестве замены для штатного Fetch API.  

10 **Chart.js** — библиотека для создания графиков и диаграмм; использовался для построения дашборда с краткосрочной статистикой и графиков с долгосрочной статистикой.  

11 **MomentJS** — библиотека для упрощения работы с датой и временем в JS; использовалась при построении визуализаций для раздела Статистика.  

---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
