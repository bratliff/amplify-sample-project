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
/***/ (function(module, exports) {

	'use strict';

	// Define a new component called button-counter
	Vue.mixin({ delimiters: ['[[', ']]'] });

	Vue.component('amplify-multiselect-dropdown', {
	  name: 'amplify-multiselect-dropdown',
	  data: function data() {
	    return {
	      isMenuActive: false,
	      ariaChecked: 'false',
	      items: [{ label: 'Teacher' }, { label: 'Administrator' }, { label: 'Student' }, { label: 'Executive Assistant to the Administrative Overseer' }, { label: 'Other' }]
	    };
	  },
	  props: {
	    buttonText: String,
	    items: Array
	  },
	  methods: {
	    openMenu: function openMenu() {
	      this.isMenuActive = !this.isMenuActive;

	      event.target.getAttribute("aria-expanded") == "false" ? event.target.setAttribute("aria-expanded", "true") : event.target.setAttribute("aria-expanded", "false");
	    },
	    closeMenu: function closeMenu(event) {
	      console.log('close menu called');
	      this.isMenuActive = false;
	      this.$refs.menuBtn.focus();
	      this.$refs.menuBtn.setAttribute("aria-expanded", "false");
	    },
	    checkboxClick: function checkboxClick(event) {
	      event.target.parentNode.getAttribute("aria-checked") == "false" ? event.target.parentNode.setAttribute("aria-checked", "true") : event.target.parentNode.setAttribute("aria-checked", "false");
	    },
	    focusFirstItem: function focusFirstItem(event) {
	      event.preventDefault();
	      this.$refs.listItem[0].focus();
	    },
	    moveDown: function moveDown(e) {
	      e.target.nextSibling.focus();
	    },
	    moveUp: function moveUp(e) {
	      e.target.previousSibling.focus();
	    },
	    chooseItem: function chooseItem(event) {
	      event.preventDefault();
	      event.target.click();
	      event.target.focus();
	    },
	    clickItem: function clickItem(event) {
	      event.target.focus();
	    },
	    preventDefault: function preventDefault(event) {
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  },
	  created: function created() {
	    var _this = this;

	    window.addEventListener('click', function (e) {
	      var allmenus = document.getElementsByClassName('amplify-multi-select')[0];

	      if (!e.target.classList.contains('multiselect-btn') && !e.target.classList.contains('checkbox-div') && !e.target.classList.contains('dropdown-item') && e.target.nodeName !== "INPUT" && e.target.nodeName !== "SPAN") {
	        _this.isMenuActive = false;
	      }
	    });
	  },
	  template: '<div class="amplify-dropdown amplify-multi-select" id="multi-select-menu" v-bind:class="{show: isMenuActive}" ref="menu">\n        <button class="btn multiselect-btn" type="button" aria-haspopup="true" aria-expanded="false" id="multi-select-button" @click="openMenu" @keydown.down="focusFirstItem" ref="menuBtn">[[buttonText]]</button>\n        <div class="dropdown-menu" aria-labelledby="multi-select-button">\n            <label v-for="item in items" tabindex="0" class="dropdown-item" role="checkbox" aria-checked="false" ref="listItem" @click="clickItem" @keydown.space.enter="chooseItem" @keydown.esc="closeMenu" @keyup.tab="closeMenu" @keydown.down="moveDown" @keydown.up="moveUp">\n              <input type="checkbox" value="on" @click="checkboxClick">\n              <div class="checkbox-div"></div>\n              <span>[[item]]</span>\n            </label>\n        </div>\n        </div>'
	});

/***/ })
/******/ ]);