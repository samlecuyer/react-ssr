webpackHotUpdate(0,{

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(47);
	
	var _reactRedux = __webpack_require__(99);
	
	var _Test = __webpack_require__(337);
	
	var _Test2 = _interopRequireDefault(_Test);
	
	var _actions = __webpack_require__(75);
	
	var CounterActions = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function mapStateToProps(state) {
	  return {
	    counter: state.counter
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(CounterActions, dispatch);
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(234);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(145);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(25);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(146);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Test: {
	    displayName: 'Test'
	  }
	};
	
	var _UsersCBDesktopReduxMasterExamplesUniversalNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/CB/Desktop/redux-master/examples/universal/common/components/Test.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersCBDesktopReduxMasterExamplesUniversalNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/CB/Desktop/redux-master/examples/universal/common/components/Test.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersCBDesktopReduxMasterExamplesUniversalNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersCBDesktopReduxMasterExamplesUniversalNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Test = _wrapComponent('Test')(function (_Component) {
	  _inherits(Test, _Component);
	
	  function Test() {
	    _classCallCheck(this, Test);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Test).call(this));
	
	    _this.clickMe = _this.clickMe.bind(_this);
	    return _this;
	  }
	
	  _createClass(Test, [{
	    key: 'clickMe',
	    value: function clickMe() {
	      console.log('hello');
	      console.log('props', this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'p',
	        null,
	        'Hello from test',
	        _react3.default.createElement(
	          'button',
	          { onClick: this.clickMe },
	          'Click'
	        )
	      );
	    }
	  }]);
	
	  return Test;
	}(_react2.Component));
	
	exports.default = Test;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21tb24vY29udGFpbmVycy9BcHAuanM/MzFkYyIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9UZXN0LmpzP2U4MzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOztLQUFZOzs7Ozs7QUFFWixVQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDOUIsVUFBTztBQUNMLGNBQVMsTUFBTSxPQUFOO0lBRFgsQ0FEOEI7RUFBaEM7O0FBTUEsVUFBUyxrQkFBVCxDQUE0QixRQUE1QixFQUFzQztBQUNwQyxVQUFPLCtCQUFtQixjQUFuQixFQUFtQyxRQUFuQyxDQUFQLENBRG9DO0VBQXRDOzttQkFJZSx5QkFBUSxlQUFSLEVBQXlCLGtCQUF6QixFQUE2QyxPQUE3QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUNiVDs7QUFDSixZQURJLElBQ0osR0FBYTsyQkFEVCxNQUNTOzt3RUFEVCxrQkFDUzs7QUFFWCxXQUFLLE9BQUwsR0FBZSxNQUFLLE9BQUwsQ0FBYSxJQUFiLE9BQWYsQ0FGVzs7SUFBYjs7Z0JBREk7OytCQU1LO0FBQ1AsZUFBUSxHQUFSLENBQVksT0FBWixFQURPO0FBRVAsZUFBUSxHQUFSLENBQVksT0FBWixFQUFxQixLQUFLLEtBQUwsQ0FBckIsQ0FGTzs7Ozs4QkFLQTtBQUNQLGNBQ0U7Ozs7U0FFRTs7YUFBUSxTQUFTLEtBQUssT0FBTCxFQUFqQjs7VUFGRjtRQURGLENBRE87Ozs7VUFYTDs7O21CQXFCUyxLIiwiZmlsZSI6IjAuZTUxZWRlYmYxNjA2ZmFiNjFjYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFRlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0J1xuaW1wb3J0ICogYXMgQ291bnRlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucydcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgY291bnRlcjogc3RhdGUuY291bnRlclxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKENvdW50ZXJBY3Rpb25zLCBkaXNwYXRjaClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tbW9uL2NvbnRhaW5lcnMvQXBwLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGlja01lID0gdGhpcy5jbGlja01lLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbGlja01lKCl7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvJylcbiAgICBjb25zb2xlLmxvZygncHJvcHMnLCB0aGlzLnByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHA+XG4gICAgICAgIEhlbGxvIGZyb20gdGVzdFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xpY2tNZX0+Q2xpY2s8L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tbW9uL2NvbXBvbmVudHMvVGVzdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=