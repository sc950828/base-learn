export default {
  render(createElement) {
    const span1 = createElement("span", this.title1);
    const span2 = createElement("span", {}, [this.title2]);
    const div1 = createElement(
      "div",
      {
        class: "div1",
        style: {
          color: "red",
        },
        attrs: {
          id: "div1",
        },
        props: {
          name: this.myProp1,
        },
        on: {
          click: () => {
            console.log(this.myProp1);
          },
        },
      },
      [span1, span2]
    );
    return createElement("section", {}, [div1]);
  },
  props: {
    myProp1: String,
  },
  data() {
    return {
      title1: "title1",
      title2: "title2",
    };
  },
};
