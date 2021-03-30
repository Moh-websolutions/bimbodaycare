webpackHotUpdate_N_E("pages/staff",{

/***/ "./node_modules/chain-function/index.js":
/*!**********************************************!*\
  !*** ./node_modules/chain-function/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ "./node_modules/react-addons-transition-group/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-addons-transition-group/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



module.exports = __webpack_require__(/*! react-transition-group/TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js");


/***/ }),

/***/ "./node_modules/react-shuffle/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-shuffle/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Shuffle = __webpack_require__(/*! ./lib/shuffle */ "./node_modules/react-shuffle/lib/shuffle.js");

module.exports = Shuffle;


/***/ }),

/***/ "./node_modules/react-shuffle/lib/shuffle.js":
/*!***************************************************!*\
  !*** ./node_modules/react-shuffle/lib/shuffle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactTweenState = __webpack_require__(/*! react-tween-state */ "./node_modules/react-tween-state/lib/index.js");

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

var _reactAddonsTransitionGroup = __webpack_require__(/*! react-addons-transition-group */ "./node_modules/react-addons-transition-group/index.js");

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint no-unused-vars:0 */
/*global window, document, getComputedStyle*/

var Clones = _react2.default.createClass({
  displayName: 'ShuffleClones',

  _childrenWithPositions: function _childrenWithPositions() {
    var _this = this;

    var children = [];
    _react2.default.Children.forEach(this.props.children, function (child) {
      var style = _this.props.positions[child.key];
      var key = child.key;
      children.push(_react2.default.createElement(Clone, {
        child: child,
        style: style,
        key: key,
        initial: _this.props.initial,
        fade: _this.props.fade,
        scale: _this.props.scale,
        duration: _this.props.duration }));
    });
    return children.sort(function (a, b) {
      return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'ShuffleClones' },
      _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        null,
        this._childrenWithPositions()
      )
    );
  }
});

var Clone = _react2.default.createClass({
  mixins: [_reactTweenState2.default.Mixin],
  displayName: 'ShuffleClone',
  getInitialState: function getInitialState() {
    return {
      top: this.props.style ? this.props.style.top : 0,
      left: this.props.style ? this.props.style.left : 0,
      opacity: 1,
      transform: 1
    };
  },
  componentWillAppear: function componentWillAppear(cb) {
    this.tweenState('opacity', {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: this.props.duration,
      beginValue: this.props.initial ? 0 : 1,
      endValue: 1,
      onEnd: cb
    });
  },
  componentWillEnter: function componentWillEnter(cb) {
    this.tweenState('opacity', {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: this.props.duration,
      beginValue: 0,
      endValue: 1,
      onEnd: cb
    });
  },
  componentWillLeave: function componentWillLeave(cb) {
    this.tweenState('opacity', {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: this.props.duration,
      endValue: 0,
      onEnd: function onEnd() {
        try {
          cb();
        } catch (e) {
          // This try catch handles component umounting jumping the gun
        }
      }
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.tweenState('top', {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: nextProps.duration,
      endValue: nextProps.style.top
    });
    this.tweenState('left', {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: nextProps.duration,
      endValue: nextProps.style.left
    });
  },
  render: function render() {
    var style = {};
    if (this.props.style) {
      style = {
        top: this.getTweeningValue('top'),
        left: this.getTweeningValue('left'),
        opacity: this.props.fade ? this.getTweeningValue('opacity') : 1,
        transform: this.props.scale ? 'scale(' + this.getTweeningValue('opacity') + ')' : 0,
        transformOrigin: 'center center',
        width: this.props.style.width,
        height: this.props.style.height,
        position: this.props.style.position
      };
    }
    var key = this.props.key;
    return _react2.default.cloneElement(this.props.child, { style: style, key: key });
  }
});

var Shuffle = _react2.default.createClass({

  displayName: 'Shuffle',

  propTypes: {
    duration: _react2.default.PropTypes.number,
    scale: _react2.default.PropTypes.bool,
    fade: _react2.default.PropTypes.bool,
    initial: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      duration: 300,
      scale: true,
      fade: true,
      initial: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      animating: false,
      ready: false
    };
  },
  componentDidMount: function componentDidMount() {
    this._makePortal();
    window.addEventListener('resize', this._renderClonesInitially);
  },
  componentWillUnmount: function componentWillUnmount() {
    _reactDom2.default.unmountComponentAtNode(this._portalNode);
    _reactDom2.default.findDOMNode(this.refs.container).removeChild(this._portalNode);
    window.removeEventListener('resize', this._renderClonesInitially);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this._startAnimation(nextProps);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var _this2 = this;

    if (this.state.ready === false) {
      this.setState({ ready: true }, function () {
        _this2._renderClonesInitially();
      });
    } else {
      this._renderClonesToNewPositions(this.props);
    }
  },
  _makePortal: function _makePortal() {
    this._portalNode = document.createElement('div');
    this._portalNode.style.left = '0px';
    this._portalNode.style.top = '0px';
    this._portalNode.style.position = 'absolute';
    _reactDom2.default.findDOMNode(this.refs.container).appendChild(this._portalNode);
  },
  _addTransitionEndEvent: function _addTransitionEndEvent() {
    setTimeout(this._finishAnimation, this.props.duration);
  },
  _startAnimation: function _startAnimation(nextProps) {
    var _this3 = this;

    if (this.state.animating) {
      return;
    }

    var cloneProps = (0, _objectAssign2.default)({}, nextProps, {
      positions: this._getPositions(),
      initial: this.props.initial,
      fade: this.props.fade,
      scale: this.props.scale,
      duration: this.props.duration
    });
    this._renderClones(cloneProps, function () {
      _this3._addTransitionEndEvent();
      _this3.setState({ animating: true });
    });
  },
  _renderClonesToNewPositions: function _renderClonesToNewPositions(props) {
    var cloneProps = (0, _objectAssign2.default)({}, props, {
      positions: this._getPositions(),
      initial: this.props.initial,
      fade: this.props.fade,
      scale: this.props.scale,
      duration: this.props.duration
    });
    this._renderClones(cloneProps);
  },
  _finishAnimation: function _finishAnimation() {
    this.setState({ animating: false });
  },
  _getPositions: function _getPositions() {
    var _this4 = this;

    var positions = {};
    _react2.default.Children.forEach(this.props.children, function (child) {
      var ref = child.key;
      var node = _reactDom2.default.findDOMNode(_this4.refs[ref]);
      var rect = node.getBoundingClientRect();
      var computedStyle = getComputedStyle(node);
      var marginTop = parseInt(computedStyle.marginTop, 10);
      var marginLeft = parseInt(computedStyle.marginLeft, 10);
      var position = {
        top: node.offsetTop - marginTop,
        left: node.offsetLeft - marginLeft,
        width: rect.width,
        height: rect.height,
        position: 'absolute',
        opacity: 1
      };
      positions[ref] = position;
    });
    return positions;
  },
  _renderClonesInitially: function _renderClonesInitially() {
    var cloneProps = (0, _objectAssign2.default)({}, this.props, {
      positions: this._getPositions(),
      initial: this.props.initial,
      fade: this.props.fade,
      scale: this.props.scale,
      duration: this.props.duration
    });
    _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react2.default.createElement(Clones, cloneProps), this._portalNode);
    this.setState({ ready: true });
  },
  _renderClones: function _renderClones(props, cb) {
    _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react2.default.createElement(Clones, props), this._portalNode, cb);
  },
  _childrenWithRefs: function _childrenWithRefs() {
    return _react2.default.Children.map(this.props.children, function (child) {
      return _react2.default.cloneElement(child, { ref: child.key });
    });
  },
  render: function render() {
    var _props = this.props,
        initial = _props.initial,
        fade = _props.fade,
        duration = _props.duration,
        props = _objectWithoutProperties(_props, ['initial', 'fade', 'duration']);

    var showContainer = initial ? 0 : 1;
    if (this.state.ready) {
      showContainer = 0;
    }
    return _react2.default.createElement(
      'div',
      _extends({ ref: 'container', style: { position: 'relative' } }, props),
      _react2.default.createElement(
        'div',
        { style: { opacity: showContainer } },
        this._childrenWithRefs()
      )
    );
  }
});

exports.default = Shuffle;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(/*! chain-function */ "./node_modules/chain-function/index.js");

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         true ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : undefined;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  true ? propTypes : undefined;
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ "./node_modules/react-tween-state/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-tween-state/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}({0:function(e,n,t){e.exports=t(90)},1:function(e,n){function t(){c=!1,o.length?s=o.concat(s):f=-1,s.length&&r()}function r(){if(!c){var e=setTimeout(t);c=!0;for(var n=s.length;n;){for(o=s,s=[];++f<n;)o&&o[f].run();f=-1,n=s.length}o=null,c=!1,clearTimeout(e)}}function a(e,n){this.fun=e,this.array=n}function u(){}var o,i=e.exports={},s=[],c=!1,f=-1;i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new a(e,n)),1!==s.length||c||setTimeout(r,0)},a.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=u,i.addListener=u,i.once=u,i.off=u,i.removeListener=u,i.removeAllListeners=u,i.emit=u,i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},90:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(165),u=r(a),o=t(91),i=r(o),s="ADDITIVE",c=a.easeInOutQuad,f=300,l=0,h={ADDITIVE:"ADDITIVE",DESTRUCTIVE:"DESTRUCTIVE"},v={_rafID:null,getInitialState:function(){return{tweenQueue:[]}},componentWillUnmount:function(){i["default"].cancel(this._rafID),this._rafID=-1},tweenState:function(e,n){var t=this,r=n.easing,a=n.duration,u=n.delay,o=n.beginValue,v=n.endValue,d=n.onEnd,p=n.stackBehavior;this.setState(function(n){var I=n,w=void 0,g=void 0;if("string"==typeof e)w=e,g=e;else{for(var M=0;M<e.length-1;M++)I=I[e[M]];w=e[e.length-1],g=e.join("|")}var m={easing:r||c,duration:null==a?f:a,delay:null==u?l:u,beginValue:null==o?I[w]:o,endValue:v,onEnd:d,stackBehavior:p||s},x=n.tweenQueue;return m.stackBehavior===h.DESTRUCTIVE&&(x=n.tweenQueue.filter(function(e){return e.pathHash!==g})),x.push({pathHash:g,config:m,initTime:Date.now()+m.delay}),I[w]=m.endValue,1===x.length&&(t._rafID=(0,i["default"])(t._rafCb)),{tweenQueue:x}})},getTweeningValue:function(e){var n=this.state,t=void 0,r=void 0;if("string"==typeof e)t=n[e],r=e;else{t=n;for(var a=0;a<e.length;a++)t=t[e[a]];r=e.join("|")}for(var u=Date.now(),a=0;a<n.tweenQueue.length;a++){var o=n.tweenQueue[a],i=o.pathHash,s=o.initTime,c=o.config;if(i===r){var f=u-s>c.duration?c.duration:Math.max(0,u-s),l=0===c.duration?c.endValue:c.easing(f,c.beginValue,c.endValue,c.duration),h=l-c.endValue;t+=h}}return t},_rafCb:function(){var e=this.state;if(0!==e.tweenQueue.length){for(var n=Date.now(),t=[],r=0;r<e.tweenQueue.length;r++){var a=e.tweenQueue[r],u=a.initTime,o=a.config;n-u<o.duration?t.push(a):o.onEnd&&o.onEnd()}-1!==this._rafID&&(this.setState({tweenQueue:t}),this._rafID=(0,i["default"])(this._rafCb))}}};n["default"]={Mixin:v,easingTypes:u["default"],stackBehavior:h},e.exports=n["default"]},91:function(e,n,t){for(var r=t(92),a="undefined"==typeof window?{}:window,u=["moz","webkit"],o="AnimationFrame",i=a["request"+o],s=a["cancel"+o]||a["cancelRequest"+o],c=0;c<u.length&&!i;c++)i=a[u[c]+"Request"+o],s=a[u[c]+"Cancel"+o]||a[u[c]+"CancelRequest"+o];if(!i||!s){var f=0,l=0,h=[],v=1e3/60;i=function(e){if(0===h.length){var n=r(),t=Math.max(0,v-(n-f));f=t+n,setTimeout(function(){var e=h.slice(0);h.length=0;for(var n=0;n<e.length;n++)if(!e[n].cancelled)try{e[n].callback(f)}catch(t){setTimeout(function(){throw t},0)}},Math.round(t))}return h.push({handle:++l,callback:e,cancelled:!1}),l},s=function(e){for(var n=0;n<h.length;n++)h[n].handle===e&&(h[n].cancelled=!0)}}e.exports=function(e){return i.call(a,e)},e.exports.cancel=function(){s.apply(a,arguments)}},92:function(e,n,t){(function(n){(function(){var t,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof n&&null!==n&&n.hrtime?(e.exports=function(){return(t()-a)/1e6},r=n.hrtime,t=function(){var e;return e=r(),1e9*e[0]+e[1]},a=t()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(n,t(1))},165:function(e,n){"use strict";var t={linear:function(e,n,t,r){var a=t-n;return a*e/r+n},easeInQuad:function(e,n,t,r){var a=t-n;return a*(e/=r)*e+n},easeOutQuad:function(e,n,t,r){var a=t-n;return-a*(e/=r)*(e-2)+n},easeInOutQuad:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e+n:-a/2*(--e*(e-2)-1)+n},easeInCubic:function(e,n,t,r){var a=t-n;return a*(e/=r)*e*e+n},easeOutCubic:function(e,n,t,r){var a=t-n;return a*((e=e/r-1)*e*e+1)+n},easeInOutCubic:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e*e+n:a/2*((e-=2)*e*e+2)+n},easeInQuart:function(e,n,t,r){var a=t-n;return a*(e/=r)*e*e*e+n},easeOutQuart:function(e,n,t,r){var a=t-n;return-a*((e=e/r-1)*e*e*e-1)+n},easeInOutQuart:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e*e*e+n:-a/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(e,n,t,r){var a=t-n;return a*(e/=r)*e*e*e*e+n},easeOutQuint:function(e,n,t,r){var a=t-n;return a*((e=e/r-1)*e*e*e*e+1)+n},easeInOutQuint:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e*e*e*e+n:a/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(e,n,t,r){var a=t-n;return-a*Math.cos(e/r*(Math.PI/2))+a+n},easeOutSine:function(e,n,t,r){var a=t-n;return a*Math.sin(e/r*(Math.PI/2))+n},easeInOutSine:function(e,n,t,r){var a=t-n;return-a/2*(Math.cos(Math.PI*e/r)-1)+n},easeInExpo:function(e,n,t,r){var a=t-n;return 0==e?n:a*Math.pow(2,10*(e/r-1))+n},easeOutExpo:function(e,n,t,r){var a=t-n;return e==r?n+a:a*(-Math.pow(2,-10*e/r)+1)+n},easeInOutExpo:function(e,n,t,r){var a=t-n;return 0===e?n:e===r?n+a:(e/=r/2)<1?a/2*Math.pow(2,10*(e-1))+n:a/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(e,n,t,r){var a=t-n;return-a*(Math.sqrt(1-(e/=r)*e)-1)+n},easeOutCirc:function(e,n,t,r){var a=t-n;return a*Math.sqrt(1-(e=e/r-1)*e)+n},easeInOutCirc:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+n:a/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(e,n,t,r){var a,u,o,i=t-n;return o=1.70158,u=0,a=i,0===e?n:1===(e/=r)?n+i:(u||(u=.3*r),a<Math.abs(i)?(a=i,o=u/4):o=u/(2*Math.PI)*Math.asin(i/a),-(a*Math.pow(2,10*(e-=1))*Math.sin((e*r-o)*(2*Math.PI)/u))+n)},easeOutElastic:function(e,n,t,r){var a,u,o,i=t-n;return o=1.70158,u=0,a=i,0===e?n:1===(e/=r)?n+i:(u||(u=.3*r),a<Math.abs(i)?(a=i,o=u/4):o=u/(2*Math.PI)*Math.asin(i/a),a*Math.pow(2,-10*e)*Math.sin((e*r-o)*(2*Math.PI)/u)+i+n)},easeInOutElastic:function(e,n,t,r){var a,u,o,i=t-n;return o=1.70158,u=0,a=i,0===e?n:2===(e/=r/2)?n+i:(u||(u=r*(.3*1.5)),a<Math.abs(i)?(a=i,o=u/4):o=u/(2*Math.PI)*Math.asin(i/a),1>e?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin((e*r-o)*(2*Math.PI)/u))+n:a*Math.pow(2,-10*(e-=1))*Math.sin((e*r-o)*(2*Math.PI)/u)*.5+i+n)},easeInBack:function(e,n,t,r,a){var u=t-n;return void 0===a&&(a=1.70158),u*(e/=r)*e*((a+1)*e-a)+n},easeOutBack:function(e,n,t,r,a){var u=t-n;return void 0===a&&(a=1.70158),u*((e=e/r-1)*e*((a+1)*e+a)+1)+n},easeInOutBack:function(e,n,t,r,a){var u=t-n;return void 0===a&&(a=1.70158),(e/=r/2)<1?u/2*(e*e*(((a*=1.525)+1)*e-a))+n:u/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+n},easeInBounce:function(e,n,r,a){var u,o=r-n;return u=t.easeOutBounce(a-e,0,o,a),o-u+n},easeOutBounce:function(e,n,t,r){var a=t-n;return(e/=r)<1/2.75?a*(7.5625*e*e)+n:2/2.75>e?a*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?a*(7.5625*(e-=2.25/2.75)*e+.9375)+n:a*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(e,n,r,a){var u,o=r-n;return a/2>e?(u=t.easeInBounce(2*e,0,o,a),.5*u+n):(u=t.easeOutBounce(2*e-a,0,o,a),.5*u+.5*o+n)}};e.exports=t}})});

