webpackHotUpdate("static/development/pages/tech.js",{

/***/ "./pages/tech.jsx":
/*!************************!*\
  !*** ./pages/tech.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./helper/index.js");
/* harmony import */ var _comps_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/layout */ "./comps/layout.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _comps_newsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/newsCard */ "./comps/newsCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "/home/mazda94/Documents/JavaScript/React & React Native/React/NextJS/DelegateTest/pages/tech.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Page = function Page(_ref) {
  var data = _ref.data,
      error = _ref.error;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state;
  }),
      technologies = _useSelector.technologies;

  return __jsx(_comps_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"].Container, {
    id: "left-tabs-example",
    defaultActiveKey: "idn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12,
    md: 4,
    xl: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "Country"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    variant: "pills",
    className: "flex-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    eventKey: "idn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, "Indonesia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    eventKey: "sg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }, "Singapore")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    eventKey: "us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, "United States")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12,
    md: 8,
    xl: 9,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"].Pane, {
    eventKey: "idn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, __jsx(_comps_newsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Indonesia Tech",
    news: technologies[0].idnTech,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"].Pane, {
    eventKey: "sg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx(_comps_newsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Singapore Tech",
    news: technologies[1].sgTech,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"].Pane, {
    eventKey: "us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, __jsx(_comps_newsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    news: technologies[2].usTech,
    title: "United States Tech",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  })))))));
}; // Page.getInitialProps = async ({ store }) => {
//     const { technologies } = store.getState();
//     if (technologies.length) return {}
//     try {
//         const promises = {
//             idnTech: await client.get(query('id', 'technology')),
//             sgTech: await client.get(query('sg', 'technology')),
//             usTech: await client.get(query('us', 'technology')),
//         }
//         const { idnTech, sgTech, usTech } = promises
//         const payload = [
//             { idnTech: idnTech.data.articles.slice(0, 8) },
//             { sgTech: sgTech.data.articles.slice(0, 8) },
//             { usTech: usTech.data.articles.slice(0, 8) },
//         ]
//         store.dispatch({ type: 'SET_TECHNOLOGIES', payload })
//         return {
//             data: payload
//         }
//     } catch (error) {
//         return {
//             error: error.message
//         }
//     }
// }


/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=tech.js.c81c2515d328d16b8a3a.hot-update.js.map