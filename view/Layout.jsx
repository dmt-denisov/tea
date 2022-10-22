/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <script defer src="https://api-maps.yandex.ru/2.1/?apikey=6afba4e3-37f7-4865-be73-89f8b5426c22&lang=ru_RU" />
        <script defer src="/js/map.js" />
        <script defer src="/js/addCom.js" />
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
