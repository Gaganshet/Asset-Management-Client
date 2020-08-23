# asset-management-server
For more details just refer  tutorials point

Steps to install and work with antd

1. first put npm install antd --save

2. npm install babel-plugin-import --save

3. and put these 2 lines in your .babelrc file separated by comma

{
   "presets":["env", "react"],
    "plugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
  ]
}

-------------------------------------------------------------------------------------------------------------------------------------------------------------
***********ERRORS AND DETAILED SOLUTIONS

1. gYou may need an appropriate loader to handle this file typeh with Webpack and CSS
For this put this line in your webpack.config.

         { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
for this ------ install style-loader and css-loader

2. "unexpected token = arrow function"  ->  npm install babel-plugin-transform-class-properties --save
   add this in webpackconfig query section of babel loader.
         plugins: ['transform-class-properties']
   
3. if use contructor then super is mandatory

		  constructor(props){
		    super(props);
		  }
		  
4. "regeneratorRuntime is not defined"

run npm install babel-polyfill --save-dev 
just follow this (https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined)

 even in webpack.config.js -------------- give entry as ------------- entry: ['babel-polyfill','./main.js'],
 and change the presets as ---------------presets: ['es2015', 'react'],
 
5.
-------------------------------------------------------------------------------------------------------------------------------------------------------------
************DEFINITIONS :		  
WEBPACK : Its a module bundler.This bundles all the js files together so that it can be used in browser. It has the capability to bundle, package or transform.
Its a command line tool which create bundles of js files which can be transmitted from server to client as a response.

BABEL : its a trasnplier.React uses JSX. So babel is used to convert JSX to Vanilla js. Sometimes ES6 is not understandable by all the browsers. But bable converts it into a code which is compatible to
other browsers.

REDUCER : This reducer is used to take the data from the backend and then to store the data in the store.

DELETING OPERATION: Its removing the unwanted element and re-rendering the component again.i.e. we can delete the content by filtering and storing the data and setting in STATE variable for re-rendering

Eg: 
handleDelete = key => {
    const { dataList } = this.state;
    this.setState({ dataList: dataList.filter(item => item._id !== key._id) });
  };
-------------------------------------------------------------------------------------------------------------------------------------------------------------

************CSS STYLE: 
style = {{ float: 'right' }} --> to make the button to right side.

-------------------------------------------------------------------------------------------------------------------------------------------------------------

***************** IMPORTANT POINTS : 

1.whenever we are developing front end or back end then we need to check the developer tools or console2 for errors

2.whenever we are initialising the function as like this :

case1 : onClick = { this.setLoginModalVisible }
then we are just defining the lfunction and here the function is called only after the button is clicked.

case2 : onClick = { this.setLoginModalVisible(true) }
then we will get errors and it will create an infinite loop .

case3 : onClick = {() =>  this.setLoginModalVisible(true) }
proper way of calling a function whenever we are having the parameters to pass.

3. Inside a class there can be only methods and arrow notation fucntions.But there should not be any CONST variables,
these variables can be declared inside the method.

4.If we keep this sentence in webpack.config.js then
----------------devtool: 'source-map',-----------------
 we can start the server in debug mode.

 5.we can send anything as property from parent to child , for that we should take it from state and then we should send it in property to the child file
 Eg: In parent file
 
  <LoginModalContainer openModal = { loginModalVisible } onOkClick={() => this.setLoginModalVisible} 
        handlingLogin = {() => this.handleLogin} />
        
        In Child file 
        
         <Modal title = 'Sign in into Asset Management' centered  visible = { openModal } onOk = {() => onOkClick(false)}
 