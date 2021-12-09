// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

function multiplicationTable(size) {
  const table = [];
	
  for (let i = 1; i <= size; i++) {
    const row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}
