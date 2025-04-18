const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],

  getLength() {
    // console.log(this.links.length);
    return this.links.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.links.push(`( )`);
    } else {
      this.links.push(`( ${value} )`);
      // console.log(this.links);
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== "number" || position < 1 || position > this.links.length || position % 1 !== 0) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      let index = position - 1;
      this.links.splice(index, 1);
      // console.log(this.links);
    }
    return this;
  },

  reverseChain() {
    this.links.reverse();
    return this;
  },

  finishChain() {
    let result=this.links.join('~~');
    this.links.length=0;
    return result;
  },
};

module.exports = {
  chainMaker,
};