/***/ }),

/***/ "./node_modules/warning/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./pages/staff.js":
/*!************************!*\
  !*** ./pages/staff.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_shuffle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-shuffle */ "./node_modules/react-shuffle/index.js");
/* harmony import */ var react_shuffle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_shuffle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Services */ "./components/Services.js");


var _jsxFileName = "S:\\bimbo2020\\react\\bimbodaycare\\pages\\staff.js",
    _s = $RefreshSig$();










var allstaff = [{
  id: "1",
  staffName: "Jennifer Chiasson",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She started working at Bimbo Daycare in December 2020. She is an educator with our afterschool program. ‘One of the best parts of being an educator is watching them grow, building a strong connection with them and getting to know each child personally.’ Outside of work, Jennifer loves listening to music and is a huge fan of Star Wars.",
  staffBiofr: "Elle a commencé à travailler à la Garderie Bimbo en décembre 2020. Elle est éducatrice avec la halte scolaire. ‘Une des meilleures parties d’être éducatrice est de les observer grandir, bâtir une forte connexion avec eux et apprendre à connaître chaque enfant personnellement.’ À l’extérieur du travail, Jennifer aime écouter de la musique et est une vraie mordue de Star Wars."
}, {
  id: "2",
  staffName: "Sarah Martin",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She joined the team at Bimbo Daycare in September of 2020. She works as an educational assistant in the 4-year-old class as well as with the afterschool program. Sarah believes one of the greatest benefits of being an educator is watching the kids learn new things that will help them later in life. ‘Outside of daycare, I enjoy swimming and writing. It helps me relax after a busy day at work.’  ",
  staffBiofr: "Elle a joint l’équipe de la Garderie Bimbo en septembre 2020. Elle travaille en tant qu’aide éducatrice dans la classe des 4 ans ainsi qu’à la halte scolaire. Sarah croît qu’un des plus grands avantages d’être une éducatrice est de voir les enfants apprendre de nouvelles choses qui leur seront utiles plus tard dans la vie. ‘À l’extérieur de la garderie, j’aime la natation et l’écriture. Cela m’aide à me détendre après une journée occupée au travail.’"
}, {
  id: "3",
  staffName: "Natacha Hussey",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been part of the Bimbo Daycare team for over 5 years now. She is currently one of our preschool educators. Natacha has her diploma in Early childhood education. ‘One of the pleasures of being an early childhood educator is seeing the reactions on children’s faces when they accomplish something new on their own.’ When not at work, Natacha can be found being a busy mom of two or can be found snowboarding.",
  staffBiofr: "Elle fait partie de l’équipe de la Garderie Bimbo depuis plus de 5 ans. Elle est présentement éducatrice en prématernelle. Natacha a son diplôme en Éducation de la petite enfance. ‘Un des plaisirs d’être éducatrice est de voir les réactions des enfants lorsqu’ils réussissent à accomplir quelque chose de nouveau par eux-mêmes.’ Lorsqu’elle n’est pas au travail, Natacha est une maman occupée de deux enfants ou elle peut être aperçue à faire de la planche à neige."
}, {
  id: "4",
  staffName: "Kathy Robertson",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She is an educator in our transition group for the past 3 years. A few of the things Kathy loves most about being an educator is watching the children learn new things and helping them explore the world around them. ‘Children are our future and I love being one of the people that is lucky enough to help them grow and learn.’ One of her passions outside of daycare is spending time adventuring with her beautiful family. Kathy lives a simple but beautiful life.",
  staffBiofr: "Elle est éducatrice avec le groupe de transition depuis les 3 dernières années. De son travail en tant qu’éducatrice, elle aime voir les enfants apprendre de nouvelles choses et les aider à explorer le monde autour d’eux. ‘Les enfants sont notre avenir et j’adore faire partie des personnes ayant la chance de les aider à grandir et apprendre.’ Une de ses passions en dehors de la garderie est de passer du temps à s’aventurer avec sa belle famille. Kathy vit une vie simple mais merveilleuse. "
}, {
  id: "5",
  staffName: "Nicole Haché",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been working at Bimbo Daycare for over 17 years! She is an educator with children aged 0 to 23 months. She loves seeing how children learn quickly and discover every little thing. She loves listening to them laugh and seeing them accomplish new tasks (learning colors, painting, etc). Nicole has a passion for scrapbooking and loves walks along the water.",
  staffBiofr: "Elle travaille à la Garderie Bimbo depuis plus de 17 ans! Elle est éducatrice avec les enfants âgés de 0 à 23 mois. Elle aime voir comment les enfants apprennent rapidement et découvrent chaque petite chose. Elle aime les écouter rire et les voir accomplir de nouveaux défis (apprendre les couleurs, faire de la peinture, etc). Nicole a une passion pour le scrapbooking et aime les marches sur le bord de l’eau."
}, {
  id: "6",
  staffName: "Kassandra Landry",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been an educator at Bimbo Daycare since January 2020. She is with children aged 15 to 23 months. She loves contributing to helping children in their development and growth. When Kassandra is not at work, she loves going for walks in nature and spending time with her pets.",
  staffBiofr: "Elle est éducatrice à la Garderie Bimbo depuis janvier 2020. Elle est avec les enfants âgés de 15 à 23 mois. Elle aime contribuer à aider les enfants dans leur développement et à bien grandir. Quand Kassandra n’est pas au travail, elle aime aller prendre des marches dans la nature et passer du temps avec ses animaux."
}, {
  id: "7",
  staffName: "Kim Charest Lagacé",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been working at Bimbo Daycare for over 11 years. She is an educator with children aged 2 years old. In her role as educator, she loves being able to help children in their development as well as participating in their learning. ‘I love seeing their little smiles in the morning when they arrive at daycare and consoling them when they are upset about leaving mom and dad.’ When Kim is not at work, she loves walks, nature and hockey.",
  staffBiofr: "Elle travaille à la Garderie Bimbo depuis plus de 11 ans. Elle est éducatrice avec les enfants de 2 ans. Dans son rôle d’éducatrice, elle aime pouvoir aider les enfants à se développer ainsi que de participer à leur apprentissage. ‘J’aime voir leur petit sourire le matin quand ils arrivent à la garderie et les consoler quand ils ont de la peine de devoir quitter maman et papa.’ Quand Kim n’est pas au travail, elle aime les marches, le plein air et le hockey. "
}, {
  id: "8",
  staffName: "Noémy Frenette",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been working at Bimbo Daycare since October 2020 with children aged 0 to 23 months. ‘As an educator, what I prefer the most are all the beautiful moments spent with the children, contributing to their learning and seeing them evolve over the months. I find it beautiful to witness. Outside of work, I love photography and crafts.’",
  staffBiofr: "Elle travaille à la Garderie Bimbo depuis octobre 2020 avec les enfants âgés de 0 à 23 mois. ‘En tant qu’éducatrice, ce que je préfère sont tous les beaux moments passés avec les enfants, de contribuer à leur apprentissage et de les voir évoluer au fil des mois. Je trouve que c’est beau à voir. En dehors du travail, j’adore la photographie et le bricolage.’"
}, {
  id: "9",
  staffName: "Marie-Pier Labbé",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been working at Bimbo Daycare since October 2020. She works as an educational assistant in the 3-year-old class. ‘I adore getting to know the children and discovering new ways to help them in their development.’ Outside of work, Marie-Pier loves puzzles and reading.",
  staffBiofr: "Elle travaille à la Garderie Bimbo depuis octobre 2020. Elle travaille comme aide éducatrice dans la classe des 3 ans. ‘J’adore apprendre à connaître les enfants et découvrir d’autres moyens de les aider dans leur développement.’ À l’extérieur du travail, Marie-Pier adore faire des casse-têtes et la lecture."
}, {
  id: "10",
  staffName: "Natalie Boudreau",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been working at Bimbo Daycare for over 17 years but has 23 years of experience working in daycares. She works as an educator with preschool children who are aged 4 years old. ‘I have always adored children. I love seeing them grow and being able to teach them different things bringing them further in their development. I love when they tell me beautiful stories about themselves.’ When Natalie is not at work, she loves going out to restaurants with her friends.",
  staffBiofr: "Elle travaille à la Garderie Bimbo depuis plus de 17 ans mais elle a 23 ans d’expérience en garderie. Elle travaille comme éducatrice avec les enfants de la prématernelle, donc de 4 ans. ‘J’adore les enfants depuis toujours. J’aime les voir grandir et pouvoir leur apprendre différentes choses pour les amener plus loin dans leur apprentissage. J’adore quand ils me racontent des belles histoires à leur sujet.’ Quand Natalie n’est pas au travail, elle aime aller au restaurant avec ses amis. "
}, {
  id: "11",
  staffName: "Josiane Cormier",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been working at Bimbo Daycare since 2018. She is an educator in the 4-year-old class and also an educator with the afterschool program. She loves seeing children flourish and becoming more and more independent. ‘Seeing the child’s smile, how he’s proud of himself after learning or doing something new independently for the first time.’ When Josiane is not at work, she likes spending quality time with her family.",
  staffBiofr: "Elle travaille à la Garderie Bimbo depuis 2018. Elle est éducatrice dans la classe des 4 ans et aussi éducatrice avec les enfants de la halte scolaire. Elle adore voir les enfants s’épanouir et devenir de plus en plus indépendants. ‘Voir le sourire de l’enfant, combien il est fier de lui d’avoir appris ou fait quelque chose de nouveau par lui-même pour la première fois’. Quand Josiane n’est pas au travail, elle aime passer du temps de qualité avec sa famille. "
}, {
  id: "12",
  staffName: "Sonia LeClair",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been working at Bimbo Daycare for 17 years! She is an educator with children aged 3 years old. What she loves the most about being an educator is organizing activities with the children, their smiles, their hugs and their desire for independence. When Sonia is not at work, she loves crocheting, researching, listening to music, meditating and going to the beach.",
  staffBiofr: "Elle travaille à la Garderie Bimbo depuis 17ans! Elle est éducatrice avec les enfants âgés de 3 ans. Ce qu’elle aime le plus d’être une éducatrice est d’organiser des activités qu’elle fait avec les enfants, leurs sourires, leurs câlins et leur désir d’indépendance. Quand Sonia n’est pas au travail, elle aime faire du crochet, des recherches, écouter de la musique, faire de la méditation et aller à la plage."
}, {
  id: "13",
  staffName: "Fanny Galluchon",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been working at Bimbo Daycare since 2018. She works as an educator with children aged 2 years old. ‘As educator, I love the happiness that the children bring me, their imagination, our awesome work team and our excellent director.’ Fanny’s hobbies are spending time outside with her children, puzzles and car rides.",
  staffBiofr: "Elle travaille à la Garderie Bimbo depuis 2018. Elle travaille comme éducatrice avec les enfants âgés de 2 ans. ‘En tant qu’éducatrice, j’adore le bonheur que les enfants m’apportent, leur imagination, notre super équipe de travail et notre excellente directrice.’ Les passe-temps de Fanny sont d’être dehors avec ses enfants, les casse-têtes et les balades en auto."
}, {
  id: "14",
  staffName: "Chantal Doiron",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been working at Bimbo Daycare since 2010! She works as an educator with children aged 2 years old. ‘I love seeing their little faces in the morning with their smile. I love doing experiments or games where they make big messes like painting and water games.’ When Chantal is not at work, she likes outdoor walks, reading and watching series on Netflix.",
  staffBiofr: "Elle travaille à la Garderie Bimbo depuis 2010! Elle travaille comme éducatrice avec les enfants âgés de 2 ans. ‘J’adore voir leur petit visage le matin avec leur sourire. J’adore faire des expériences ou des jeux où ils font des gros dégâts comme la peinture et les jeux d’eau.’ Quand Chantal n’est pas au travail, elle aime les marches extérieures, lire et regarder des séries sur Netflix."
}, {
  id: "15",
  staffName: "Malvina Chiasson",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "She has been working at Bimbo Daycare for over 20 years! She works as an educator with children aged 0 to 23 months. ‘What I love about being an educator is going to the daycare every morning to greet the children with a smiling face. The first years of their lives are very important to their development. That is why I love letting them explore, socialize, have fun while playing. I hope that each child feels safe and happy at the daycare. My passions are reading, puzzles and outdoor walks. I also like doing volunteer work with the elderly in nursing homes.’",
  staffBiofr: "Elle travaille à la Garderie Bimbo depuis plus de 20 ans! Elle travaille comme éducatrice avec les enfants âgés de 0 à 23 mois. ‘Ce que j’aime comme éducatrice, c’est d’aller à la garderie chaque matin à la rencontre des enfants avec le sourire. Les premières années de leur vie sont très importantes pour leur développement. C’est pourquoi j’adore les laisser explorer, socialiser, avoir du plaisir en jouant. Je souhaite que chaque enfant se sente en sécurité et heureux à la garderie. Mes passions sont la lecture, les casse-têtes et les marches à l’extérieur. J’aime aussi faire du bénévolat pour les personnes âgées dans les foyers de soins.’"
}, {
  id: "16",
  staffName: "Lisa Cyr",
  staffImg: "/assets/img/about/staff-placeholder-2.png",
  staffBio: "I joined the Garderie Bimbo Daycare team in August of 2020 as the new director. Although I am fairly new to the center, I have been working in the childcare sector since 2007. I have a passion for helping others grow. One of my favorite parts of being a director is the ability to give my educators a positive work place and to encourage them to always do their best. When not at the daycare, I can usually be found outdoors with my two children aged 7 and 2, we love going on family adventures. I also enjoy reading a good book.",
  staffBiofr: "J’ai joint l’équipe de la Garderie Bimbo Daycare en août 2020 à titre de nouvelle directrice. Bien que je suis assez nouvelle au centre, je travaille dans le secteur de la petite enfance depuis 2007. J’ai une passion pour aider les autres à grandir. Une de mes parties préférées d’être directrice est d’être capable de donner à mes éducateurs un lieu de travail positif et de les encourager à toujours faire de leur mieux. Quand je ne suis pas à la garderie, je peux être retrouvée à l’extérieur avec mes deux enfants âgés de 7 et 2 ans, nous aimons aller pour des aventures en famille. J’aime aussi la lecture."
}];
var __N_SSG = true;
function Page(_ref) {
  _s();

  var _this = this;

  var props = _ref.props;

  var _useTranslation = Object(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      t = _useTranslation.t;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var changeLangButtonName;

  if (router.locale === 'fr') {
    changeLangButtonName = "Français";
  } else {
    changeLangButtonName = "English";
  }

  var Staffs = allstaff.slice(0, 22).map(function (staff) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-12",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "team-member keystaff d-flex align-items-center justify-content-between",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "member-info d-md-flex align-items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "left-sec col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
              width: 362,
              height: 240,
              alt: staff.staffName,
              src: staff.staffImg
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "pt-2",
              children: staff.staffName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 16
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "right-sec col-md-8 text-left",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: router.locale === "fr" ? staff.staffBiofr : staff.staffBio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 18
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }, _this)
    }, staff.id, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [t('common:staff'), " | ", t('common:meta-title')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: t('common:meta-description')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-padding sub-page mt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-12 col-lg-10 offset-lg-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "section-tittle text-center",
                  "data-aos": "fade-in",
                  "data-aos-duration": "1500",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    children: t('common:staff-hero-title')
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 35
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: t('common:staff-text')
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 35
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 31
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 23
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "keystaff",
              "data-aos": "fade-in",
              "data-aos-duration": "1500",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_shuffle__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  children: Staffs
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 23
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Services__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 165,
    columnNumber: 3
  }, this);
}

