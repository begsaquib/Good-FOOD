# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## REACT POINTS TO REMEMBER


# parcel(Benifits of parcel /remember these for interviews )[
-Dev Build
-Local server
-HMR -- HOT ModuLe Replacement
-File watchimg algorithm // written in c++
-Caching - faster build
-IMAGE OPTIMIZATION
-MINIFICATION
-Bundling
-Compress
-consistent hashing
-code splitting
-differential bundling --support older browser
-diagnostic
-error handling
-https
-tree shaking function-remove unused code 
-different dev and production bundles
]


# STRUCTURE OF APP[

/*
* header
*-logo
*-nav-items
* Body
*-compose the main data
* footer
*-it comprises of copywrite and contact details and all right reserve
*/
]

two types of routing are there 
*firstly, server side Routing
*Secondly, Client side Routimg


//NEVER UPDATE YOUR STATE VARIABLE DIRECTLY




/**
*   Parent constructor 
*    -Parent Render
*         -Firstchild constructor
*            -Firstchild Render
*
*         -Secondchild constructor
*            -Secondchild Render
*
*            <DOM updated in a single batch>
*         -Firstchild  componentDidMount 
*         -Secondchild componentDidMount 
*  Parent componentDidMount 
*
*
**/



# Redux Toolkit
* Install @reduxjs/toolkit and react-redux
* build our store
* connect our store the app
* cart (cartslice)
* dispatch(action)
* Selector