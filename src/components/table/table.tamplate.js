
const CODES = {
  A: 65,
  Z: 90
}

function toCell(content) {
  return `  
           <div class="cell" contenteditable>${content}</div>
        `
}

function toColmn(content) {
  return `  
           <div class="column">${content}</div>
        `
}
function createRow(index = '', content ) {
  return `  
            <div class="row">
              <div class="row-info">${index}</div>
              <div class="row-data">${content}</div>
            </div>
        `
}
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map((el)=>{
        return toColmn(el)
      })
      .join('')

  const cell = new Array(colsCount)
      .fill('')
      .map((el)=>{
        return toCell(el)
      })
      .join('')

  const rows = []
  rows.push(createRow( '', cols))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i + 1, cell ))
  }

  return rows.join('')
}

