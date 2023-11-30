AFRAME.registerComponent("carshow", {
  schema: {
      size: { default: 'small' },
      clickCounter: { type: "number", default: 0 }

  },
  init: function () {
      this.el.setAttribute('obj-model', {
          obj: '#carobj',
          mtl: '#carmtl'
      });
      this.el.setAttribute('rotation', { x: -90, y: 0, z: 0 });
      this.el.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });

      // Counter variable to count clicks
      this.data.clickCounter = 0;
  },

  update: function() {
    window.addEventListener("click", e => {
      this.data.clickCounter = this.data.clickCounter + 1;
      if (this.data.clickCounter === 1) {
        const rotation = { x: -90, y: 20, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 2) {
        const rotation = { x: -90, y: 100, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 3) {
        const rotation = { x: -90, y: -200, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 4) {
        const rotation = { x: -90, y: -100, z: 0 };
        this.el.setAttribute("rotation", rotation);
        const position = { x: -90, y: 195, z: 450 };
      }  else {
        const rotation = { x: -90, y: -100, z: 0 };
        this.el.setAttribute("rotation", rotation);
        const position = { x: -90, y: 50, z: 250 };
        this.data.clickCounter = 0;
      }
    });
  }
});