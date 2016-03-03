/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var InputText = __webpack_require__(1);
	var InputPassword = __webpack_require__(2);

	var App = React.createClass({displayName: "App",
		componentDidMount: function(){
			
		},
		render: function(){
			return (
				React.createElement("div", {className: "ui fluid container"}, 
					React.createElement("div", {className: "ui two column centered grid"}, 
						React.createElement("div", {className: "column loginBox"}, 
							React.createElement("div", {className: "ui raised segment"}, 
								React.createElement("div", {className: "ui form"}, 
									React.createElement("div", {className: "field error"}, 
										React.createElement("label", null, "Tên tài khoản"), 
										React.createElement(InputText, {type: "web", ref: "firstName", placeholder: "Tên tài khoản"})
									), 
									React.createElement("div", {className: "field error"}, 
										React.createElement("label", null, "Mật khẩu"), 
										React.createElement(InputPassword, {type: "web", ref: "password", placeholder: "Mật khẩu"})
									)
								)
							)
						)
					)
				)
			)
		}
	})

	ReactDOM.render(React.createElement(App, null), document.getElementById('app'))

/***/ },
/* 1 */
/***/ function(module, exports) {

	/** @jsx React.DOM */module.exports = React.createClass({displayName: "module.exports",
	        propTypes: {
	                type: React.PropTypes.string.isRequired,
	                placeholder: React.PropTypes.string,
	                className: React.PropTypes.string
	        },
	        getDefaultProps: function(){
	                return {
	                        type: 'web'
	                }
	        },
	        render: function(){
	                var type = this.props.type;
	                if(type === 'web'){
	                    return (
	                        React.createElement("input", {type: "text", 
	                                ref: "input", 
	                                placeholder: this.props.placeholder, 
	                                onChange: this._onChange, 
	                                className: this.props.className})
	                    )
	                }
	        }
	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	/** @jsx React.DOM */module.exports = React.createClass({displayName: "module.exports",
	        propTypes: {
	                type: React.PropTypes.string.isRequired,
	                placeholder: React.PropTypes.string,
	                className: React.PropTypes.string
	        },
	        getDefaultProps: function(){
	                return {
	                        type: 'web'
	                }
	        },
	        render: function(){
	                var type = this.props.type;
	                if(type === 'web'){
	                    return (
	                        React.createElement("input", {type: "password", 
	                                ref: "input", 
	                                placeholder: this.props.placeholder, 
	                                onChange: this._onChange, 
	                                className: this.props.className})
	                    )
	                }
	        }
	})

/***/ }
/******/ ]);