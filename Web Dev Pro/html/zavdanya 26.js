// Функція для введення масиву
function input() {
  let size;
  // Введення розміру масиву
  while (true) {
    size = parseInt(prompt("Введіть розмір масиву:"));
    if (size > 0) break;
    alert("Розмір масиву не може бути менше одного");
  }

  let arr = [];
  // Введення елементів масиву
  for (let i = 0; i < size; i++) {
    let value = parseInt(prompt(`Введіть значення ${i + 1}:`));
    arr.push(value);
  }
  return arr;
}

// Функція сортування масиву :(бульбашкове сортування)
function sort(arr) {
  for (let last = arr.length - 1; last > 0; last--) {
    for (let i = 0; i < last; i++) {
      if (arr[i] > arr[i + 1]) {
        // Міняємо місцями два елементи
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}

// Функція виводу масиву
function output(arr) {
  console.log("Відсортований масив = [" + arr.join(", ") + "]");
}

// Головна функція
function main() {
  let arr = input();
  sort(arr);
  output(arr);
}

main();
