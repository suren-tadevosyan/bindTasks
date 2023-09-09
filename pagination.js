const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

let pagination = {
  book: [""],
  currentPage: 1,

  init: function (arr, num) {
    let count = 1;
    for (let i = 0; i < arr.length; i += num) {
      this.book.push([]);
      for (let j = i; j < i + num; j++) {
        if (arr[j] === undefined) break;
        this.book[count].push(arr[j]);
      }
      count++;
    }
  },

  getPageItems: function () {
    return this.book[this.currentPage];
  },

  goToPage: function (current) {
    return (this.currentPage = current);
  },
  nextPage: function (changePage) {
    if (this.currentPage < this.book.length - 1) {
      this.currentPage++;
    }
    return this;
  },
  prevPage: function (changePage) {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
    return this;
  },

  lastPage: function () {
    this.currentPage = this.book.length - 1;
  },

  firstPage: function () {
    this.currentPage = 1;
  },
};
