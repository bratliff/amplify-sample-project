 // Define a new component called button-counter
Vue.mixin({ delimiters: ['[[',']]'] });

Vue.component('amplify-multiselect-dropdown', {
  data: function () {
    return {
      isMenuActive: false,
      ariaChecked: 'false'
    }
  },
  props: {
    buttonText: String,
    items: Array
  },
  methods: {
    openMenu: function() {
      this.isMenuActive = !this.isMenuActive;

      event.target.getAttribute("aria-expanded") == "false"
        ? event.target.setAttribute("aria-expanded", "true")
        : event.target.setAttribute("aria-expanded", "false");
    },
    closeMenu: function() {
      this.isMenuActive = false;
      this.$refs.menuBtn.focus();
      this.$refs.menuBtn.setAttribute("aria-expanded", "false");
    },
    moveDown: function(e) {
      e.target.nextSibling.focus();
    },
    moveUp: function(e) {
      e.target.previousSibling.focus();
    },
    checkboxClick: function(event) {
      event.target.parentNode.getAttribute("aria-checked") == "false"
        ? event.target.parentNode.setAttribute("aria-checked", "true")
        : event.target.parentNode.setAttribute("aria-checked", "false");
    },
    focusFirstItem: function(event) {
      event.preventDefault();
      this.$refs.listItem[0].focus();
    },
    chooseItem: function(event) {
      event.preventDefault();
      event.target.click();
      event.target.focus();
    },
    clickItem: function(event) {
      event.target.focus();
    },
    preventDefault: function(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
    created: function(){
        window.addEventListener('click', e => {
          let allmenus = document.getElementsByClassName('amplify-multi-select')[0];

            if(!e.target.classList.contains('multiselect-btn') && !e.target.classList.contains('checkbox-div') && !e.target.classList.contains('dropdown-item')  && e.target.nodeName !== "INPUT" && e.target.nodeName !== "SPAN") {
                this.isMenuActive = false;
            }
            
        })
      },
    template: `<div class="amplify-dropdown amplify-multi-select" v-bind:class="{show: isMenuActive}" ref="menu">
        <button class="btn multiselect-btn" type="button" aria-haspopup="true" aria-expanded="false" id="multi-select-button" @click="openMenu" @keydown.down="focusFirstItem" ref="menuBtn">[[buttonText]]</button>
        <div class="dropdown-menu" aria-labelledby="multi-select-button">
            <label v-for="item in items" :key="item.id" tabindex="0" class="dropdown-item" role="checkbox" aria-checked="false" ref="listItem" @click="clickItem" @keydown.space.enter="chooseItem" @keydown.esc="closeMenu" @keyup.tab="closeMenu" @keydown.down="moveDown" @keydown.up="moveUp">
              <input type="checkbox" value="on" @click="checkboxClick">
              <div class="checkbox-div"></div>
              <span>[[item]]</span>
            </label>
        </div>
    </div>`
});

