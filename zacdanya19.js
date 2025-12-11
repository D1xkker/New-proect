// мерж сортування
function merge(arr, left, mid, right) {
  const L = arr.slice(left, mid + 1);
  const R = arr.slice(mid + 1, right + 1);
// Індекси для лівої, правої та основної частин масиву
  let i = 0,
    j = 0,
    k = left;
// Злиття двох підмасивів назад в основний масив
  while (i < L.length && j < R.length) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
// Копіювання залишкових елементів, якщо є
  while (i < L.length) {
    arr[k] = L[i];
    i++;
    k++;
  }
// Копіювання залишкових елементів, якщо є
  while (j < R.length) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
// Рекурсивна функція для сортування масивуй
function mergeSort(arr, left, right) {
  if (left >= right) return;

//   Знаходження середини масиву
  const mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}
// Приклад використання
const arr = [38, 27, 43, 10];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
