// Реалізація алгоритму швидкого сортування (Quick Sort) на JavaScript
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
// Перебір елементів і розподіл їх відносно pivot
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
  }
// Поміщаємо pivot на правильну позицію
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // ставимо pivot на місце
  return i + 1;
}
// Основна функція швидкого сортування
function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
// Приклад використання
let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
