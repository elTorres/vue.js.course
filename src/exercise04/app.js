new Vue({
  el: '#exercise',
  data: {
    effect: 0,
    boldClass: 'bold',
    divClass: 'blue',
    div2Class: '',
    div2Class2Enabled: false,
    divStyles: 'font-size: 10pt',
    progress: 0
  },
  computed: {
    progressStyles: function () {
      return {
        width: this.progress + "px",
        height: 25 + "px",
        backgroundColor: "green",
        display: "inline-block"
      }
    }
  },
  methods: {
    startEffect: function () {
      var vm = this;
      vm.effect = 1;

      var refreshIntervalId = setInterval(function () {
        if (vm.effect == 1) {
          vm.effect = 2;
        } else {
          vm.effect = 1;
        }
      }, 2000);

      setTimeout(function () {
        clearInterval(refreshIntervalId);
      }, 10000);
    },
    startProgress: function () {
      var progressBarId;
      var vm = this;

      progressBarId = setInterval(function () {
        if (vm.progress < 100) {
          vm.progress += 1
        } else {
          clearInterval(progressBarId)
        }
      }, 100);
    }
  }
});
