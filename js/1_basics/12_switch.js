// Switch let you select some action, depending on a given value. But! This shit works by executing all, that goes after matching value:
let item = 3;
switch(item) {
         case 1: console.log("item = 1");
         case 2: console.log("item = 2");
         case 3: console.log("item = 3");
         case 4: console.log("item = 4");
         default: console.log("item has some other value");
}
// -> will log case 3, case 4 and default

// To execute only exact match, 'break is required':
switch(item) {
         case 1: console.log("item = 1");break;
         case 2: console.log("item = 2");break;
         case 3: console.log("item = 3");break;
         case 4: console.log("item = 4");break;
         default: console.log("item has some other value");
}
// Default may be skipped