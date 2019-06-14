/// <reference path="utility-functions.ts" />

const books: number = Utility.maxBooksAllowed(15);
console.log(books);

import util = Utility.Fees;
const fee = util.calculateLateFee(10);
console.log(fee);