_s(Page, "4RnRNJiHpB9q7GSIHCO6Xnv5sUA=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__["default"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = Page;

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NoYWluLWZ1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLXRyYW5zaXRpb24tZ3JvdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaHVmZmxlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2h1ZmZsZS9saWIvc2h1ZmZsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9DaGlsZE1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10d2Vlbi1zdGF0ZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0YWZmLmpzIl0sIm5hbWVzIjpbImFsbHN0YWZmIiwiaWQiLCJzdGFmZk5hbWUiLCJzdGFmZkltZyIsInN0YWZmQmlvIiwic3RhZmZCaW9mciIsIlBhZ2UiLCJwcm9wcyIsInVzZVRyYW5zbGF0aW9uIiwidCIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYW5nZUxhbmdCdXR0b25OYW1lIiwibG9jYWxlIiwiU3RhZmZzIiwic2xpY2UiLCJtYXAiLCJzdGFmZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjs7QUFFQSxrQ0FBa0Msb0JBQW9COztBQUV0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHVDQUF1QztBQUN2QztBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxLQUFxQywrUEFBK1AsU0FBTTs7QUFFbFQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNB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RUFBQyw4QkFBZjtBQUFBLHVDQUNJO0FBQUssMkJBQVMsRUFBQyw0QkFBZjtBQUE0Qyw4QkFBUyxTQUFyRDtBQUErRCx1Q0FBa0IsTUFBakY7QUFBQSwwQ0FDSTtBQUFBLDhCQUFLQSxDQUFDLENBQUMseUJBQUQ7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBRUk7QUFBQSw4QkFBSUEsQ0FBQyxDQUFDLG1CQUFEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQVVJO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQTBCLDBCQUFTLFNBQW5DO0FBQTZDLG1DQUFrQixNQUEvRDtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxLQUFmO0FBQUEsdUNBRVkscUVBQUMsb0RBQUQ7QUFBQSw0QkFDRUs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFtQ0kscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXdDQTs7R0F4RXVCUixJO1VBRVJFLHFFLEVBRUFHLHFEOzs7S0FKUUwsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGFmZi45ZDljNzlkZjljM2U0MWU2NTgwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNoYWluKCl7XG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gIHZhciBhcmdzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG5cbiAgYXJncyA9IGFyZ3MuZmlsdGVyKGZ1bmN0aW9uKGZuKXsgcmV0dXJuIGZuICE9IG51bGwgfSlcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWRcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSByZXR1cm4gYXJnc1swXVxuXG4gIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihjdXJyZW50LCBuZXh0KXtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgY3VycmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgbmV4dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0pXG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2h1ZmZsZSA9IHJlcXVpcmUoJy4vbGliL3NodWZmbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaHVmZmxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX3JlYWN0VHdlZW5TdGF0ZSA9IHJlcXVpcmUoJ3JlYWN0LXR3ZWVuLXN0YXRlJyk7XG5cbnZhciBfcmVhY3RUd2VlblN0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VHdlZW5TdGF0ZSk7XG5cbnZhciBfcmVhY3RBZGRvbnNUcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtdHJhbnNpdGlvbi1ncm91cCcpO1xuXG52YXIgX3JlYWN0QWRkb25zVHJhbnNpdGlvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0QWRkb25zVHJhbnNpdGlvbkdyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfSAvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6MCAqL1xuLypnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZ2V0Q29tcHV0ZWRTdHlsZSovXG5cbnZhciBDbG9uZXMgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1NodWZmbGVDbG9uZXMnLFxuXG4gIF9jaGlsZHJlbldpdGhQb3NpdGlvbnM6IGZ1bmN0aW9uIF9jaGlsZHJlbldpdGhQb3NpdGlvbnMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIHN0eWxlID0gX3RoaXMucHJvcHMucG9zaXRpb25zW2NoaWxkLmtleV07XG4gICAgICB2YXIga2V5ID0gY2hpbGQua2V5O1xuICAgICAgY2hpbGRyZW4ucHVzaChfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDbG9uZSwge1xuICAgICAgICBjaGlsZDogY2hpbGQsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGluaXRpYWw6IF90aGlzLnByb3BzLmluaXRpYWwsXG4gICAgICAgIGZhZGU6IF90aGlzLnByb3BzLmZhZGUsXG4gICAgICAgIHNjYWxlOiBfdGhpcy5wcm9wcy5zY2FsZSxcbiAgICAgICAgZHVyYXRpb246IF90aGlzLnByb3BzLmR1cmF0aW9uIH0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hpbGRyZW4uc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEua2V5IDwgYi5rZXkgPyAtMSA6IGEua2V5ID4gYi5rZXkgPyAxIDogMDtcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ1NodWZmbGVDbG9uZXMnIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0QWRkb25zVHJhbnNpdGlvbkdyb3VwMi5kZWZhdWx0LFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLl9jaGlsZHJlbldpdGhQb3NpdGlvbnMoKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgQ2xvbmUgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtfcmVhY3RUd2VlblN0YXRlMi5kZWZhdWx0Lk1peGluXSxcbiAgZGlzcGxheU5hbWU6ICdTaHVmZmxlQ2xvbmUnLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnByb3BzLnN0eWxlID8gdGhpcy5wcm9wcy5zdHlsZS50b3AgOiAwLFxuICAgICAgbGVmdDogdGhpcy5wcm9wcy5zdHlsZSA/IHRoaXMucHJvcHMuc3R5bGUubGVmdCA6IDAsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiAxXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbEFwcGVhcjogZnVuY3Rpb24gY29tcG9uZW50V2lsbEFwcGVhcihjYikge1xuICAgIHRoaXMudHdlZW5TdGF0ZSgnb3BhY2l0eScsIHtcbiAgICAgIGVhc2luZzogX3JlYWN0VHdlZW5TdGF0ZTIuZGVmYXVsdC5lYXNpbmdUeXBlcy5lYXNlT3V0U2luZSxcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmR1cmF0aW9uLFxuICAgICAgYmVnaW5WYWx1ZTogdGhpcy5wcm9wcy5pbml0aWFsID8gMCA6IDEsXG4gICAgICBlbmRWYWx1ZTogMSxcbiAgICAgIG9uRW5kOiBjYlxuICAgIH0pO1xuICB9LFxuICBjb21wb25lbnRXaWxsRW50ZXI6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxFbnRlcihjYikge1xuICAgIHRoaXMudHdlZW5TdGF0ZSgnb3BhY2l0eScsIHtcbiAgICAgIGVhc2luZzogX3JlYWN0VHdlZW5TdGF0ZTIuZGVmYXVsdC5lYXNpbmdUeXBlcy5lYXNlT3V0U2luZSxcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmR1cmF0aW9uLFxuICAgICAgYmVnaW5WYWx1ZTogMCxcbiAgICAgIGVuZFZhbHVlOiAxLFxuICAgICAgb25FbmQ6IGNiXG4gICAgfSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxMZWF2ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbExlYXZlKGNiKSB7XG4gICAgdGhpcy50d2VlblN0YXRlKCdvcGFjaXR5Jywge1xuICAgICAgZWFzaW5nOiBfcmVhY3RUd2VlblN0YXRlMi5kZWZhdWx0LmVhc2luZ1R5cGVzLmVhc2VPdXRTaW5lLFxuICAgICAgZHVyYXRpb246IHRoaXMucHJvcHMuZHVyYXRpb24sXG4gICAgICBlbmRWYWx1ZTogMCxcbiAgICAgIG9uRW5kOiBmdW5jdGlvbiBvbkVuZCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjYigpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gVGhpcyB0cnkgY2F0Y2ggaGFuZGxlcyBjb21wb25lbnQgdW1vdW50aW5nIGp1bXBpbmcgdGhlIGd1blxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy50d2VlblN0YXRlKCd0b3AnLCB7XG4gICAgICBlYXNpbmc6IF9yZWFjdFR3ZWVuU3RhdGUyLmRlZmF1bHQuZWFzaW5nVHlwZXMuZWFzZU91dFNpbmUsXG4gICAgICBkdXJhdGlvbjogbmV4dFByb3BzLmR1cmF0aW9uLFxuICAgICAgZW5kVmFsdWU6IG5leHRQcm9wcy5zdHlsZS50b3BcbiAgICB9KTtcbiAgICB0aGlzLnR3ZWVuU3RhdGUoJ2xlZnQnLCB7XG4gICAgICBlYXNpbmc6IF9yZWFjdFR3ZWVuU3RhdGUyLmRlZmF1bHQuZWFzaW5nVHlwZXMuZWFzZU91dFNpbmUsXG4gICAgICBkdXJhdGlvbjogbmV4dFByb3BzLmR1cmF0aW9uLFxuICAgICAgZW5kVmFsdWU6IG5leHRQcm9wcy5zdHlsZS5sZWZ0XG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIGlmICh0aGlzLnByb3BzLnN0eWxlKSB7XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgdG9wOiB0aGlzLmdldFR3ZWVuaW5nVmFsdWUoJ3RvcCcpLFxuICAgICAgICBsZWZ0OiB0aGlzLmdldFR3ZWVuaW5nVmFsdWUoJ2xlZnQnKSxcbiAgICAgICAgb3BhY2l0eTogdGhpcy5wcm9wcy5mYWRlID8gdGhpcy5nZXRUd2VlbmluZ1ZhbHVlKCdvcGFjaXR5JykgOiAxLFxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMucHJvcHMuc2NhbGUgPyAnc2NhbGUoJyArIHRoaXMuZ2V0VHdlZW5pbmdWYWx1ZSgnb3BhY2l0eScpICsgJyknIDogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGNlbnRlcicsXG4gICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnN0eWxlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuc3R5bGUuaGVpZ2h0LFxuICAgICAgICBwb3NpdGlvbjogdGhpcy5wcm9wcy5zdHlsZS5wb3NpdGlvblxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGtleSA9IHRoaXMucHJvcHMua2V5O1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGQsIHsgc3R5bGU6IHN0eWxlLCBrZXk6IGtleSB9KTtcbiAgfVxufSk7XG5cbnZhciBTaHVmZmxlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ1NodWZmbGUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGR1cmF0aW9uOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcixcbiAgICBzY2FsZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICAgIGZhZGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpbml0aWFsOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIHNjYWxlOiB0cnVlLFxuICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgIGluaXRpYWw6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICByZWFkeTogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fbWFrZVBvcnRhbCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZW5kZXJDbG9uZXNJbml0aWFsbHkpO1xuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fcG9ydGFsTm9kZSk7XG4gICAgX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5jb250YWluZXIpLnJlbW92ZUNoaWxkKHRoaXMuX3BvcnRhbE5vZGUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZW5kZXJDbG9uZXNJbml0aWFsbHkpO1xuICB9LFxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKG5leHRQcm9wcyk7XG4gIH0sXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUucmVhZHkgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZHk6IHRydWUgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuX3JlbmRlckNsb25lc0luaXRpYWxseSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlckNsb25lc1RvTmV3UG9zaXRpb25zKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfSxcbiAgX21ha2VQb3J0YWw6IGZ1bmN0aW9uIF9tYWtlUG9ydGFsKCkge1xuICAgIHRoaXMuX3BvcnRhbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl9wb3J0YWxOb2RlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLl9wb3J0YWxOb2RlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIHRoaXMuX3BvcnRhbE5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY29udGFpbmVyKS5hcHBlbmRDaGlsZCh0aGlzLl9wb3J0YWxOb2RlKTtcbiAgfSxcbiAgX2FkZFRyYW5zaXRpb25FbmRFdmVudDogZnVuY3Rpb24gX2FkZFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgICBzZXRUaW1lb3V0KHRoaXMuX2ZpbmlzaEFuaW1hdGlvbiwgdGhpcy5wcm9wcy5kdXJhdGlvbik7XG4gIH0sXG4gIF9zdGFydEFuaW1hdGlvbjogZnVuY3Rpb24gX3N0YXJ0QW5pbWF0aW9uKG5leHRQcm9wcykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuYW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNsb25lUHJvcHMgPSAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIG5leHRQcm9wcywge1xuICAgICAgcG9zaXRpb25zOiB0aGlzLl9nZXRQb3NpdGlvbnMoKSxcbiAgICAgIGluaXRpYWw6IHRoaXMucHJvcHMuaW5pdGlhbCxcbiAgICAgIGZhZGU6IHRoaXMucHJvcHMuZmFkZSxcbiAgICAgIHNjYWxlOiB0aGlzLnByb3BzLnNjYWxlLFxuICAgICAgZHVyYXRpb246IHRoaXMucHJvcHMuZHVyYXRpb25cbiAgICB9KTtcbiAgICB0aGlzLl9yZW5kZXJDbG9uZXMoY2xvbmVQcm9wcywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLl9hZGRUcmFuc2l0aW9uRW5kRXZlbnQoKTtcbiAgICAgIF90aGlzMy5zZXRTdGF0ZSh7IGFuaW1hdGluZzogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfSxcbiAgX3JlbmRlckNsb25lc1RvTmV3UG9zaXRpb25zOiBmdW5jdGlvbiBfcmVuZGVyQ2xvbmVzVG9OZXdQb3NpdGlvbnMocHJvcHMpIHtcbiAgICB2YXIgY2xvbmVQcm9wcyA9ICgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICAgIHBvc2l0aW9uczogdGhpcy5fZ2V0UG9zaXRpb25zKCksXG4gICAgICBpbml0aWFsOiB0aGlzLnByb3BzLmluaXRpYWwsXG4gICAgICBmYWRlOiB0aGlzLnByb3BzLmZhZGUsXG4gICAgICBzY2FsZTogdGhpcy5wcm9wcy5zY2FsZSxcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmR1cmF0aW9uXG4gICAgfSk7XG4gICAgdGhpcy5fcmVuZGVyQ2xvbmVzKGNsb25lUHJvcHMpO1xuICB9LFxuICBfZmluaXNoQW5pbWF0aW9uOiBmdW5jdGlvbiBfZmluaXNoQW5pbWF0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRpbmc6IGZhbHNlIH0pO1xuICB9LFxuICBfZ2V0UG9zaXRpb25zOiBmdW5jdGlvbiBfZ2V0UG9zaXRpb25zKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIHBvc2l0aW9ucyA9IHt9O1xuICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIHJlZiA9IGNoaWxkLmtleTtcbiAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzNC5yZWZzW3JlZl0pO1xuICAgICAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgdmFyIG1hcmdpblRvcCA9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wLCAxMCk7XG4gICAgICB2YXIgbWFyZ2luTGVmdCA9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdCwgMTApO1xuICAgICAgdmFyIHBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IG5vZGUub2Zmc2V0VG9wIC0gbWFyZ2luVG9wLFxuICAgICAgICBsZWZ0OiBub2RlLm9mZnNldExlZnQgLSBtYXJnaW5MZWZ0LFxuICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH07XG4gICAgICBwb3NpdGlvbnNbcmVmXSA9IHBvc2l0aW9uO1xuICAgIH0pO1xuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0sXG4gIF9yZW5kZXJDbG9uZXNJbml0aWFsbHk6IGZ1bmN0aW9uIF9yZW5kZXJDbG9uZXNJbml0aWFsbHkoKSB7XG4gICAgdmFyIGNsb25lUHJvcHMgPSAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgIHBvc2l0aW9uczogdGhpcy5fZ2V0UG9zaXRpb25zKCksXG4gICAgICBpbml0aWFsOiB0aGlzLnByb3BzLmluaXRpYWwsXG4gICAgICBmYWRlOiB0aGlzLnByb3BzLmZhZGUsXG4gICAgICBzY2FsZTogdGhpcy5wcm9wcy5zY2FsZSxcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmR1cmF0aW9uXG4gICAgfSk7XG4gICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHRoaXMsIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENsb25lcywgY2xvbmVQcm9wcyksIHRoaXMuX3BvcnRhbE5vZGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkeTogdHJ1ZSB9KTtcbiAgfSxcbiAgX3JlbmRlckNsb25lczogZnVuY3Rpb24gX3JlbmRlckNsb25lcyhwcm9wcywgY2IpIHtcbiAgICBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIodGhpcywgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2xvbmVzLCBwcm9wcyksIHRoaXMuX3BvcnRhbE5vZGUsIGNiKTtcbiAgfSxcbiAgX2NoaWxkcmVuV2l0aFJlZnM6IGZ1bmN0aW9uIF9jaGlsZHJlbldpdGhSZWZzKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgcmVmOiBjaGlsZC5rZXkgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpbml0aWFsID0gX3Byb3BzLmluaXRpYWwsXG4gICAgICAgIGZhZGUgPSBfcHJvcHMuZmFkZSxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydpbml0aWFsJywgJ2ZhZGUnLCAnZHVyYXRpb24nXSk7XG5cbiAgICB2YXIgc2hvd0NvbnRhaW5lciA9IGluaXRpYWwgPyAwIDogMTtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZWFkeSkge1xuICAgICAgc2hvd0NvbnRhaW5lciA9IDA7XG4gICAgfVxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoeyByZWY6ICdjb250YWluZXInLCBzdHlsZTogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9IH0sIHByb3BzKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogeyBvcGFjaXR5OiBzaG93Q29udGFpbmVyIH0gfSxcbiAgICAgICAgdGhpcy5fY2hpbGRyZW5XaXRoUmVmcygpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNodWZmbGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NoYWluRnVuY3Rpb24gPSByZXF1aXJlKCdjaGFpbi1mdW5jdGlvbicpO1xuXG52YXIgX2NoYWluRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW5GdW5jdGlvbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX0NoaWxkTWFwcGluZyA9IHJlcXVpcmUoJy4vdXRpbHMvQ2hpbGRNYXBwaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgY2hpbGRGYWN0b3J5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ3NwYW4nLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxufTtcblxudmFyIFRyYW5zaXRpb25Hcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUcmFuc2l0aW9uR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb25Hcm91cChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uR3JvdXApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5wZXJmb3JtQXBwZWFyID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsQXBwZWFyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsQXBwZWFyKF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZyhrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZEFwcGVhcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkQXBwZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoIWN1cnJlbnRDaGlsZE1hcHBpbmcgfHwgIWN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIHdhcyByZW1vdmVkIGJlZm9yZSBpdCBoYWQgZnVsbHkgYXBwZWFyZWQuIFJlbW92ZSBpdC5cbiAgICAgICAgX3RoaXMucGVyZm9ybUxlYXZlKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxFbnRlcihfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZyA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRFbnRlcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIoKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmICghY3VycmVudENoaWxkTWFwcGluZyB8fCAhY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIFRoaXMgd2FzIHJlbW92ZWQgYmVmb3JlIGl0IGhhZCBmdWxseSBlbnRlcmVkLiBSZW1vdmUgaXQuXG4gICAgICAgIF90aGlzLnBlcmZvcm1MZWF2ZShrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbExlYXZlKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUoX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBzb21ld2hhdCBkYW5nZXJvdXMgYi9jIGl0IGNhbGxzIHNldFN0YXRlKClcbiAgICAgICAgLy8gYWdhaW4sIGVmZmVjdGl2ZWx5IG11dGF0aW5nIHRoZSBjb21wb25lbnQgYmVmb3JlIGFsbCB0aGUgd29ya1xuICAgICAgICAvLyBpcyBkb25lLlxuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkTGVhdmUpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZExlYXZlKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoY3VycmVudENoaWxkTWFwcGluZyAmJiBjdXJyZW50Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gVGhpcyBlbnRlcmVkIGFnYWluIGJlZm9yZSBpdCBmdWxseSBsZWZ0LiBBZGQgaXQgYWdhaW4uXG4gICAgICAgIF90aGlzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgIHZhciBuZXdDaGlsZHJlbiA9IF9leHRlbmRzKHt9LCBzdGF0ZS5jaGlsZHJlbik7XG4gICAgICAgICAgZGVsZXRlIG5ld0NoaWxkcmVuW2tleV07XG4gICAgICAgICAgcmV0dXJuIHsgY2hpbGRyZW46IG5ld0NoaWxkcmVuIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jaGlsZFJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShwcm9wcy5jaGlsZHJlbilcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXMgPSB7fTtcbiAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgaW5pdGlhbENoaWxkTWFwcGluZyA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgZm9yICh2YXIga2V5IGluIGluaXRpYWxDaGlsZE1hcHBpbmcpIHtcbiAgICAgIGlmIChpbml0aWFsQ2hpbGRNYXBwaW5nW2tleV0pIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtQXBwZWFyKGtleSwgdGhpcy5jaGlsZFJlZnNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIG5leHRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKG5leHRQcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZE1hcHBpbmcubWVyZ2VDaGlsZE1hcHBpbmdzKShwcmV2Q2hpbGRNYXBwaW5nLCBuZXh0Q2hpbGRNYXBwaW5nKVxuICAgIH0pO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG5leHRDaGlsZE1hcHBpbmcpIHtcbiAgICAgIHZhciBoYXNQcmV2ID0gcHJldkNoaWxkTWFwcGluZyAmJiBwcmV2Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICBpZiAobmV4dENoaWxkTWFwcGluZ1trZXldICYmICFoYXNQcmV2ICYmICF0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0pIHtcbiAgICAgICAgdGhpcy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2tleSBpbiBwcmV2Q2hpbGRNYXBwaW5nKSB7XG4gICAgICB2YXIgaGFzTmV4dCA9IG5leHRDaGlsZE1hcHBpbmcgJiYgbmV4dENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KTtcbiAgICAgIGlmIChwcmV2Q2hpbGRNYXBwaW5nW19rZXldICYmICFoYXNOZXh0ICYmICF0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW19rZXldKSB7XG4gICAgICAgIHRoaXMua2V5c1RvTGVhdmUucHVzaChfa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB3ZSB3YW50IHRvIHNvbWVkYXkgY2hlY2sgZm9yIHJlb3JkZXJpbmcsIHdlIGNvdWxkIGRvIGl0IGhlcmUuXG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIga2V5c1RvRW50ZXIgPSB0aGlzLmtleXNUb0VudGVyO1xuICAgIHRoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICBrZXlzVG9FbnRlci5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczIucGVyZm9ybUVudGVyKGtleSwgX3RoaXMyLmNoaWxkUmVmc1trZXldKTtcbiAgICB9KTtcblxuICAgIHZhciBrZXlzVG9MZWF2ZSA9IHRoaXMua2V5c1RvTGVhdmU7XG4gICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICAgIGtleXNUb0xlYXZlLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5wZXJmb3JtTGVhdmUoa2V5LCBfdGhpczIuY2hpbGRSZWZzW2tleV0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgLy8gVE9ETzogd2UgY291bGQgZ2V0IHJpZCBvZiB0aGUgbmVlZCBmb3IgdGhlIHdyYXBwZXIgbm9kZVxuICAgIC8vIGJ5IGNsb25pbmcgYSBzaW5nbGUgY2hpbGRcbiAgICB2YXIgY2hpbGRyZW5Ub1JlbmRlciA9IFtdO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3Aoa2V5KSB7XG4gICAgICB2YXIgY2hpbGQgPSBfdGhpczMuc3RhdGUuY2hpbGRyZW5ba2V5XTtcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICB2YXIgaXNDYWxsYmFja1JlZiA9IHR5cGVvZiBjaGlsZC5yZWYgIT09ICdzdHJpbmcnO1xuICAgICAgICB2YXIgZmFjdG9yeUNoaWxkID0gX3RoaXMzLnByb3BzLmNoaWxkRmFjdG9yeShjaGlsZCk7XG4gICAgICAgIHZhciByZWYgPSBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgIF90aGlzMy5jaGlsZFJlZnNba2V5XSA9IHI7XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoaXNDYWxsYmFja1JlZiwgJ3N0cmluZyByZWZzIGFyZSBub3Qgc3VwcG9ydGVkIG9uIGNoaWxkcmVuIG9mIFRyYW5zaXRpb25Hcm91cCBhbmQgd2lsbCBiZSBpZ25vcmVkLiAnICsgJ1BsZWFzZSB1c2UgYSBjYWxsYmFjayByZWYgaW5zdGVhZDogaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9yZWZzLWFuZC10aGUtZG9tLmh0bWwjdGhlLXJlZi1jYWxsYmFjay1hdHRyaWJ1dGUnKSA6IHZvaWQgMDtcblxuICAgICAgICAvLyBBbHdheXMgY2hhaW5pbmcgdGhlIHJlZnMgbGVhZHMgdG8gcHJvYmxlbXMgd2hlbiB0aGUgY2hpbGRGYWN0b3J5XG4gICAgICAgIC8vIHdyYXBzIHRoZSBjaGlsZC4gVGhlIGNoaWxkIHJlZiBjYWxsYmFjayBnZXRzIGNhbGxlZCB0d2ljZSB3aXRoIHRoZVxuICAgICAgICAvLyB3cmFwcGVyIGFuZCB0aGUgY2hpbGQuIFNvIHdlIG9ubHkgbmVlZCB0byBjaGFpbiB0aGUgcmVmIGlmIHRoZVxuICAgICAgICAvLyBmYWN0b3J5Q2hpbGQgaXMgbm90IGRpZmZlcmVudCBmcm9tIGNoaWxkLlxuICAgICAgICBpZiAoZmFjdG9yeUNoaWxkID09PSBjaGlsZCAmJiBpc0NhbGxiYWNrUmVmKSB7XG4gICAgICAgICAgcmVmID0gKDAsIF9jaGFpbkZ1bmN0aW9uMi5kZWZhdWx0KShjaGlsZC5yZWYsIHJlZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGxlYXZpbmcuXG4gICAgICAgIC8vIFRoZSBub3JtYWwgUmVhY3Qgd2F5IHRvIGRvIGl0IHdvbid0IHdvcmsgc2luY2UgdGhlIGNoaWxkIHdpbGwgaGF2ZVxuICAgICAgICAvLyBhbHJlYWR5IGJlZW4gcmVtb3ZlZC4gSW4gY2FzZSB5b3UgbmVlZCB0aGlzIGJlaGF2aW9yIHlvdSBjYW4gcHJvdmlkZVxuICAgICAgICAvLyBhIGNoaWxkRmFjdG9yeSBmdW5jdGlvbiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlXG4gICAgICAgIC8vIGxlYXZpbmcuXG4gICAgICAgIGNoaWxkcmVuVG9SZW5kZXIucHVzaChfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGZhY3RvcnlDaGlsZCwge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHJlZjogcmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuc3RhdGUuY2hpbGRyZW4pIHtcbiAgICAgIF9sb29wKGtleSk7XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IGZvcndhcmQgVHJhbnNpdGlvbkdyb3VwIHByb3BzIHRvIHByaW1pdGl2ZSBET00gbm9kZXNcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25MZWF2ZTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25BcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25FbnRlcjtcbiAgICBkZWxldGUgcHJvcHMuY2hpbGRGYWN0b3J5O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMuY29tcG9uZW50O1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuY29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW5Ub1JlbmRlcik7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb25Hcm91cDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb25Hcm91cC5kaXNwbGF5TmFtZSA9ICdUcmFuc2l0aW9uR3JvdXAnO1xuXG5cblRyYW5zaXRpb25Hcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYW5zaXRpb25Hcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nO1xuZXhwb3J0cy5tZXJnZUNoaWxkTWFwcGluZ3MgPSBtZXJnZUNoaWxkTWFwcGluZ3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIEdpdmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYCwgcmV0dXJuIGFuIG9iamVjdCBtYXBwaW5nIGtleSB0byBjaGlsZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICogQHJldHVybiB7b2JqZWN0fSBNYXBwaW5nIG9mIGtleSB0byBjaGlsZFxuICovXG5mdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4pIHtcbiAgaWYgKCFjaGlsZHJlbikge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0ge307XG4gIF9yZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXN1bHRbY2hpbGQua2V5XSA9IGNoaWxkO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBXaGVuIHlvdSdyZSBhZGRpbmcgb3IgcmVtb3ZpbmcgY2hpbGRyZW4gc29tZSBtYXkgYmUgYWRkZWQgb3IgcmVtb3ZlZCBpbiB0aGVcbiAqIHNhbWUgcmVuZGVyIHBhc3MuIFdlIHdhbnQgdG8gc2hvdyAqYm90aCogc2luY2Ugd2Ugd2FudCB0byBzaW11bHRhbmVvdXNseVxuICogYW5pbWF0ZSBlbGVtZW50cyBpbiBhbmQgb3V0LiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgcHJldmlvdXMgc2V0IG9mIGtleXNcbiAqIGFuZCBhIG5ldyBzZXQgb2Yga2V5cyBhbmQgbWVyZ2VzIHRoZW0gd2l0aCBpdHMgYmVzdCBndWVzcyBvZiB0aGUgY29ycmVjdFxuICogb3JkZXJpbmcuIEluIHRoZSBmdXR1cmUgd2UgbWF5IGV4cG9zZSBzb21lIG9mIHRoZSB1dGlsaXRpZXMgaW5cbiAqIFJlYWN0TXVsdGlDaGlsZCB0byBtYWtlIHRoaXMgZWFzeSwgYnV0IGZvciBub3cgUmVhY3QgaXRzZWxmIGRvZXMgbm90XG4gKiBkaXJlY3RseSBoYXZlIHRoaXMgY29uY2VwdCBvZiB0aGUgdW5pb24gb2YgcHJldkNoaWxkcmVuIGFuZCBuZXh0Q2hpbGRyZW5cbiAqIHNvIHdlIGltcGxlbWVudCBpdCBoZXJlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2IHByZXYgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcGFyYW0ge29iamVjdH0gbmV4dCBuZXh0IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHJldHVybiB7b2JqZWN0fSBhIGtleSBzZXQgdGhhdCBjb250YWlucyBhbGwga2V5cyBpbiBgcHJldmAgYW5kIGFsbCBrZXlzXG4gKiBpbiBgbmV4dGAgaW4gYSByZWFzb25hYmxlIG9yZGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZUNoaWxkTWFwcGluZ3MocHJldiwgbmV4dCkge1xuICBwcmV2ID0gcHJldiB8fCB7fTtcbiAgbmV4dCA9IG5leHQgfHwge307XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWVGb3JLZXkoa2V5KSB7XG4gICAgaWYgKG5leHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG5leHRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldltrZXldO1xuICB9XG5cbiAgLy8gRm9yIGVhY2gga2V5IG9mIGBuZXh0YCwgdGhlIGxpc3Qgb2Yga2V5cyB0byBpbnNlcnQgYmVmb3JlIHRoYXQga2V5IGluXG4gIC8vIHRoZSBjb21iaW5lZCBsaXN0XG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSB7fTtcblxuICB2YXIgcGVuZGluZ0tleXMgPSBbXTtcbiAgZm9yICh2YXIgcHJldktleSBpbiBwcmV2KSB7XG4gICAgaWYgKG5leHQuaGFzT3duUHJvcGVydHkocHJldktleSkpIHtcbiAgICAgIGlmIChwZW5kaW5nS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgbmV4dEtleXNQZW5kaW5nW3ByZXZLZXldID0gcGVuZGluZ0tleXM7XG4gICAgICAgIHBlbmRpbmdLZXlzID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdLZXlzLnB1c2gocHJldktleSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGkgPSB2b2lkIDA7XG4gIHZhciBjaGlsZE1hcHBpbmcgPSB7fTtcbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZy5oYXNPd25Qcm9wZXJ0eShuZXh0S2V5KSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgfVxuXG4gIC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuICBmb3IgKGkgPSAwOyBpIDwgcGVuZGluZ0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjaGlsZE1hcHBpbmdbcGVuZGluZ0tleXNbaV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ0tleXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkTWFwcGluZztcbn0iLCIhZnVuY3Rpb24oZSxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLnR3ZWVuU3RhdGU9bigpOmUudHdlZW5TdGF0ZT1uKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIGE9dFtyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIGVbcl0uY2FsbChhLmV4cG9ydHMsYSxhLmV4cG9ydHMsbiksYS5sb2FkZWQ9ITAsYS5leHBvcnRzfXZhciB0PXt9O3JldHVybiBuLm09ZSxuLmM9dCxuLnA9XCJcIixuKDApfSh7MDpmdW5jdGlvbihlLG4sdCl7ZS5leHBvcnRzPXQoOTApfSwxOmZ1bmN0aW9uKGUsbil7ZnVuY3Rpb24gdCgpe2M9ITEsby5sZW5ndGg/cz1vLmNvbmNhdChzKTpmPS0xLHMubGVuZ3RoJiZyKCl9ZnVuY3Rpb24gcigpe2lmKCFjKXt2YXIgZT1zZXRUaW1lb3V0KHQpO2M9ITA7Zm9yKHZhciBuPXMubGVuZ3RoO247KXtmb3Iobz1zLHM9W107KytmPG47KW8mJm9bZl0ucnVuKCk7Zj0tMSxuPXMubGVuZ3RofW89bnVsbCxjPSExLGNsZWFyVGltZW91dChlKX19ZnVuY3Rpb24gYShlLG4pe3RoaXMuZnVuPWUsdGhpcy5hcnJheT1ufWZ1bmN0aW9uIHUoKXt9dmFyIG8saT1lLmV4cG9ydHM9e30scz1bXSxjPSExLGY9LTE7aS5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgbj1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyluW3QtMV09YXJndW1lbnRzW3RdO3MucHVzaChuZXcgYShlLG4pKSwxIT09cy5sZW5ndGh8fGN8fHNldFRpbWVvdXQociwwKX0sYS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0saS50aXRsZT1cImJyb3dzZXJcIixpLmJyb3dzZXI9ITAsaS5lbnY9e30saS5hcmd2PVtdLGkudmVyc2lvbj1cIlwiLGkudmVyc2lvbnM9e30saS5vbj11LGkuYWRkTGlzdGVuZXI9dSxpLm9uY2U9dSxpLm9mZj11LGkucmVtb3ZlTGlzdGVuZXI9dSxpLnJlbW92ZUFsbExpc3RlbmVycz11LGkuZW1pdD11LGkuYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0saS5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0saS5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LGkudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LDkwOmZ1bmN0aW9uKGUsbix0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgxNjUpLHU9cihhKSxvPXQoOTEpLGk9cihvKSxzPVwiQURESVRJVkVcIixjPWEuZWFzZUluT3V0UXVhZCxmPTMwMCxsPTAsaD17QURESVRJVkU6XCJBRERJVElWRVwiLERFU1RSVUNUSVZFOlwiREVTVFJVQ1RJVkVcIn0sdj17X3JhZklEOm51bGwsZ2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJue3R3ZWVuUXVldWU6W119fSxjb21wb25lbnRXaWxsVW5tb3VudDpmdW5jdGlvbigpe2lbXCJkZWZhdWx0XCJdLmNhbmNlbCh0aGlzLl9yYWZJRCksdGhpcy5fcmFmSUQ9LTF9LHR3ZWVuU3RhdGU6ZnVuY3Rpb24oZSxuKXt2YXIgdD10aGlzLHI9bi5lYXNpbmcsYT1uLmR1cmF0aW9uLHU9bi5kZWxheSxvPW4uYmVnaW5WYWx1ZSx2PW4uZW5kVmFsdWUsZD1uLm9uRW5kLHA9bi5zdGFja0JlaGF2aW9yO3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24obil7dmFyIEk9bix3PXZvaWQgMCxnPXZvaWQgMDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSl3PWUsZz1lO2Vsc2V7Zm9yKHZhciBNPTA7TTxlLmxlbmd0aC0xO00rKylJPUlbZVtNXV07dz1lW2UubGVuZ3RoLTFdLGc9ZS5qb2luKFwifFwiKX12YXIgbT17ZWFzaW5nOnJ8fGMsZHVyYXRpb246bnVsbD09YT9mOmEsZGVsYXk6bnVsbD09dT9sOnUsYmVnaW5WYWx1ZTpudWxsPT1vP0lbd106byxlbmRWYWx1ZTp2LG9uRW5kOmQsc3RhY2tCZWhhdmlvcjpwfHxzfSx4PW4udHdlZW5RdWV1ZTtyZXR1cm4gbS5zdGFja0JlaGF2aW9yPT09aC5ERVNUUlVDVElWRSYmKHg9bi50d2VlblF1ZXVlLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXRoSGFzaCE9PWd9KSkseC5wdXNoKHtwYXRoSGFzaDpnLGNvbmZpZzptLGluaXRUaW1lOkRhdGUubm93KCkrbS5kZWxheX0pLElbd109bS5lbmRWYWx1ZSwxPT09eC5sZW5ndGgmJih0Ll9yYWZJRD0oMCxpW1wiZGVmYXVsdFwiXSkodC5fcmFmQ2IpKSx7dHdlZW5RdWV1ZTp4fX0pfSxnZXRUd2VlbmluZ1ZhbHVlOmZ1bmN0aW9uKGUpe3ZhciBuPXRoaXMuc3RhdGUsdD12b2lkIDAscj12b2lkIDA7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpdD1uW2VdLHI9ZTtlbHNle3Q9bjtmb3IodmFyIGE9MDthPGUubGVuZ3RoO2ErKyl0PXRbZVthXV07cj1lLmpvaW4oXCJ8XCIpfWZvcih2YXIgdT1EYXRlLm5vdygpLGE9MDthPG4udHdlZW5RdWV1ZS5sZW5ndGg7YSsrKXt2YXIgbz1uLnR3ZWVuUXVldWVbYV0saT1vLnBhdGhIYXNoLHM9by5pbml0VGltZSxjPW8uY29uZmlnO2lmKGk9PT1yKXt2YXIgZj11LXM+Yy5kdXJhdGlvbj9jLmR1cmF0aW9uOk1hdGgubWF4KDAsdS1zKSxsPTA9PT1jLmR1cmF0aW9uP2MuZW5kVmFsdWU6Yy5lYXNpbmcoZixjLmJlZ2luVmFsdWUsYy5lbmRWYWx1ZSxjLmR1cmF0aW9uKSxoPWwtYy5lbmRWYWx1ZTt0Kz1ofX1yZXR1cm4gdH0sX3JhZkNiOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zdGF0ZTtpZigwIT09ZS50d2VlblF1ZXVlLmxlbmd0aCl7Zm9yKHZhciBuPURhdGUubm93KCksdD1bXSxyPTA7cjxlLnR3ZWVuUXVldWUubGVuZ3RoO3IrKyl7dmFyIGE9ZS50d2VlblF1ZXVlW3JdLHU9YS5pbml0VGltZSxvPWEuY29uZmlnO24tdTxvLmR1cmF0aW9uP3QucHVzaChhKTpvLm9uRW5kJiZvLm9uRW5kKCl9LTEhPT10aGlzLl9yYWZJRCYmKHRoaXMuc2V0U3RhdGUoe3R3ZWVuUXVldWU6dH0pLHRoaXMuX3JhZklEPSgwLGlbXCJkZWZhdWx0XCJdKSh0aGlzLl9yYWZDYikpfX19O25bXCJkZWZhdWx0XCJdPXtNaXhpbjp2LGVhc2luZ1R5cGVzOnVbXCJkZWZhdWx0XCJdLHN0YWNrQmVoYXZpb3I6aH0sZS5leHBvcnRzPW5bXCJkZWZhdWx0XCJdfSw5MTpmdW5jdGlvbihlLG4sdCl7Zm9yKHZhciByPXQoOTIpLGE9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdz97fTp3aW5kb3csdT1bXCJtb3pcIixcIndlYmtpdFwiXSxvPVwiQW5pbWF0aW9uRnJhbWVcIixpPWFbXCJyZXF1ZXN0XCIrb10scz1hW1wiY2FuY2VsXCIrb118fGFbXCJjYW5jZWxSZXF1ZXN0XCIrb10sYz0wO2M8dS5sZW5ndGgmJiFpO2MrKylpPWFbdVtjXStcIlJlcXVlc3RcIitvXSxzPWFbdVtjXStcIkNhbmNlbFwiK29dfHxhW3VbY10rXCJDYW5jZWxSZXF1ZXN0XCIrb107aWYoIWl8fCFzKXt2YXIgZj0wLGw9MCxoPVtdLHY9MWUzLzYwO2k9ZnVuY3Rpb24oZSl7aWYoMD09PWgubGVuZ3RoKXt2YXIgbj1yKCksdD1NYXRoLm1heCgwLHYtKG4tZikpO2Y9dCtuLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZT1oLnNsaWNlKDApO2gubGVuZ3RoPTA7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspaWYoIWVbbl0uY2FuY2VsbGVkKXRyeXtlW25dLmNhbGxiYWNrKGYpfWNhdGNoKHQpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyB0fSwwKX19LE1hdGgucm91bmQodCkpfXJldHVybiBoLnB1c2goe2hhbmRsZTorK2wsY2FsbGJhY2s6ZSxjYW5jZWxsZWQ6ITF9KSxsfSxzPWZ1bmN0aW9uKGUpe2Zvcih2YXIgbj0wO248aC5sZW5ndGg7bisrKWhbbl0uaGFuZGxlPT09ZSYmKGhbbl0uY2FuY2VsbGVkPSEwKX19ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBpLmNhbGwoYSxlKX0sZS5leHBvcnRzLmNhbmNlbD1mdW5jdGlvbigpe3MuYXBwbHkoYSxhcmd1bWVudHMpfX0sOTI6ZnVuY3Rpb24oZSxuLHQpeyhmdW5jdGlvbihuKXsoZnVuY3Rpb24oKXt2YXIgdCxyLGE7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHBlcmZvcm1hbmNlJiZudWxsIT09cGVyZm9ybWFuY2UmJnBlcmZvcm1hbmNlLm5vdz9lLmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCl9OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuJiZudWxsIT09biYmbi5ocnRpbWU/KGUuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybih0KCktYSkvMWU2fSxyPW4uaHJ0aW1lLHQ9ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gZT1yKCksMWU5KmVbMF0rZVsxXX0sYT10KCkpOkRhdGUubm93PyhlLmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3coKS1hfSxhPURhdGUubm93KCkpOihlLmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKS1hfSxhPShuZXcgRGF0ZSkuZ2V0VGltZSgpKX0pLmNhbGwodGhpcyl9KS5jYWxsKG4sdCgxKSl9LDE2NTpmdW5jdGlvbihlLG4pe1widXNlIHN0cmljdFwiO3ZhciB0PXtsaW5lYXI6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybiBhKmUvcitufSxlYXNlSW5RdWFkOmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhPXQtbjtyZXR1cm4gYSooZS89cikqZStufSxlYXNlT3V0UXVhZDpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuLWEqKGUvPXIpKihlLTIpK259LGVhc2VJbk91dFF1YWQ6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybihlLz1yLzIpPDE/YS8yKmUqZStuOi1hLzIqKC0tZSooZS0yKS0xKStufSxlYXNlSW5DdWJpYzpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuIGEqKGUvPXIpKmUqZStufSxlYXNlT3V0Q3ViaWM6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybiBhKigoZT1lL3ItMSkqZSplKzEpK259LGVhc2VJbk91dEN1YmljOmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhPXQtbjtyZXR1cm4oZS89ci8yKTwxP2EvMiplKmUqZStuOmEvMiooKGUtPTIpKmUqZSsyKStufSxlYXNlSW5RdWFydDpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuIGEqKGUvPXIpKmUqZSplK259LGVhc2VPdXRRdWFydDpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuLWEqKChlPWUvci0xKSplKmUqZS0xKStufSxlYXNlSW5PdXRRdWFydDpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuKGUvPXIvMik8MT9hLzIqZSplKmUqZStuOi1hLzIqKChlLT0yKSplKmUqZS0yKStufSxlYXNlSW5RdWludDpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuIGEqKGUvPXIpKmUqZSplKmUrbn0sZWFzZU91dFF1aW50OmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhPXQtbjtyZXR1cm4gYSooKGU9ZS9yLTEpKmUqZSplKmUrMSkrbn0sZWFzZUluT3V0UXVpbnQ6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybihlLz1yLzIpPDE/YS8yKmUqZSplKmUqZStuOmEvMiooKGUtPTIpKmUqZSplKmUrMikrbn0sZWFzZUluU2luZTpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuLWEqTWF0aC5jb3MoZS9yKihNYXRoLlBJLzIpKSthK259LGVhc2VPdXRTaW5lOmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhPXQtbjtyZXR1cm4gYSpNYXRoLnNpbihlL3IqKE1hdGguUEkvMikpK259LGVhc2VJbk91dFNpbmU6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybi1hLzIqKE1hdGguY29zKE1hdGguUEkqZS9yKS0xKStufSxlYXNlSW5FeHBvOmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhPXQtbjtyZXR1cm4gMD09ZT9uOmEqTWF0aC5wb3coMiwxMCooZS9yLTEpKStufSxlYXNlT3V0RXhwbzpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuIGU9PXI/bithOmEqKC1NYXRoLnBvdygyLC0xMCplL3IpKzEpK259LGVhc2VJbk91dEV4cG86ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybiAwPT09ZT9uOmU9PT1yP24rYTooZS89ci8yKTwxP2EvMipNYXRoLnBvdygyLDEwKihlLTEpKStuOmEvMiooLU1hdGgucG93KDIsLTEwKi0tZSkrMikrbn0sZWFzZUluQ2lyYzpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuLWEqKE1hdGguc3FydCgxLShlLz1yKSplKS0xKStufSxlYXNlT3V0Q2lyYzpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYT10LW47cmV0dXJuIGEqTWF0aC5zcXJ0KDEtKGU9ZS9yLTEpKmUpK259LGVhc2VJbk91dENpcmM6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybihlLz1yLzIpPDE/LWEvMiooTWF0aC5zcXJ0KDEtZSplKS0xKStuOmEvMiooTWF0aC5zcXJ0KDEtKGUtPTIpKmUpKzEpK259LGVhc2VJbkVsYXN0aWM6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGEsdSxvLGk9dC1uO3JldHVybiBvPTEuNzAxNTgsdT0wLGE9aSwwPT09ZT9uOjE9PT0oZS89cik/bitpOih1fHwodT0uMypyKSxhPE1hdGguYWJzKGkpPyhhPWksbz11LzQpOm89dS8oMipNYXRoLlBJKSpNYXRoLmFzaW4oaS9hKSwtKGEqTWF0aC5wb3coMiwxMCooZS09MSkpKk1hdGguc2luKChlKnItbykqKDIqTWF0aC5QSSkvdSkpK24pfSxlYXNlT3V0RWxhc3RpYzpmdW5jdGlvbihlLG4sdCxyKXt2YXIgYSx1LG8saT10LW47cmV0dXJuIG89MS43MDE1OCx1PTAsYT1pLDA9PT1lP246MT09PShlLz1yKT9uK2k6KHV8fCh1PS4zKnIpLGE8TWF0aC5hYnMoaSk/KGE9aSxvPXUvNCk6bz11LygyKk1hdGguUEkpKk1hdGguYXNpbihpL2EpLGEqTWF0aC5wb3coMiwtMTAqZSkqTWF0aC5zaW4oKGUqci1vKSooMipNYXRoLlBJKS91KStpK24pfSxlYXNlSW5PdXRFbGFzdGljOmZ1bmN0aW9uKGUsbix0LHIpe3ZhciBhLHUsbyxpPXQtbjtyZXR1cm4gbz0xLjcwMTU4LHU9MCxhPWksMD09PWU/bjoyPT09KGUvPXIvMik/bitpOih1fHwodT1yKiguMyoxLjUpKSxhPE1hdGguYWJzKGkpPyhhPWksbz11LzQpOm89dS8oMipNYXRoLlBJKSpNYXRoLmFzaW4oaS9hKSwxPmU/LS41KihhKk1hdGgucG93KDIsMTAqKGUtPTEpKSpNYXRoLnNpbigoZSpyLW8pKigyKk1hdGguUEkpL3UpKStuOmEqTWF0aC5wb3coMiwtMTAqKGUtPTEpKSpNYXRoLnNpbigoZSpyLW8pKigyKk1hdGguUEkpL3UpKi41K2krbil9LGVhc2VJbkJhY2s6ZnVuY3Rpb24oZSxuLHQscixhKXt2YXIgdT10LW47cmV0dXJuIHZvaWQgMD09PWEmJihhPTEuNzAxNTgpLHUqKGUvPXIpKmUqKChhKzEpKmUtYSkrbn0sZWFzZU91dEJhY2s6ZnVuY3Rpb24oZSxuLHQscixhKXt2YXIgdT10LW47cmV0dXJuIHZvaWQgMD09PWEmJihhPTEuNzAxNTgpLHUqKChlPWUvci0xKSplKigoYSsxKSplK2EpKzEpK259LGVhc2VJbk91dEJhY2s6ZnVuY3Rpb24oZSxuLHQscixhKXt2YXIgdT10LW47cmV0dXJuIHZvaWQgMD09PWEmJihhPTEuNzAxNTgpLChlLz1yLzIpPDE/dS8yKihlKmUqKCgoYSo9MS41MjUpKzEpKmUtYSkpK246dS8yKigoZS09MikqZSooKChhKj0xLjUyNSkrMSkqZSthKSsyKStufSxlYXNlSW5Cb3VuY2U6ZnVuY3Rpb24oZSxuLHIsYSl7dmFyIHUsbz1yLW47cmV0dXJuIHU9dC5lYXNlT3V0Qm91bmNlKGEtZSwwLG8sYSksby11K259LGVhc2VPdXRCb3VuY2U6ZnVuY3Rpb24oZSxuLHQscil7dmFyIGE9dC1uO3JldHVybihlLz1yKTwxLzIuNzU/YSooNy41NjI1KmUqZSkrbjoyLzIuNzU+ZT9hKig3LjU2MjUqKGUtPTEuNS8yLjc1KSplKy43NSkrbjoyLjUvMi43NT5lP2EqKDcuNTYyNSooZS09Mi4yNS8yLjc1KSplKy45Mzc1KStuOmEqKDcuNTYyNSooZS09Mi42MjUvMi43NSkqZSsuOTg0Mzc1KStufSxlYXNlSW5PdXRCb3VuY2U6ZnVuY3Rpb24oZSxuLHIsYSl7dmFyIHUsbz1yLW47cmV0dXJuIGEvMj5lPyh1PXQuZWFzZUluQm91bmNlKDIqZSwwLG8sYSksLjUqdStuKToodT10LmVhc2VPdXRCb3VuY2UoMiplLWEsMCxvLGEpLC41KnUrLjUqbytuKX19O2UuZXhwb3J0cz10fX0pfSk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4gICAgaW1wb3J0IF9fbG9hZE5hbWVzcGFjZXMgZnJvbSAnbmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXMnXG4gICAgXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBTaHVmZmxlIGZyb20gJ3JlYWN0LXNodWZmbGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi4vY29tcG9uZW50cy9TZXJ2aWNlcydcclxuXHJcbmNvbnN0IGFsbHN0YWZmID0gW1xyXG4gICAge1xyXG4gICAgaWQ6IFwiMVwiLCAgICBcclxuICAgIHN0YWZmTmFtZTogXCJKZW5uaWZlciBDaGlhc3NvblwiLFxyXG4gICAgc3RhZmZJbWc6IFwiL2Fzc2V0cy9pbWcvYWJvdXQvc3RhZmYtcGxhY2Vob2xkZXItMi5wbmdcIixcclxuICAgIHN0YWZmQmlvOiBcIlNoZSBzdGFydGVkIHdvcmtpbmcgYXQgQmltYm8gRGF5Y2FyZSBpbiBEZWNlbWJlciAyMDIwLiBTaGUgaXMgYW4gZWR1Y2F0b3Igd2l0aCBvdXIgYWZ0ZXJzY2hvb2wgcHJvZ3JhbS4g4oCYT25lIG9mIHRoZSBiZXN0IHBhcnRzIG9mIGJlaW5nIGFuIGVkdWNhdG9yIGlzIHdhdGNoaW5nIHRoZW0gZ3JvdywgYnVpbGRpbmcgYSBzdHJvbmcgY29ubmVjdGlvbiB3aXRoIHRoZW0gYW5kIGdldHRpbmcgdG8ga25vdyBlYWNoIGNoaWxkIHBlcnNvbmFsbHku4oCZIE91dHNpZGUgb2Ygd29yaywgSmVubmlmZXIgbG92ZXMgbGlzdGVuaW5nIHRvIG11c2ljIGFuZCBpcyBhIGh1Z2UgZmFuIG9mIFN0YXIgV2Fycy5cIixcclxuICAgIHN0YWZmQmlvZnI6IFwiRWxsZSBhIGNvbW1lbmPDqSDDoCB0cmF2YWlsbGVyIMOgIGxhIEdhcmRlcmllIEJpbWJvIGVuIGTDqWNlbWJyZSAyMDIwLiBFbGxlIGVzdCDDqWR1Y2F0cmljZSBhdmVjIGxhIGhhbHRlIHNjb2xhaXJlLiDigJhVbmUgZGVzIG1laWxsZXVyZXMgcGFydGllcyBk4oCZw6p0cmUgw6lkdWNhdHJpY2UgZXN0IGRlIGxlcyBvYnNlcnZlciBncmFuZGlyLCBiw6J0aXIgdW5lIGZvcnRlIGNvbm5leGlvbiBhdmVjIGV1eCBldCBhcHByZW5kcmUgw6AgY29ubmHDrnRyZSBjaGFxdWUgZW5mYW50IHBlcnNvbm5lbGxlbWVudC7igJkgw4AgbOKAmWV4dMOpcmlldXIgZHUgdHJhdmFpbCwgSmVubmlmZXIgYWltZSDDqWNvdXRlciBkZSBsYSBtdXNpcXVlIGV0IGVzdCB1bmUgdnJhaWUgbW9yZHVlIGRlIFN0YXIgV2Fycy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICBpZDogXCIyXCIsICAgIFxyXG4gICAgc3RhZmZOYW1lOiBcIlNhcmFoIE1hcnRpblwiLFxyXG4gICAgc3RhZmZJbWc6IFwiL2Fzc2V0cy9pbWcvYWJvdXQvc3RhZmYtcGxhY2Vob2xkZXItMi5wbmdcIixcclxuICAgIHN0YWZmQmlvOiBcIlNoZSBqb2luZWQgdGhlIHRlYW0gYXQgQmltYm8gRGF5Y2FyZSBpbiBTZXB0ZW1iZXIgb2YgMjAyMC4gU2hlIHdvcmtzIGFzIGFuIGVkdWNhdGlvbmFsIGFzc2lzdGFudCBpbiB0aGUgNC15ZWFyLW9sZCBjbGFzcyBhcyB3ZWxsIGFzIHdpdGggdGhlIGFmdGVyc2Nob29sIHByb2dyYW0uIFNhcmFoIGJlbGlldmVzIG9uZSBvZiB0aGUgZ3JlYXRlc3QgYmVuZWZpdHMgb2YgYmVpbmcgYW4gZWR1Y2F0b3IgaXMgd2F0Y2hpbmcgdGhlIGtpZHMgbGVhcm4gbmV3IHRoaW5ncyB0aGF0IHdpbGwgaGVscCB0aGVtIGxhdGVyIGluIGxpZmUuIOKAmE91dHNpZGUgb2YgZGF5Y2FyZSwgSSBlbmpveSBzd2ltbWluZyBhbmQgd3JpdGluZy4gSXQgaGVscHMgbWUgcmVsYXggYWZ0ZXIgYSBidXN5IGRheSBhdCB3b3JrLuKAmSAgXCIsXHJcbiAgICBzdGFmZkJpb2ZyOiBcIkVsbGUgYSBqb2ludCBs4oCZw6lxdWlwZSBkZSBsYSBHYXJkZXJpZSBCaW1ibyBlbiBzZXB0ZW1icmUgMjAyMC4gRWxsZSB0cmF2YWlsbGUgZW4gdGFudCBxdeKAmWFpZGUgw6lkdWNhdHJpY2UgZGFucyBsYSBjbGFzc2UgZGVzIDQgYW5zIGFpbnNpIHF14oCZw6AgbGEgaGFsdGUgc2NvbGFpcmUuIFNhcmFoIGNyb8OudCBxdeKAmXVuIGRlcyBwbHVzIGdyYW5kcyBhdmFudGFnZXMgZOKAmcOqdHJlIHVuZSDDqWR1Y2F0cmljZSBlc3QgZGUgdm9pciBsZXMgZW5mYW50cyBhcHByZW5kcmUgZGUgbm91dmVsbGVzIGNob3NlcyBxdWkgbGV1ciBzZXJvbnQgdXRpbGVzIHBsdXMgdGFyZCBkYW5zIGxhIHZpZS4g4oCYw4AgbOKAmWV4dMOpcmlldXIgZGUgbGEgZ2FyZGVyaWUsIGrigJlhaW1lIGxhIG5hdGF0aW9uIGV0IGzigJnDqWNyaXR1cmUuIENlbGEgbeKAmWFpZGUgw6AgbWUgZMOpdGVuZHJlIGFwcsOocyB1bmUgam91cm7DqWUgb2NjdXDDqWUgYXUgdHJhdmFpbC7igJlcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICBpZDogXCIzXCIsICAgIFxyXG4gICAgc3RhZmZOYW1lOiBcIk5hdGFjaGEgSHVzc2V5XCIsXHJcbiAgICBzdGFmZkltZzogXCIvYXNzZXRzL2ltZy9hYm91dC9zdGFmZi1wbGFjZWhvbGRlci0yLnBuZ1wiLFxyXG4gICAgc3RhZmZCaW86IFwiU2hlIGhhcyBiZWVuIHBhcnQgb2YgdGhlIEJpbWJvIERheWNhcmUgdGVhbSBmb3Igb3ZlciA1IHllYXJzIG5vdy4gU2hlIGlzIGN1cnJlbnRseSBvbmUgb2Ygb3VyIHByZXNjaG9vbCBlZHVjYXRvcnMuIE5hdGFjaGEgaGFzIGhlciBkaXBsb21hIGluIEVhcmx5IGNoaWxkaG9vZCBlZHVjYXRpb24uIOKAmE9uZSBvZiB0aGUgcGxlYXN1cmVzIG9mIGJlaW5nIGFuIGVhcmx5IGNoaWxkaG9vZCBlZHVjYXRvciBpcyBzZWVpbmcgdGhlIHJlYWN0aW9ucyBvbiBjaGlsZHJlbuKAmXMgZmFjZXMgd2hlbiB0aGV5IGFjY29tcGxpc2ggc29tZXRoaW5nIG5ldyBvbiB0aGVpciBvd24u4oCZIFdoZW4gbm90IGF0IHdvcmssIE5hdGFjaGEgY2FuIGJlIGZvdW5kIGJlaW5nIGEgYnVzeSBtb20gb2YgdHdvIG9yIGNhbiBiZSBmb3VuZCBzbm93Ym9hcmRpbmcuXCIsXHJcbiAgICBzdGFmZkJpb2ZyOiBcIkVsbGUgZmFpdCBwYXJ0aWUgZGUgbOKAmcOpcXVpcGUgZGUgbGEgR2FyZGVyaWUgQmltYm8gZGVwdWlzIHBsdXMgZGUgNSBhbnMuIEVsbGUgZXN0IHByw6lzZW50ZW1lbnQgw6lkdWNhdHJpY2UgZW4gcHLDqW1hdGVybmVsbGUuIE5hdGFjaGEgYSBzb24gZGlwbMO0bWUgZW4gw4lkdWNhdGlvbiBkZSBsYSBwZXRpdGUgZW5mYW5jZS4g4oCYVW4gZGVzIHBsYWlzaXJzIGTigJnDqnRyZSDDqWR1Y2F0cmljZSBlc3QgZGUgdm9pciBsZXMgcsOpYWN0aW9ucyBkZXMgZW5mYW50cyBsb3JzcXXigJlpbHMgcsOpdXNzaXNzZW50IMOgIGFjY29tcGxpciBxdWVscXVlIGNob3NlIGRlIG5vdXZlYXUgcGFyIGV1eC1tw6ptZXMu4oCZIExvcnNxdeKAmWVsbGUgbuKAmWVzdCBwYXMgYXUgdHJhdmFpbCwgTmF0YWNoYSBlc3QgdW5lIG1hbWFuIG9jY3Vww6llIGRlIGRldXggZW5mYW50cyBvdSBlbGxlIHBldXQgw6p0cmUgYXBlcsOndWUgw6AgZmFpcmUgZGUgbGEgcGxhbmNoZSDDoCBuZWlnZS5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICBpZDogXCI0XCIsICAgIFxyXG4gICAgc3RhZmZOYW1lOiBcIkthdGh5IFJvYmVydHNvblwiLFxyXG4gICAgc3RhZmZJbWc6IFwiL2Fzc2V0cy9pbWcvYWJvdXQvc3RhZmYtcGxhY2Vob2xkZXItMi5wbmdcIixcclxuICAgIHN0YWZmQmlvOiBcIlNoZSBpcyBhbiBlZHVjYXRvciBpbiBvdXIgdHJhbnNpdGlvbiBncm91cCBmb3IgdGhlIHBhc3QgMyB5ZWFycy4gQSBmZXcgb2YgdGhlIHRoaW5ncyBLYXRoeSBsb3ZlcyBtb3N0IGFib3V0IGJlaW5nIGFuIGVkdWNhdG9yIGlzIHdhdGNoaW5nIHRoZSBjaGlsZHJlbiBsZWFybiBuZXcgdGhpbmdzIGFuZCBoZWxwaW5nIHRoZW0gZXhwbG9yZSB0aGUgd29ybGQgYXJvdW5kIHRoZW0uIOKAmENoaWxkcmVuIGFyZSBvdXIgZnV0dXJlIGFuZCBJIGxvdmUgYmVpbmcgb25lIG9mIHRoZSBwZW9wbGUgdGhhdCBpcyBsdWNreSBlbm91Z2ggdG8gaGVscCB0aGVtIGdyb3cgYW5kIGxlYXJuLuKAmSBPbmUgb2YgaGVyIHBhc3Npb25zIG91dHNpZGUgb2YgZGF5Y2FyZSBpcyBzcGVuZGluZyB0aW1lIGFkdmVudHVyaW5nIHdpdGggaGVyIGJlYXV0aWZ1bCBmYW1pbHkuIEthdGh5IGxpdmVzIGEgc2ltcGxlIGJ1dCBiZWF1dGlmdWwgbGlmZS5cIixcclxuICAgIHN0YWZmQmlvZnI6IFwiRWxsZSBlc3Qgw6lkdWNhdHJpY2UgYXZlYyBsZSBncm91cGUgZGUgdHJhbnNpdGlvbiBkZXB1aXMgbGVzIDMgZGVybmnDqHJlcyBhbm7DqWVzLiBEZSBzb24gdHJhdmFpbCBlbiB0YW50IHF14oCZw6lkdWNhdHJpY2UsIGVsbGUgYWltZSB2b2lyIGxlcyBlbmZhbnRzIGFwcHJlbmRyZSBkZSBub3V2ZWxsZXMgY2hvc2VzIGV0IGxlcyBhaWRlciDDoCBleHBsb3JlciBsZSBtb25kZSBhdXRvdXIgZOKAmWV1eC4g4oCYTGVzIGVuZmFudHMgc29udCBub3RyZSBhdmVuaXIgZXQgauKAmWFkb3JlIGZhaXJlIHBhcnRpZSBkZXMgcGVyc29ubmVzIGF5YW50IGxhIGNoYW5jZSBkZSBsZXMgYWlkZXIgw6AgZ3JhbmRpciBldCBhcHByZW5kcmUu4oCZIFVuZSBkZSBzZXMgcGFzc2lvbnMgZW4gZGVob3JzIGRlIGxhIGdhcmRlcmllIGVzdCBkZSBwYXNzZXIgZHUgdGVtcHMgw6Agc+KAmWF2ZW50dXJlciBhdmVjIHNhIGJlbGxlIGZhbWlsbGUuIEthdGh5IHZpdCB1bmUgdmllIHNpbXBsZSBtYWlzIG1lcnZlaWxsZXVzZS4gXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgaWQ6IFwiNVwiLCAgICBcclxuICAgIHN0YWZmTmFtZTogXCJOaWNvbGUgSGFjaMOpXCIsXHJcbiAgICBzdGFmZkltZzogXCIvYXNzZXRzL2ltZy9hYm91dC9zdGFmZi1wbGFjZWhvbGRlci0yLnBuZ1wiLFxyXG4gICAgc3RhZmZCaW86IFwiU2hlIGhhcyBiZWVuIHdvcmtpbmcgYXQgQmltYm8gRGF5Y2FyZSBmb3Igb3ZlciAxNyB5ZWFycyEgU2hlIGlzIGFuIGVkdWNhdG9yIHdpdGggY2hpbGRyZW4gYWdlZCAwIHRvIDIzIG1vbnRocy4gU2hlIGxvdmVzIHNlZWluZyBob3cgY2hpbGRyZW4gbGVhcm4gcXVpY2tseSBhbmQgZGlzY292ZXIgZXZlcnkgbGl0dGxlIHRoaW5nLiBTaGUgbG92ZXMgbGlzdGVuaW5nIHRvIHRoZW0gbGF1Z2ggYW5kIHNlZWluZyB0aGVtIGFjY29tcGxpc2ggbmV3IHRhc2tzIChsZWFybmluZyBjb2xvcnMsIHBhaW50aW5nLCBldGMpLiBOaWNvbGUgaGFzIGEgcGFzc2lvbiBmb3Igc2NyYXBib29raW5nIGFuZCBsb3ZlcyB3YWxrcyBhbG9uZyB0aGUgd2F0ZXIuXCIsXHJcbiAgICBzdGFmZkJpb2ZyOiBcIkVsbGUgdHJhdmFpbGxlIMOgIGxhIEdhcmRlcmllIEJpbWJvIGRlcHVpcyBwbHVzIGRlIDE3IGFucyEgRWxsZSBlc3Qgw6lkdWNhdHJpY2UgYXZlYyBsZXMgZW5mYW50cyDDomfDqXMgZGUgMCDDoCAyMyBtb2lzLiBFbGxlIGFpbWUgdm9pciBjb21tZW50IGxlcyBlbmZhbnRzIGFwcHJlbm5lbnQgcmFwaWRlbWVudCBldCBkw6ljb3V2cmVudCBjaGFxdWUgcGV0aXRlIGNob3NlLiBFbGxlIGFpbWUgbGVzIMOpY291dGVyIHJpcmUgZXQgbGVzIHZvaXIgYWNjb21wbGlyIGRlIG5vdXZlYXV4IGTDqWZpcyAoYXBwcmVuZHJlIGxlcyBjb3VsZXVycywgZmFpcmUgZGUgbGEgcGVpbnR1cmUsIGV0YykuIE5pY29sZSBhIHVuZSBwYXNzaW9uIHBvdXIgbGUgc2NyYXBib29raW5nIGV0IGFpbWUgbGVzIG1hcmNoZXMgc3VyIGxlIGJvcmQgZGUgbOKAmWVhdS5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICBpZDogXCI2XCIsICAgIFxyXG4gICAgc3RhZmZOYW1lOiBcIkthc3NhbmRyYSBMYW5kcnlcIixcclxuICAgIHN0YWZmSW1nOiBcIi9hc3NldHMvaW1nL2Fib3V0L3N0YWZmLXBsYWNlaG9sZGVyLTIucG5nXCIsXHJcbiAgICBzdGFmZkJpbzogXCJTaGUgaGFzIGJlZW4gYW4gZWR1Y2F0b3IgYXQgQmltYm8gRGF5Y2FyZSBzaW5jZSBKYW51YXJ5IDIwMjAuIFNoZSBpcyB3aXRoIGNoaWxkcmVuIGFnZWQgMTUgdG8gMjMgbW9udGhzLiBTaGUgbG92ZXMgY29udHJpYnV0aW5nIHRvIGhlbHBpbmcgY2hpbGRyZW4gaW4gdGhlaXIgZGV2ZWxvcG1lbnQgYW5kIGdyb3d0aC4gV2hlbiBLYXNzYW5kcmEgaXMgbm90IGF0IHdvcmssIHNoZSBsb3ZlcyBnb2luZyBmb3Igd2Fsa3MgaW4gbmF0dXJlIGFuZCBzcGVuZGluZyB0aW1lIHdpdGggaGVyIHBldHMuXCIsXHJcbiAgICBzdGFmZkJpb2ZyOiBcIkVsbGUgZXN0IMOpZHVjYXRyaWNlIMOgIGxhIEdhcmRlcmllIEJpbWJvIGRlcHVpcyBqYW52aWVyIDIwMjAuIEVsbGUgZXN0IGF2ZWMgbGVzIGVuZmFudHMgw6Jnw6lzIGRlIDE1IMOgIDIzIG1vaXMuIEVsbGUgYWltZSBjb250cmlidWVyIMOgIGFpZGVyIGxlcyBlbmZhbnRzIGRhbnMgbGV1ciBkw6l2ZWxvcHBlbWVudCBldCDDoCBiaWVuIGdyYW5kaXIuIFF1YW5kIEthc3NhbmRyYSBu4oCZZXN0IHBhcyBhdSB0cmF2YWlsLCBlbGxlIGFpbWUgYWxsZXIgcHJlbmRyZSBkZXMgbWFyY2hlcyBkYW5zIGxhIG5hdHVyZSBldCBwYXNzZXIgZHUgdGVtcHMgYXZlYyBzZXMgYW5pbWF1eC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICBpZDogXCI3XCIsICAgIFxyXG4gICAgc3RhZmZOYW1lOiBcIktpbSBDaGFyZXN0IExhZ2Fjw6lcIixcclxuICAgIHN0YWZmSW1nOiBcIi9hc3NldHMvaW1nL2Fib3V0L3N0YWZmLXBsYWNlaG9sZGVyLTIucG5nXCIsXHJcbiAgICBzdGFmZkJpbzogXCJTaGUgaGFzIGJlZW4gd29ya2luZyBhdCBCaW1ibyBEYXljYXJlIGZvciBvdmVyIDExIHllYXJzLiBTaGUgaXMgYW4gZWR1Y2F0b3Igd2l0aCBjaGlsZHJlbiBhZ2VkIDIgeWVhcnMgb2xkLiBJbiBoZXIgcm9sZSBhcyBlZHVjYXRvciwgc2hlIGxvdmVzIGJlaW5nIGFibGUgdG8gaGVscCBjaGlsZHJlbiBpbiB0aGVpciBkZXZlbG9wbWVudCBhcyB3ZWxsIGFzIHBhcnRpY2lwYXRpbmcgaW4gdGhlaXIgbGVhcm5pbmcuIOKAmEkgbG92ZSBzZWVpbmcgdGhlaXIgbGl0dGxlIHNtaWxlcyBpbiB0aGUgbW9ybmluZyB3aGVuIHRoZXkgYXJyaXZlIGF0IGRheWNhcmUgYW5kIGNvbnNvbGluZyB0aGVtIHdoZW4gdGhleSBhcmUgdXBzZXQgYWJvdXQgbGVhdmluZyBtb20gYW5kIGRhZC7igJkgV2hlbiBLaW0gaXMgbm90IGF0IHdvcmssIHNoZSBsb3ZlcyB3YWxrcywgbmF0dXJlIGFuZCBob2NrZXkuXCIsXHJcbiAgICBzdGFmZkJpb2ZyOiBcIkVsbGUgdHJhdmFpbGxlIMOgIGxhIEdhcmRlcmllIEJpbWJvIGRlcHVpcyBwbHVzIGRlIDExIGFucy4gRWxsZSBlc3Qgw6lkdWNhdHJpY2UgYXZlYyBsZXMgZW5mYW50cyBkZSAyIGFucy4gRGFucyBzb24gcsO0bGUgZOKAmcOpZHVjYXRyaWNlLCBlbGxlIGFpbWUgcG91dm9pciBhaWRlciBsZXMgZW5mYW50cyDDoCBzZSBkw6l2ZWxvcHBlciBhaW5zaSBxdWUgZGUgcGFydGljaXBlciDDoCBsZXVyIGFwcHJlbnRpc3NhZ2UuIOKAmErigJlhaW1lIHZvaXIgbGV1ciBwZXRpdCBzb3VyaXJlIGxlIG1hdGluIHF1YW5kIGlscyBhcnJpdmVudCDDoCBsYSBnYXJkZXJpZSBldCBsZXMgY29uc29sZXIgcXVhbmQgaWxzIG9udCBkZSBsYSBwZWluZSBkZSBkZXZvaXIgcXVpdHRlciBtYW1hbiBldCBwYXBhLuKAmSBRdWFuZCBLaW0gbuKAmWVzdCBwYXMgYXUgdHJhdmFpbCwgZWxsZSBhaW1lIGxlcyBtYXJjaGVzLCBsZSBwbGVpbiBhaXIgZXQgbGUgaG9ja2V5LiBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICBpZDogXCI4XCIsICAgIFxyXG4gICAgc3RhZmZOYW1lOiBcIk5vw6lteSBGcmVuZXR0ZVwiLFxyXG4gICAgc3RhZmZJbWc6IFwiL2Fzc2V0cy9pbWcvYWJvdXQvc3RhZmYtcGxhY2Vob2xkZXItMi5wbmdcIixcclxuICAgIHN0YWZmQmlvOiBcIlNoZSBoYXMgYmVlbiB3b3JraW5nIGF0IEJpbWJvIERheWNhcmUgc2luY2UgT2N0b2JlciAyMDIwIHdpdGggY2hpbGRyZW4gYWdlZCAwIHRvIDIzIG1vbnRocy4g4oCYQXMgYW4gZWR1Y2F0b3IsIHdoYXQgSSBwcmVmZXIgdGhlIG1vc3QgYXJlIGFsbCB0aGUgYmVhdXRpZnVsIG1vbWVudHMgc3BlbnQgd2l0aCB0aGUgY2hpbGRyZW4sIGNvbnRyaWJ1dGluZyB0byB0aGVpciBsZWFybmluZyBhbmQgc2VlaW5nIHRoZW0gZXZvbHZlIG92ZXIgdGhlIG1vbnRocy4gSSBmaW5kIGl0IGJlYXV0aWZ1bCB0byB3aXRuZXNzLiBPdXRzaWRlIG9mIHdvcmssIEkgbG92ZSBwaG90b2dyYXBoeSBhbmQgY3JhZnRzLuKAmVwiLFxyXG4gICAgc3RhZmZCaW9mcjogXCJFbGxlIHRyYXZhaWxsZSDDoCBsYSBHYXJkZXJpZSBCaW1ibyBkZXB1aXMgb2N0b2JyZSAyMDIwIGF2ZWMgbGVzIGVuZmFudHMgw6Jnw6lzIGRlIDAgw6AgMjMgbW9pcy4g4oCYRW4gdGFudCBxdeKAmcOpZHVjYXRyaWNlLCBjZSBxdWUgamUgcHLDqWbDqHJlIHNvbnQgdG91cyBsZXMgYmVhdXggbW9tZW50cyBwYXNzw6lzIGF2ZWMgbGVzIGVuZmFudHMsIGRlIGNvbnRyaWJ1ZXIgw6AgbGV1ciBhcHByZW50aXNzYWdlIGV0IGRlIGxlcyB2b2lyIMOpdm9sdWVyIGF1IGZpbCBkZXMgbW9pcy4gSmUgdHJvdXZlIHF1ZSBj4oCZZXN0IGJlYXUgw6Agdm9pci4gRW4gZGVob3JzIGR1IHRyYXZhaWwsIGrigJlhZG9yZSBsYSBwaG90b2dyYXBoaWUgZXQgbGUgYnJpY29sYWdlLuKAmVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgIGlkOiBcIjlcIiwgICAgXHJcbiAgICBzdGFmZk5hbWU6IFwiTWFyaWUtUGllciBMYWJiw6lcIixcclxuICAgIHN0YWZmSW1nOiBcIi9hc3NldHMvaW1nL2Fib3V0L3N0YWZmLXBsYWNlaG9sZGVyLTIucG5nXCIsXHJcbiAgICBzdGFmZkJpbzogXCJTaGUgaGFzIGJlZW4gd29ya2luZyBhdCBCaW1ibyBEYXljYXJlIHNpbmNlIE9jdG9iZXIgMjAyMC4gU2hlIHdvcmtzIGFzIGFuIGVkdWNhdGlvbmFsIGFzc2lzdGFudCBpbiB0aGUgMy15ZWFyLW9sZCBjbGFzcy4g4oCYSSBhZG9yZSBnZXR0aW5nIHRvIGtub3cgdGhlIGNoaWxkcmVuIGFuZCBkaXNjb3ZlcmluZyBuZXcgd2F5cyB0byBoZWxwIHRoZW0gaW4gdGhlaXIgZGV2ZWxvcG1lbnQu4oCZIE91dHNpZGUgb2Ygd29yaywgTWFyaWUtUGllciBsb3ZlcyBwdXp6bGVzIGFuZCByZWFkaW5nLlwiLFxyXG4gICAgc3RhZmZCaW9mcjogXCJFbGxlIHRyYXZhaWxsZSDDoCBsYSBHYXJkZXJpZSBCaW1ibyBkZXB1aXMgb2N0b2JyZSAyMDIwLiBFbGxlIHRyYXZhaWxsZSBjb21tZSBhaWRlIMOpZHVjYXRyaWNlIGRhbnMgbGEgY2xhc3NlIGRlcyAzIGFucy4g4oCYSuKAmWFkb3JlIGFwcHJlbmRyZSDDoCBjb25uYcOudHJlIGxlcyBlbmZhbnRzIGV0IGTDqWNvdXZyaXIgZOKAmWF1dHJlcyBtb3llbnMgZGUgbGVzIGFpZGVyIGRhbnMgbGV1ciBkw6l2ZWxvcHBlbWVudC7igJkgw4AgbOKAmWV4dMOpcmlldXIgZHUgdHJhdmFpbCwgTWFyaWUtUGllciBhZG9yZSBmYWlyZSBkZXMgY2Fzc2UtdMOqdGVzIGV0IGxhIGxlY3R1cmUuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgaWQ6IFwiMTBcIiwgICAgXHJcbiAgICBzdGFmZk5hbWU6IFwiTmF0YWxpZSBCb3VkcmVhdVwiLFxyXG4gICAgc3RhZmZJbWc6IFwiL2Fzc2V0cy9pbWcvYWJvdXQvc3RhZmYtcGxhY2Vob2xkZXItMi5wbmdcIixcclxuICAgIHN0YWZmQmlvOiBcIlNoZSBoYXMgYmVlbiB3b3JraW5nIGF0IEJpbWJvIERheWNhcmUgZm9yIG92ZXIgMTcgeWVhcnMgYnV0IGhhcyAyMyB5ZWFycyBvZiBleHBlcmllbmNlIHdvcmtpbmcgaW4gZGF5Y2FyZXMuIFNoZSB3b3JrcyBhcyBhbiBlZHVjYXRvciB3aXRoIHByZXNjaG9vbCBjaGlsZHJlbiB3aG8gYXJlIGFnZWQgNCB5ZWFycyBvbGQuIOKAmEkgaGF2ZSBhbHdheXMgYWRvcmVkIGNoaWxkcmVuLiBJIGxvdmUgc2VlaW5nIHRoZW0gZ3JvdyBhbmQgYmVpbmcgYWJsZSB0byB0ZWFjaCB0aGVtIGRpZmZlcmVudCB0aGluZ3MgYnJpbmdpbmcgdGhlbSBmdXJ0aGVyIGluIHRoZWlyIGRldmVsb3BtZW50LiBJIGxvdmUgd2hlbiB0aGV5IHRlbGwgbWUgYmVhdXRpZnVsIHN0b3JpZXMgYWJvdXQgdGhlbXNlbHZlcy7igJkgV2hlbiBOYXRhbGllIGlzIG5vdCBhdCB3b3JrLCBzaGUgbG92ZXMgZ29pbmcgb3V0IHRvIHJlc3RhdXJhbnRzIHdpdGggaGVyIGZyaWVuZHMuXCIsXHJcbiAgICBzdGFmZkJpb2ZyOiBcIkVsbGUgdHJhdmFpbGxlIMOgIGxhIEdhcmRlcmllIEJpbWJvIGRlcHVpcyBwbHVzIGRlIDE3IGFucyBtYWlzIGVsbGUgYSAyMyBhbnMgZOKAmWV4cMOpcmllbmNlIGVuIGdhcmRlcmllLiBFbGxlIHRyYXZhaWxsZSBjb21tZSDDqWR1Y2F0cmljZSBhdmVjIGxlcyBlbmZhbnRzIGRlIGxhIHByw6ltYXRlcm5lbGxlLCBkb25jIGRlIDQgYW5zLiDigJhK4oCZYWRvcmUgbGVzIGVuZmFudHMgZGVwdWlzIHRvdWpvdXJzLiBK4oCZYWltZSBsZXMgdm9pciBncmFuZGlyIGV0IHBvdXZvaXIgbGV1ciBhcHByZW5kcmUgZGlmZsOpcmVudGVzIGNob3NlcyBwb3VyIGxlcyBhbWVuZXIgcGx1cyBsb2luIGRhbnMgbGV1ciBhcHByZW50aXNzYWdlLiBK4oCZYWRvcmUgcXVhbmQgaWxzIG1lIHJhY29udGVudCBkZXMgYmVsbGVzIGhpc3RvaXJlcyDDoCBsZXVyIHN1amV0LuKAmSBRdWFuZCBOYXRhbGllIG7igJllc3QgcGFzIGF1IHRyYXZhaWwsIGVsbGUgYWltZSBhbGxlciBhdSByZXN0YXVyYW50IGF2ZWMgc2VzIGFtaXMuIFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgIGlkOiBcIjExXCIsICAgIFxyXG4gICAgc3RhZmZOYW1lOiBcIkpvc2lhbmUgQ29ybWllclwiLFxyXG4gICAgc3RhZmZJbWc6IFwiL2Fzc2V0cy9pbWcvYWJvdXQvc3RhZmYtcGxhY2Vob2xkZXItMi5wbmdcIixcclxuICAgIHN0YWZmQmlvOiBcIlNoZSBoYXMgYmVlbiB3b3JraW5nIGF0IEJpbWJvIERheWNhcmUgc2luY2UgMjAxOC4gU2hlIGlzIGFuIGVkdWNhdG9yIGluIHRoZSA0LXllYXItb2xkIGNsYXNzIGFuZCBhbHNvIGFuIGVkdWNhdG9yIHdpdGggdGhlIGFmdGVyc2Nob29sIHByb2dyYW0uIFNoZSBsb3ZlcyBzZWVpbmcgY2hpbGRyZW4gZmxvdXJpc2ggYW5kIGJlY29taW5nIG1vcmUgYW5kIG1vcmUgaW5kZXBlbmRlbnQuIOKAmFNlZWluZyB0aGUgY2hpbGTigJlzIHNtaWxlLCBob3cgaGXigJlzIHByb3VkIG9mIGhpbXNlbGYgYWZ0ZXIgbGVhcm5pbmcgb3IgZG9pbmcgc29tZXRoaW5nIG5ldyBpbmRlcGVuZGVudGx5IGZvciB0aGUgZmlyc3QgdGltZS7igJkgV2hlbiBKb3NpYW5lIGlzIG5vdCBhdCB3b3JrLCBzaGUgbGlrZXMgc3BlbmRpbmcgcXVhbGl0eSB0aW1lIHdpdGggaGVyIGZhbWlseS5cIixcclxuICAgIHN0YWZmQmlvZnI6IFwiRWxsZSB0cmF2YWlsbGUgw6AgbGEgR2FyZGVyaWUgQmltYm8gZGVwdWlzIDIwMTguIEVsbGUgZXN0IMOpZHVjYXRyaWNlIGRhbnMgbGEgY2xhc3NlIGRlcyA0IGFucyBldCBhdXNzaSDDqWR1Y2F0cmljZSBhdmVjIGxlcyBlbmZhbnRzIGRlIGxhIGhhbHRlIHNjb2xhaXJlLiBFbGxlIGFkb3JlIHZvaXIgbGVzIGVuZmFudHMgc+KAmcOpcGFub3VpciBldCBkZXZlbmlyIGRlIHBsdXMgZW4gcGx1cyBpbmTDqXBlbmRhbnRzLiDigJhWb2lyIGxlIHNvdXJpcmUgZGUgbOKAmWVuZmFudCwgY29tYmllbiBpbCBlc3QgZmllciBkZSBsdWkgZOKAmWF2b2lyIGFwcHJpcyBvdSBmYWl0IHF1ZWxxdWUgY2hvc2UgZGUgbm91dmVhdSBwYXIgbHVpLW3Dqm1lIHBvdXIgbGEgcHJlbWnDqHJlIGZvaXPigJkuIFF1YW5kIEpvc2lhbmUgbuKAmWVzdCBwYXMgYXUgdHJhdmFpbCwgZWxsZSBhaW1lIHBhc3NlciBkdSB0ZW1wcyBkZSBxdWFsaXTDqSBhdmVjIHNhIGZhbWlsbGUuIFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgIGlkOiBcIjEyXCIsICAgIFxyXG4gICAgc3RhZmZOYW1lOiBcIlNvbmlhIExlQ2xhaXJcIixcclxuICAgIHN0YWZmSW1nOiBcIi9hc3NldHMvaW1nL2Fib3V0L3N0YWZmLXBsYWNlaG9sZGVyLTIucG5nXCIsXHJcbiAgICBzdGFmZkJpbzogXCJTaGUgaGFzIGJlZW4gd29ya2luZyBhdCBCaW1ibyBEYXljYXJlIGZvciAxNyB5ZWFycyEgU2hlIGlzIGFuIGVkdWNhdG9yIHdpdGggY2hpbGRyZW4gYWdlZCAzIHllYXJzIG9sZC4gV2hhdCBzaGUgbG92ZXMgdGhlIG1vc3QgYWJvdXQgYmVpbmcgYW4gZWR1Y2F0b3IgaXMgb3JnYW5pemluZyBhY3Rpdml0aWVzIHdpdGggdGhlIGNoaWxkcmVuLCB0aGVpciBzbWlsZXMsIHRoZWlyIGh1Z3MgYW5kIHRoZWlyIGRlc2lyZSBmb3IgaW5kZXBlbmRlbmNlLiBXaGVuIFNvbmlhIGlzIG5vdCBhdCB3b3JrLCBzaGUgbG92ZXMgY3JvY2hldGluZywgcmVzZWFyY2hpbmcsIGxpc3RlbmluZyB0byBtdXNpYywgbWVkaXRhdGluZyBhbmQgZ29pbmcgdG8gdGhlIGJlYWNoLlwiLFxyXG4gICAgc3RhZmZCaW9mcjogXCJFbGxlIHRyYXZhaWxsZSDDoCBsYSBHYXJkZXJpZSBCaW1ibyBkZXB1aXMgMTdhbnMhIEVsbGUgZXN0IMOpZHVjYXRyaWNlIGF2ZWMgbGVzIGVuZmFudHMgw6Jnw6lzIGRlIDMgYW5zLiBDZSBxdeKAmWVsbGUgYWltZSBsZSBwbHVzIGTigJnDqnRyZSB1bmUgw6lkdWNhdHJpY2UgZXN0IGTigJlvcmdhbmlzZXIgZGVzIGFjdGl2aXTDqXMgcXXigJllbGxlIGZhaXQgYXZlYyBsZXMgZW5mYW50cywgbGV1cnMgc291cmlyZXMsIGxldXJzIGPDomxpbnMgZXQgbGV1ciBkw6lzaXIgZOKAmWluZMOpcGVuZGFuY2UuIFF1YW5kIFNvbmlhIG7igJllc3QgcGFzIGF1IHRyYXZhaWwsIGVsbGUgYWltZSBmYWlyZSBkdSBjcm9jaGV0LCBkZXMgcmVjaGVyY2hlcywgw6ljb3V0ZXIgZGUgbGEgbXVzaXF1ZSwgZmFpcmUgZGUgbGEgbcOpZGl0YXRpb24gZXQgYWxsZXIgw6AgbGEgcGxhZ2UuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgaWQ6IFwiMTNcIiwgICAgXHJcbiAgICBzdGFmZk5hbWU6IFwiRmFubnkgR2FsbHVjaG9uXCIsXHJcbiAgICBzdGFmZkltZzogXCIvYXNzZXRzL2ltZy9hYm91dC9zdGFmZi1wbGFjZWhvbGRlci0yLnBuZ1wiLFxyXG4gICAgc3RhZmZCaW86IFwiU2hlIGhhcyBiZWVuIHdvcmtpbmcgYXQgQmltYm8gRGF5Y2FyZSBzaW5jZSAyMDE4LiBTaGUgd29ya3MgYXMgYW4gZWR1Y2F0b3Igd2l0aCBjaGlsZHJlbiBhZ2VkIDIgeWVhcnMgb2xkLiDigJhBcyBlZHVjYXRvciwgSSBsb3ZlIHRoZSBoYXBwaW5lc3MgdGhhdCB0aGUgY2hpbGRyZW4gYnJpbmcgbWUsIHRoZWlyIGltYWdpbmF0aW9uLCBvdXIgYXdlc29tZSB3b3JrIHRlYW0gYW5kIG91ciBleGNlbGxlbnQgZGlyZWN0b3Iu4oCZIEZhbm554oCZcyBob2JiaWVzIGFyZSBzcGVuZGluZyB0aW1lIG91dHNpZGUgd2l0aCBoZXIgY2hpbGRyZW4sIHB1enpsZXMgYW5kIGNhciByaWRlcy5cIixcclxuICAgIHN0YWZmQmlvZnI6IFwiRWxsZSB0cmF2YWlsbGUgw6AgbGEgR2FyZGVyaWUgQmltYm8gZGVwdWlzIDIwMTguIEVsbGUgdHJhdmFpbGxlIGNvbW1lIMOpZHVjYXRyaWNlIGF2ZWMgbGVzIGVuZmFudHMgw6Jnw6lzIGRlIDIgYW5zLiDigJhFbiB0YW50IHF14oCZw6lkdWNhdHJpY2UsIGrigJlhZG9yZSBsZSBib25oZXVyIHF1ZSBsZXMgZW5mYW50cyBt4oCZYXBwb3J0ZW50LCBsZXVyIGltYWdpbmF0aW9uLCBub3RyZSBzdXBlciDDqXF1aXBlIGRlIHRyYXZhaWwgZXQgbm90cmUgZXhjZWxsZW50ZSBkaXJlY3RyaWNlLuKAmSBMZXMgcGFzc2UtdGVtcHMgZGUgRmFubnkgc29udCBk4oCZw6p0cmUgZGVob3JzIGF2ZWMgc2VzIGVuZmFudHMsIGxlcyBjYXNzZS10w6p0ZXMgZXQgbGVzIGJhbGFkZXMgZW4gYXV0by5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICBpZDogXCIxNFwiLCAgICBcclxuICAgIHN0YWZmTmFtZTogXCJDaGFudGFsIERvaXJvblwiLFxyXG4gICAgc3RhZmZJbWc6IFwiL2Fzc2V0cy9pbWcvYWJvdXQvc3RhZmYtcGxhY2Vob2xkZXItMi5wbmdcIixcclxuICAgIHN0YWZmQmlvOiBcIlNoZSBoYXMgYmVlbiB3b3JraW5nIGF0IEJpbWJvIERheWNhcmUgc2luY2UgMjAxMCEgU2hlIHdvcmtzIGFzIGFuIGVkdWNhdG9yIHdpdGggY2hpbGRyZW4gYWdlZCAyIHllYXJzIG9sZC4g4oCYSSBsb3ZlIHNlZWluZyB0aGVpciBsaXR0bGUgZmFjZXMgaW4gdGhlIG1vcm5pbmcgd2l0aCB0aGVpciBzbWlsZS4gSSBsb3ZlIGRvaW5nIGV4cGVyaW1lbnRzIG9yIGdhbWVzIHdoZXJlIHRoZXkgbWFrZSBiaWcgbWVzc2VzIGxpa2UgcGFpbnRpbmcgYW5kIHdhdGVyIGdhbWVzLuKAmSBXaGVuIENoYW50YWwgaXMgbm90IGF0IHdvcmssIHNoZSBsaWtlcyBvdXRkb29yIHdhbGtzLCByZWFkaW5nIGFuZCB3YXRjaGluZyBzZXJpZXMgb24gTmV0ZmxpeC5cIixcclxuICAgIHN0YWZmQmlvZnI6IFwiRWxsZSB0cmF2YWlsbGUgw6AgbGEgR2FyZGVyaWUgQmltYm8gZGVwdWlzIDIwMTAhIEVsbGUgdHJhdmFpbGxlIGNvbW1lIMOpZHVjYXRyaWNlIGF2ZWMgbGVzIGVuZmFudHMgw6Jnw6lzIGRlIDIgYW5zLiDigJhK4oCZYWRvcmUgdm9pciBsZXVyIHBldGl0IHZpc2FnZSBsZSBtYXRpbiBhdmVjIGxldXIgc291cmlyZS4gSuKAmWFkb3JlIGZhaXJlIGRlcyBleHDDqXJpZW5jZXMgb3UgZGVzIGpldXggb8O5IGlscyBmb250IGRlcyBncm9zIGTDqWfDonRzIGNvbW1lIGxhIHBlaW50dXJlIGV0IGxlcyBqZXV4IGTigJllYXUu4oCZIFF1YW5kIENoYW50YWwgbuKAmWVzdCBwYXMgYXUgdHJhdmFpbCwgZWxsZSBhaW1lIGxlcyBtYXJjaGVzIGV4dMOpcmlldXJlcywgbGlyZSBldCByZWdhcmRlciBkZXMgc8OpcmllcyBzdXIgTmV0ZmxpeC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICBpZDogXCIxNVwiLCAgICBcclxuICAgIHN0YWZmTmFtZTogXCJNYWx2aW5hIENoaWFzc29uXCIsXHJcbiAgICBzdGFmZkltZzogXCIvYXNzZXRzL2ltZy9hYm91dC9zdGFmZi1wbGFjZWhvbGRlci0yLnBuZ1wiLFxyXG4gICAgc3RhZmZCaW86IFwiU2hlIGhhcyBiZWVuIHdvcmtpbmcgYXQgQmltYm8gRGF5Y2FyZSBmb3Igb3ZlciAyMCB5ZWFycyEgU2hlIHdvcmtzIGFzIGFuIGVkdWNhdG9yIHdpdGggY2hpbGRyZW4gYWdlZCAwIHRvIDIzIG1vbnRocy4g4oCYV2hhdCBJIGxvdmUgYWJvdXQgYmVpbmcgYW4gZWR1Y2F0b3IgaXMgZ29pbmcgdG8gdGhlIGRheWNhcmUgZXZlcnkgbW9ybmluZyB0byBncmVldCB0aGUgY2hpbGRyZW4gd2l0aCBhIHNtaWxpbmcgZmFjZS4gVGhlIGZpcnN0IHllYXJzIG9mIHRoZWlyIGxpdmVzIGFyZSB2ZXJ5IGltcG9ydGFudCB0byB0aGVpciBkZXZlbG9wbWVudC4gVGhhdCBpcyB3aHkgSSBsb3ZlIGxldHRpbmcgdGhlbSBleHBsb3JlLCBzb2NpYWxpemUsIGhhdmUgZnVuIHdoaWxlIHBsYXlpbmcuIEkgaG9wZSB0aGF0IGVhY2ggY2hpbGQgZmVlbHMgc2FmZSBhbmQgaGFwcHkgYXQgdGhlIGRheWNhcmUuIE15IHBhc3Npb25zIGFyZSByZWFkaW5nLCBwdXp6bGVzIGFuZCBvdXRkb29yIHdhbGtzLiBJIGFsc28gbGlrZSBkb2luZyB2b2x1bnRlZXIgd29yayB3aXRoIHRoZSBlbGRlcmx5IGluIG51cnNpbmcgaG9tZXMu4oCZXCIsXHJcbiAgICBzdGFmZkJpb2ZyOiBcIkVsbGUgdHJhdmFpbGxlIMOgIGxhIEdhcmRlcmllIEJpbWJvIGRlcHVpcyBwbHVzIGRlIDIwIGFucyEgRWxsZSB0cmF2YWlsbGUgY29tbWUgw6lkdWNhdHJpY2UgYXZlYyBsZXMgZW5mYW50cyDDomfDqXMgZGUgMCDDoCAyMyBtb2lzLiDigJhDZSBxdWUgauKAmWFpbWUgY29tbWUgw6lkdWNhdHJpY2UsIGPigJllc3QgZOKAmWFsbGVyIMOgIGxhIGdhcmRlcmllIGNoYXF1ZSBtYXRpbiDDoCBsYSByZW5jb250cmUgZGVzIGVuZmFudHMgYXZlYyBsZSBzb3VyaXJlLiBMZXMgcHJlbWnDqHJlcyBhbm7DqWVzIGRlIGxldXIgdmllIHNvbnQgdHLDqHMgaW1wb3J0YW50ZXMgcG91ciBsZXVyIGTDqXZlbG9wcGVtZW50LiBD4oCZZXN0IHBvdXJxdW9pIGrigJlhZG9yZSBsZXMgbGFpc3NlciBleHBsb3Jlciwgc29jaWFsaXNlciwgYXZvaXIgZHUgcGxhaXNpciBlbiBqb3VhbnQuIEplIHNvdWhhaXRlIHF1ZSBjaGFxdWUgZW5mYW50IHNlIHNlbnRlIGVuIHPDqWN1cml0w6kgZXQgaGV1cmV1eCDDoCBsYSBnYXJkZXJpZS4gTWVzIHBhc3Npb25zIHNvbnQgbGEgbGVjdHVyZSwgbGVzIGNhc3NlLXTDqnRlcyBldCBsZXMgbWFyY2hlcyDDoCBs4oCZZXh0w6lyaWV1ci4gSuKAmWFpbWUgYXVzc2kgZmFpcmUgZHUgYsOpbsOpdm9sYXQgcG91ciBsZXMgcGVyc29ubmVzIMOiZ8OpZXMgZGFucyBsZXMgZm95ZXJzIGRlIHNvaW5zLuKAmVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgIGlkOiBcIjE2XCIsICAgIFxyXG4gICAgc3RhZmZOYW1lOiBcIkxpc2EgQ3lyXCIsXHJcbiAgICBzdGFmZkltZzogXCIvYXNzZXRzL2ltZy9hYm91dC9zdGFmZi1wbGFjZWhvbGRlci0yLnBuZ1wiLFxyXG4gICAgc3RhZmZCaW86IFwiSSBqb2luZWQgdGhlIEdhcmRlcmllIEJpbWJvIERheWNhcmUgdGVhbSBpbiBBdWd1c3Qgb2YgMjAyMCBhcyB0aGUgbmV3IGRpcmVjdG9yLiBBbHRob3VnaCBJIGFtIGZhaXJseSBuZXcgdG8gdGhlIGNlbnRlciwgSSBoYXZlIGJlZW4gd29ya2luZyBpbiB0aGUgY2hpbGRjYXJlIHNlY3RvciBzaW5jZSAyMDA3LiBJIGhhdmUgYSBwYXNzaW9uIGZvciBoZWxwaW5nIG90aGVycyBncm93LiBPbmUgb2YgbXkgZmF2b3JpdGUgcGFydHMgb2YgYmVpbmcgYSBkaXJlY3RvciBpcyB0aGUgYWJpbGl0eSB0byBnaXZlIG15IGVkdWNhdG9ycyBhIHBvc2l0aXZlIHdvcmsgcGxhY2UgYW5kIHRvIGVuY291cmFnZSB0aGVtIHRvIGFsd2F5cyBkbyB0aGVpciBiZXN0LiBXaGVuIG5vdCBhdCB0aGUgZGF5Y2FyZSwgSSBjYW4gdXN1YWxseSBiZSBmb3VuZCBvdXRkb29ycyB3aXRoIG15IHR3byBjaGlsZHJlbiBhZ2VkIDcgYW5kIDIsIHdlIGxvdmUgZ29pbmcgb24gZmFtaWx5IGFkdmVudHVyZXMuIEkgYWxzbyBlbmpveSByZWFkaW5nIGEgZ29vZCBib29rLlwiLFxyXG4gICAgc3RhZmZCaW9mcjogXCJK4oCZYWkgam9pbnQgbOKAmcOpcXVpcGUgZGUgbGEgR2FyZGVyaWUgQmltYm8gRGF5Y2FyZSBlbiBhb8O7dCAyMDIwIMOgIHRpdHJlIGRlIG5vdXZlbGxlIGRpcmVjdHJpY2UuIEJpZW4gcXVlIGplIHN1aXMgYXNzZXogbm91dmVsbGUgYXUgY2VudHJlLCBqZSB0cmF2YWlsbGUgZGFucyBsZSBzZWN0ZXVyIGRlIGxhIHBldGl0ZSBlbmZhbmNlIGRlcHVpcyAyMDA3LiBK4oCZYWkgdW5lIHBhc3Npb24gcG91ciBhaWRlciBsZXMgYXV0cmVzIMOgIGdyYW5kaXIuIFVuZSBkZSBtZXMgcGFydGllcyBwcsOpZsOpcsOpZXMgZOKAmcOqdHJlIGRpcmVjdHJpY2UgZXN0IGTigJnDqnRyZSBjYXBhYmxlIGRlIGRvbm5lciDDoCBtZXMgw6lkdWNhdGV1cnMgdW4gbGlldSBkZSB0cmF2YWlsIHBvc2l0aWYgZXQgZGUgbGVzIGVuY291cmFnZXIgw6AgdG91am91cnMgZmFpcmUgZGUgbGV1ciBtaWV1eC4gUXVhbmQgamUgbmUgc3VpcyBwYXMgw6AgbGEgZ2FyZGVyaWUsIGplIHBldXggw6p0cmUgcmV0cm91dsOpZSDDoCBs4oCZZXh0w6lyaWV1ciBhdmVjIG1lcyBkZXV4IGVuZmFudHMgw6Jnw6lzIGRlIDcgZXQgMiBhbnMsIG5vdXMgYWltb25zIGFsbGVyIHBvdXIgZGVzIGF2ZW50dXJlcyBlbiBmYW1pbGxlLiBK4oCZYWltZSBhdXNzaSBsYSBsZWN0dXJlLlwiLFxyXG4gICAgfSxcclxuXHJcbl1cclxuIFxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2Uoe3Byb3BzfSkge1xyXG5cclxuICAgIGxldCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRsZXQgY2hhbmdlTGFuZ0J1dHRvbk5hbWU7XHJcblxyXG5cdGlmIChyb3V0ZXIubG9jYWxlID09PSAnZnInKSB7XHJcbiAgICAgIGNoYW5nZUxhbmdCdXR0b25OYW1lID0gXCJGcmFuw6dhaXNcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoYW5nZUxhbmdCdXR0b25OYW1lID0gXCJFbmdsaXNoXCI7XHJcbiAgICB9XHJcbiBcclxuICBcdGNvbnN0IFN0YWZmcyA9IGFsbHN0YWZmLnNsaWNlKDAsIDIyKS5tYXAoKHN0YWZmKSA9PlxyXG4gIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiIGtleT17c3RhZmYuaWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyIGtleXN0YWZmIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1pbmZvIGQtbWQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zZWMgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezM2Mn0gaGVpZ2h0PXsyNDB9IGFsdD17c3RhZmYuc3RhZmZOYW1lfSBzcmM9e3N0YWZmLnN0YWZmSW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwdC0yXCI+e3N0YWZmLnN0YWZmTmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXNlYyBjb2wtbWQtOCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIFx0PHA+XHJcbiAgICAgICAgICAgICAgICBcdHtyb3V0ZXIubG9jYWxlID09PSBcImZyXCIgPyBzdGFmZi5zdGFmZkJpb2ZyICA6IHN0YWZmLnN0YWZmQmlvICB9XHJcbiAgICAgICAgICAgICAgICBcdDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICBcdClcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT57dCgnY29tbW9uOnN0YWZmJyl9IHwge3QoJ2NvbW1vbjptZXRhLXRpdGxlJyl9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ2NvbW1vbjptZXRhLWRlc2NyaXB0aW9uJyl9IC8+XHJcblx0ICAgICAgICA8L0hlYWQ+XHJcblxyXG5cdFx0ICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tcGFkZGluZyBzdWItcGFnZSBtdC01XCI+XHJcblx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcblx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy0xMCBvZmZzZXQtbGctMVwiPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXR0bGUgdGV4dC1jZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtaW5cIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIj5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0KCdjb21tb246c3RhZmYtaGVyby10aXRsZScpfTwvaDI+IFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dCgnY29tbW9uOnN0YWZmLXRleHQnKX08L3A+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleXN0YWZmXCIgZGF0YS1hb3M9XCJmYWRlLWluXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCI+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2h1ZmZsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1N0YWZmc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NodWZmbGU+XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQgICAgICAgIDwvZGl2PlxyXG5cdFx0ICAgIDwvc2VjdGlvbj5cclxuXHJcblx0ICAgIFx0PFNlcnZpY2VzIC8+XHJcblxyXG5cdCAgIDwvIExheW91dD5cclxuXHQpXHJcbn1cclxuXHJcblxyXG4gXG5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuLi4oYXdhaXQgX19sb2FkTmFtZXNwYWNlcyh7XG4gICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvc3RhZmYnLFxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U3RhdGljUHJvcHMnLFxuICAgICAgICAgICAgICAuLi5fX2kxOG5Db25maWcsXG4gICAgICAgICAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9