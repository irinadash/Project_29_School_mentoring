/*HW_1*
Задания с разным количеством звездочек:)
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
*/
let age_2 = 20;
let age_3 = 63;
const checkAge = function(age) {
if (age < age_2) {
      console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
      } else {
          if ((age >= age_2) && (age < age_3)) {
                  console.log("Welcome  ! ")
            } else {
                if (age > age_3) {
                     console.log("Keep calm and look Culture channel")
                  } else {
                      console.log("Technical work")
                  }
            }
      }
}
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
checkAge(17);
checkAge(18);
checkAge(61);
// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
// const checkAge = function(age) {
//       if (typeof age != "number") {
//             console.log(false)
//       } else {
//             if (age < age_2) {
//                   console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
//             } else {
//                   if ((age >= age_2) && (age < age_3)) {
//                         console.log("Welcome  ! ")
//                   } else {
//                         if (age > age_3) {
//                               console.log("Keep calm and look Culture channel")
//                         } else {
//                               console.log("Technical work")
//                         }
//                   }
//             }
//       }
// }
// checkAge(17);
// checkAge(18);
// checkAge(61);

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА)
// пропускалось, преобразовываясь в number
// const checkAge = function (age) {
//       age = Number(age)
//       if (!isNaN(age)) {
            
//             if (age < age_2) {
//                   console.log("You don't have access cause your age is " + age + "It's less then " + age_2)
//             } else if (age >= age_2 && age < age_3) {
//                   console.log("Welcome !")
//             } else if (age > age_3) {
//                   console.log("Keep calm and look Culture channel")
//             } else { 
//                   console.log('Technical work.')
//             }
//       }
// }
// checkAge(17);
// checkAge(18);
// checkAge(61);
// 4***:
// Преобразовать задание 3* таким образом,
// чтобы возраст вводится используя функцию prompt в привязанной верстке
// const checkAge = function (age) {
//       age = Number(age)
//       if (!isNaN(age)) {
            
//             if (age < age_2) {
//                   console.log("You don't have access cause your age is " + age + "It's less then " + age_2)
//             } else if (age >= age_2 && age < age_3) {
//                   console.log("Welcome !")
//             } else if (age > age_3) {
//                   console.log("Keep calm and look Culture channel")
//             } else { 
//                   console.log('Technical work.')
//             }
//       }
// }
// checkAge(17);
// checkAge(18);
// checkAge(61);
