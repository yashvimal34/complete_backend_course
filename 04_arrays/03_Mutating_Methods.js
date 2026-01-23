// 4. Mutating Methods. (They change the original array).

// push() - add to end

const cart = ["Phone", "Computer", "Printer"];
cart.push("Laptop");
console.log(cart);

// pop() - remove from end.
cart.pop();
console.log(cart);

// unshift - add to start

cart.unshift("Mouse");
console.log(cart);

//shif() - remove from start
cart.shift();
console.log(cart);

// splice() - Swiss army knife.
const months = ['Jan', 'Mar', 'Apr', 'Jun'];
months.splice(1, 0, "Feb");  // Inserts index at 1
months.splice(4, 1, "May");  // Replace 1 element at index 4 it means "Jun" gets removed.
months.splice(8, 1, "Jul");
months.splice(9, 1, "Aug");
months.splice(10, 1, "Sept");
months.splice(11, 1, "Oct");
months.splice(12, 1, "Nov");
months.splice(13, 1, "Dec");
console.log(months);

// ⚠️ Performance note:
// Avoid using splice() method inside loops because it reindexes the array every time.