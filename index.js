
// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((value, index,arr) => {
//     console.log(value,index,arr);
// });

// 1-MASALA  Berilgan sonlardan tashkil topgan massivdan 10 dan kattalaridan iborat yangi massiv hosil qiluvchi funksiya yozing,
// let arr = [5, 10, 8, 15, 9, 27, 55];
// function yangiMassiv(arr) {
//    let result = arr.filter(num => num > 10);
//     return result;
// }
// console.log(yangiMassiv(arr));

// 2-MASALA  Sonlardan tashkil topgan massiv elementlari kublaridan iborat yangi massiv hosil qiladigon funksiya yozing.
// let arr = [1, 2, 3, 4, 5, 6]
// function kubi(arr) {
//    let result = arr.map(num => Math.pow(num,3));
//    return result;
// }
// console.log(kubi(arr));


// 3-MASALA   Sonlardan tashkil topgan massiv elementlari orasidan 3 ga hamda 5 ga karrali son bor yoki yo'qligini tekshiruvchi funksiya yozing.

// let arr = [5, 10, 8, 15, 9, 27, 55];
// function karrali(arr) {
//    for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
//       return true;
//    }
// }
//    return false;
// }
// console.log(karrali(arr));


// 4-MASALA    Sonlardan tashkil topgan massiv elementlari orasidan 3-ta eng kattasini topuvchi funksiya yozing.

// let arr = [5, 10, 8, 15, 9, 27, 55];
// function kattasiniTopuvchi(arr) {
//    let saralash = arr.sort((a, b) => b - a);
//    return saralash.slice(0,3);
// }
// console.log(kattasiniTopuvchi(arr));


// 5-MASALA    Sonlardan tashkil topgan massivni teskari tartibda yozib uni yozuv ko'rinishiga o'tkazib beruvchi funksiya yozing.
// let arr = [5, 4, 3, 2, 1 ]
// function teskariTartibda(arr) {
//    return arr.reverse();
// }
// console.log(teskariTartibda(arr));