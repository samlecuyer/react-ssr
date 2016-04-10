webpackHotUpdate(0,{

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(235);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(146);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(25);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(147);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Counter: {
	    displayName: 'Counter'
	  }
	};
	
	var _UsersCBDesktopReduxMasterExamplesUniversalNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/CB/Desktop/redux-master/examples/universal/common/components/Counter.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersCBDesktopReduxMasterExamplesUniversalNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/CB/Desktop/redux-master/examples/universal/common/components/Counter.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersCBDesktopReduxMasterExamplesUniversalNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersCBDesktopReduxMasterExamplesUniversalNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Counter = _wrapComponent('Counter')(function (_Component) {
	  _inherits(Counter, _Component);
	
	  function Counter() {
	    _classCallCheck(this, Counter);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Counter).call(this));
	
	    _this.clickMe = _this.clickMe.bind(_this);
	    return _this;
	  }
	
	  _createClass(Counter, [{
	    key: 'clickMe',
	    value: function clickMe() {
	      console.log('hello');
	      console.log('props', this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var increment = _props.increment;
	      var incrementIfOdd = _props.incrementIfOdd;
	      var incrementAsync = _props.incrementAsync;
	      var decrement = _props.decrement;
	      var counter = _props.counter;
	
	      return _react3.default.createElement(
	        'p',
	        null,
	        'Clicked: ',
	        counter,
	        ' times',
	        ' ',
	        _react3.default.createElement(
	          'button',
	          { onClick: increment },
	          '+'
	        ),
	        ' ',
	        _react3.default.createElement(
	          'button',
	          { onClick: decrement },
	          '-'
	        ),
	        ' ',
	        _react3.default.createElement(
	          'button',
	          { onClick: incrementIfOdd },
	          'Increment if odd'
	        ),
	        ' ',
	        _react3.default.createElement(
	          'button',
	          { onClick: function onClick() {
	              return incrementAsync();
	            } },
	          'Increment async'
	        ),
	        _react3.default.createElement(
	          'button',
	          { onClick: this.clickMe },
	          'Click'
	        )
	      );
	    }
	  }]);
	
	  return Counter;
	}(_react2.Component));
	
	// Counter.propTypes = {
	//   increment: PropTypes.func.isRequired,
	//   incrementIfOdd: PropTypes.func.isRequired,
	//   incrementAsync: PropTypes.func.isRequired,
	//   decrement: PropTypes.func.isRequired,
	//   counter: PropTypes.number.isRequired
	// }
	
	exports.default = Counter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9Db3VudGVyLmpzP2U4ZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUVNOztBQUNKLFlBREksT0FDSixHQUFhOzJCQURULFNBQ1M7O3dFQURULHFCQUNTOztBQUVYLFdBQUssT0FBTCxHQUFlLE1BQUssT0FBTCxDQUFhLElBQWIsT0FBZixDQUZXOztJQUFiOztnQkFESTs7K0JBTUs7QUFDUCxlQUFRLEdBQVIsQ0FBWSxPQUFaLEVBRE87QUFFUCxlQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLEtBQUssS0FBTCxDQUFyQixDQUZPOzs7OzhCQUtBO29CQUNtRSxLQUFLLEtBQUwsQ0FEbkU7V0FDQyw2QkFERDtXQUNZLHVDQURaO1dBQzRCLHVDQUQ1QjtXQUM0Qyw2QkFENUM7V0FDdUQseUJBRHZEOztBQUVQLGNBQ0U7Ozs7U0FDWSxPQURaOztTQUVHLEdBRkg7U0FHRTs7YUFBUSxTQUFTLFNBQVQsRUFBUjs7VUFIRjtTQUlHLEdBSkg7U0FLRTs7YUFBUSxTQUFTLFNBQVQsRUFBUjs7VUFMRjtTQU1HLEdBTkg7U0FPRTs7YUFBUSxTQUFTLGNBQVQsRUFBUjs7VUFQRjtTQVFHLEdBUkg7U0FTRTs7YUFBUSxTQUFTO3NCQUFNO2NBQU4sRUFBakI7O1VBVEY7U0FVRTs7YUFBUSxTQUFTLEtBQUssT0FBTCxFQUFqQjs7VUFWRjtRQURGLENBRk87Ozs7VUFYTDs7Ozs7Ozs7Ozs7bUJBc0NTLFEiLCJmaWxlIjoiMC4xOGYzNmRkNTM0ZjUyN2EyZjFjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGlja01lID0gdGhpcy5jbGlja01lLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbGlja01lKCl7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvJylcbiAgICBjb25zb2xlLmxvZygncHJvcHMnLCB0aGlzLnByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluY3JlbWVudCwgaW5jcmVtZW50SWZPZGQsIGluY3JlbWVudEFzeW5jLCBkZWNyZW1lbnQsIGNvdW50ZXIgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPHA+XG4gICAgICAgIENsaWNrZWQ6IHtjb3VudGVyfSB0aW1lc1xuICAgICAgICB7JyAnfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY3JlbWVudH0+KzwvYnV0dG9uPlxuICAgICAgICB7JyAnfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlY3JlbWVudH0+LTwvYnV0dG9uPlxuICAgICAgICB7JyAnfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY3JlbWVudElmT2RkfT5JbmNyZW1lbnQgaWYgb2RkPC9idXR0b24+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaW5jcmVtZW50QXN5bmMoKX0+SW5jcmVtZW50IGFzeW5jPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jbGlja01lfT5DbGljazwvYnV0dG9uPlxuICAgICAgPC9wPlxuICAgIClcbiAgfVxufVxuXG4vLyBDb3VudGVyLnByb3BUeXBlcyA9IHtcbi8vICAgaW5jcmVtZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuLy8gICBpbmNyZW1lbnRJZk9kZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbi8vICAgaW5jcmVtZW50QXN5bmM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4vLyAgIGRlY3JlbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbi8vICAgY291bnRlcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tbW9uL2NvbXBvbmVudHMvQ291bnRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=