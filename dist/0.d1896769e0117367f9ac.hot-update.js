webpackHotUpdate(0,{

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(107);
	
	var _reactRedux = __webpack_require__(210);
	
	var _Counter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/Counter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Counter2 = _interopRequireDefault(_Counter);
	
	var _actions = __webpack_require__(160);
	
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Counter2.default);

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21tb24vY29udGFpbmVycy9BcHAuanM/MzFkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0tBQVk7Ozs7OztBQUVaLFVBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQztBQUM5QixVQUFPO0FBQ0wsY0FBUyxNQUFNLE9BQU47SUFEWCxDQUQ4QjtFQUFoQzs7QUFNQSxVQUFTLGtCQUFULENBQTRCLFFBQTVCLEVBQXNDO0FBQ3BDLFVBQU8sK0JBQW1CLGNBQW5CLEVBQW1DLFFBQW5DLENBQVAsQ0FEb0M7RUFBdEM7O21CQUllLHlCQUFRLGVBQVIsRUFBeUIsa0JBQXpCLHFCIiwiZmlsZSI6IjAuZDE4OTY3NjllMDExNzM2N2Y5YWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJ1xuaW1wb3J0ICogYXMgQ291bnRlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucydcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgY291bnRlcjogc3RhdGUuY291bnRlclxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKENvdW50ZXJBY3Rpb25zLCBkaXNwYXRjaClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tbW9uL2NvbnRhaW5lcnMvQXBwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==