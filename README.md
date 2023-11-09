# Currency converter

This site is a simple currency converter with 3 currencies to choose from.

Check the site [**here**](https://kvasir124.github.io/currency-converter-react/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies
* HTML
* CSS
  * BEM naming convention
  * Normalize.css
* Javascript
  * ES6+ features
  * create-react-app
    * Webpack
    * ESLint
    * Babel, etc.
  * Asynchronous
    * setInterval

## Site functionality
![converter-use](https://github.com/Kvasir124/currency-converter/assets/141030238/824fea5a-12ec-4087-9a66-47ee2164813d)

The site maintains basic reactivity and handles small screens well. The whole converter is fit inside a form. The user may choose a custom amount of currency (must be >0;  the minimal step is 0,01) and choose both the input and output currency. Conversion happens upon submitting the form. Exchange rates are stored in nested objects. The chosen amount of currency is then multiplied by the determined exchange rate and shown to the user in the box below the submit button.

# React.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
