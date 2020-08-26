//Задание № 2

function counter() {
    let value = 0;
    return {
        inc: function() {
            return ++value;
        },
        dec: function() {
            return --value;
        },
        value: function () {
            return value;
        }
    }
}

const iterator = counter();

console.log(iterator.inc()); // увеличивает значение на 1
console.log(iterator.inc()); // еще на 1
console.log(iterator.dec()); // уменьшает на 1
console.log(iterator.value()); 



