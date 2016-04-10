webpackHotUpdate(0,{

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(25);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(240);
	
	var _reactRedux = __webpack_require__(99);
	
	var _redux = __webpack_require__(47);
	
	var _reducers = __webpack_require__(144);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _App = __webpack_require__(142);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import 'babel-polyfill'
	
	
	var initialState = window.__INITIAL_STATE__;
	var store = (0, _redux.createStore)(_reducers2.default, initialState);
	var rootElement = document.getElementById('app');
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_App2.default, null)
	), rootElement);

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguanM/ZWFiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7QUFFQSxLQUFNLGVBQWUsT0FBTyxpQkFBUDtBQUNyQixLQUFNLFFBQVEsNENBQXlCLFlBQXpCLENBQVI7QUFDTixLQUFNLGNBQWMsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQWQ7O0FBRU4sdUJBQ0U7O0tBQVUsT0FBTyxLQUFQLEVBQVY7R0FDRSxrREFERjtFQURGLEVBSUUsV0FKRixFIiwiZmlsZSI6IjAuZjliYjAyOGQ0Y2VlNGNhMWMyYTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9jb21tb24vcmVkdWNlcnMnXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbW1vbi9jb250YWluZXJzL0FwcCdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gd2luZG93Ll9fSU5JVElBTF9TVEFURV9fXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcblxucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXBwLz5cbiAgPC9Qcm92aWRlcj4sXG4gIHJvb3RFbGVtZW50XG4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudC9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=