

/*
console.log(magicalUnicorns);
var magicalUnicorns = "awesome";
*/

/*
console.log(magicalUnicorns);
let magicalUnicorns = "awesome!";
*/

var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);