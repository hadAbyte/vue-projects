Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,

      alert_box: false,
    };
  },

  computed: {
    box() {
      return {
        transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
              `,
      };
    },
  },

  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },

    copy() {
      this.alert_box = true;
      setTimeout(() => {
        this.alert_box = false;
      }, 2000);

      const el = document.createElement("textarea");
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-99999px";
      el.value = `transform: ${this.box.transform}`;

      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
  },
}).mount("#app");
