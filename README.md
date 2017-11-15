# ph-react
A template project for getting started with React

## Prerequesites
You must have NPM installed.

## Setup
After cloning or downloading this project, run this command from the project directory:

`npm install`

This will install all necessary packages from npm. 

## Getting started
Write your React components in the directory `src`. There are already two files present there:

- `main.jsx` - This is the entry file for webpack, it renders the React code to the DOM. It is recommended to leave this file untouched.
- `App.jsx` - A basic React component in arrow-function form.

To transpile the react code, run:

`npm run build`

View the result by opening `public/index.html` in the browser

## Hot reloading
You can view changes you make to your React components immediately in the browser by using hot-reload. To do this, run the command:

`npm run dev`

Then open the browser at the address speciefied in the console (look for `Project is running at...`)
