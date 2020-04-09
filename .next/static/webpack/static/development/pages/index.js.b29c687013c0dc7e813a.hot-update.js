webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./helper/index.js");
/* harmony import */ var _comps_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/layout */ "./comps/layout.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _comps_newsCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/newsCard */ "./comps/newsCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _this = undefined,
    _jsxFileName = "/home/mazda94/Documents/JavaScript/React & React Native/React/NextJS/DelegateTest/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Page = function Page(_ref) {
  var data = _ref.data,
      error = _ref.error;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state;
  }),
      business = _useSelector.business;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (business.length === 0) {
      dispatch({
        type: 'SET_BUSINESS',
        payload: data.business
      });
      dispatch({
        type: 'SET_TECHNOLOGIES',
        payload: data.tech
      });
    }
  }, []);

  if (error) {
    return __jsx(_comps_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, "Error while load data"));
  }

  return __jsx(_comps_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Container, {
    id: "left-tabs-example",
    defaultActiveKey: "idn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 4,
    xl: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Country"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    variant: "pills",
    className: "flex-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "idn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, "Indonesia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "sg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, "Singapore")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, "United States")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 8,
    xl: 9,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "idn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx(_comps_newsCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: 'idnBusiness',
    title: "Indonesia Business",
    news: business.length > 0 ? business[0].idnBusiness : data.business[0].idnBusiness,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "sg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, __jsx(_comps_newsCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Singapore Business",
    news: business.length > 0 ? business[1].sgBusiness : data.business[1].sgBusiness,
    id: 'sgBusiness',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx(_comps_newsCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: 'usBusiness',
    news: business.length > 0 ? business[2].usBusiness : data.business[2].usBusiness,
    title: "United States Business",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  })))))));
};

Page.getInitialProps = function _callee(_ref2) {
  var store, _store$getState, business, promises, idnBusiness, sgBusiness, usBusiness, idnTech, sgTech, usTech, _business, tech;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = _ref2.store;
          _store$getState = store.getState(), business = _store$getState.business;

          if (!(business.length > 0)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", {});

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_helper__WEBPACK_IMPORTED_MODULE_2__["client"].get(Object(_helper__WEBPACK_IMPORTED_MODULE_2__["query"])('id', 'business')));

        case 7:
          _context.t0 = _context.sent;
          _context.next = 10;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_helper__WEBPACK_IMPORTED_MODULE_2__["client"].get(Object(_helper__WEBPACK_IMPORTED_MODULE_2__["query"])('sg', 'business')));

        case 10:
          _context.t1 = _context.sent;
          _context.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_helper__WEBPACK_IMPORTED_MODULE_2__["client"].get(Object(_helper__WEBPACK_IMPORTED_MODULE_2__["query"])('us', 'business')));

        case 13:
          _context.t2 = _context.sent;
          _context.next = 16;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_helper__WEBPACK_IMPORTED_MODULE_2__["client"].get(Object(_helper__WEBPACK_IMPORTED_MODULE_2__["query"])('id', 'technology')));

        case 16:
          _context.t3 = _context.sent;
          _context.next = 19;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_helper__WEBPACK_IMPORTED_MODULE_2__["client"].get(Object(_helper__WEBPACK_IMPORTED_MODULE_2__["query"])('sg', 'technology')));

        case 19:
          _context.t4 = _context.sent;
          _context.next = 22;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_helper__WEBPACK_IMPORTED_MODULE_2__["client"].get(Object(_helper__WEBPACK_IMPORTED_MODULE_2__["query"])('us', 'technology')));

        case 22:
          _context.t5 = _context.sent;
          promises = {
            idnBusiness: _context.t0,
            sgBusiness: _context.t1,
            usBusiness: _context.t2,
            idnTech: _context.t3,
            sgTech: _context.t4,
            usTech: _context.t5
          };
          idnBusiness = promises.idnBusiness, sgBusiness = promises.sgBusiness, usBusiness = promises.usBusiness, idnTech = promises.idnTech, sgTech = promises.sgTech, usTech = promises.usTech;
          _business = [{
            idnBusiness: idnBusiness.data.articles.slice(0, 8)
          }, {
            sgBusiness: sgBusiness.data.articles.slice(0, 8)
          }, {
            usBusiness: usBusiness.data.articles.slice(0, 8)
          }];
          tech = [{
            idnTech: idnTech.data.articles.slice(0, 8)
          }, {
            sgTech: sgTech.data.articles.slice(0, 8)
          }, {
            usTech: usTech.data.articles.slice(0, 8)
          }];
          return _context.abrupt("return", {
            data: {
              business: _business,
              tech: tech
            }
          });

        case 30:
          _context.prev = 30;
          _context.t6 = _context["catch"](4);
          return _context.abrupt("return", {
            error: _context.t6.message
          });

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 30]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.b29c687013c0dc7e813a.hot-update.js.map