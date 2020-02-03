(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{272:function(module,exports,__webpack_require__){__webpack_require__(273),__webpack_require__(419),module.exports=__webpack_require__(420)},337:function(module,exports){},420:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(267);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(614)],module)}.call(this,__webpack_require__(421)(module))},614:function(module,exports,__webpack_require__){var map={"./stories/box.stories.js":617,"./stories/stack.stories.js":616};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=614},616:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(64),styled_components_browser_esm=__webpack_require__(65);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  --space: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > * + * {\n    margin-top: var(--space);\n  }\n"]);return _templateObject=function(){return data},data}var StyledStack=styled_components_browser_esm.a.div(_templateObject());function Stack(props){return react_default.a.createElement(StyledStack,null,props.children)}Stack.displayName="Stack",Stack.__docgenInfo={description:"",methods:[],displayName:"Stack"};var src_Stack=Stack;function Card_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  max-width: 500px;\n  border-radius: 3px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 1.5em;\n\n  :hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  }\n"]);return Card_templateObject=function(){return data},data}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Stack.js"]={name:"Stack",docgenInfo:Stack.__docgenInfo,path:"src/Stack.js"});var CardElement=styled_components_browser_esm.a.div(Card_templateObject());function Card(props){return react_default.a.createElement(CardElement,null,props.children)}Card.displayName="Card",Card.__docgenInfo={description:"",methods:[],displayName:"Card"};var src_Card=Card;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Card.js"]={name:"Card",docgenInfo:Card.__docgenInfo,path:"src/Card.js"}),__webpack_require__.d(__webpack_exports__,"stackElement",(function(){return stackElement}));__webpack_exports__.default={title:"stack",component:src_Stack};var _ref=react_default.a.createElement(src_Stack,null,react_default.a.createElement(src_Card,null,react_default.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")),react_default.a.createElement(src_Card,null,react_default.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")),react_default.a.createElement(src_Card,null,react_default.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"))," "),stackElement=function(){return _ref};stackElement.displayName="stackElement",stackElement.__docgenInfo={description:"",methods:[],displayName:"stackElement"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/stack.stories.js"]={name:"stackElement",docgenInfo:stackElement.__docgenInfo,path:"src/stories/stack.stories.js"})},617:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(64);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  display: block;\n  padding: 1rem;\n  border-width: 1rem;\n  /* ↓ For high contrast mode */\n  outline: 1rem solid transparent;\n  outline-offset: calc(var(--border-thin) * -1);\n"]);return _templateObject=function(){return data},data}var StyledBox=__webpack_require__(65).a.div(_templateObject());function Box(props){return react_default.a.createElement(StyledBox,null,props.children)}Box.displayName="Box",Box.__docgenInfo={description:"",methods:[],displayName:"Box"};var src_Box=Box;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Box.js"]={name:"Box",docgenInfo:Box.__docgenInfo,path:"src/Box.js"}),__webpack_require__.d(__webpack_exports__,"BoxElement",(function(){return BoxElement}));__webpack_exports__.default={title:"box",component:src_Box};var _ref=react_default.a.createElement(src_Box,null,react_default.a.createElement("h1",null,"title"),react_default.a.createElement("p",null,"description")),BoxElement=function(){return _ref};BoxElement.displayName="BoxElement",BoxElement.__docgenInfo={description:"",methods:[],displayName:"BoxElement"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/box.stories.js"]={name:"BoxElement",docgenInfo:BoxElement.__docgenInfo,path:"src/stories/box.stories.js"})}},[[272,1,2]]]);
//# sourceMappingURL=main.c82375324ec8d8ebc74c.bundle.js.map