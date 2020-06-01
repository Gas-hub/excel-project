import {ExcelComponents} from '@core/ExcelComponents';

export class Formula extends ExcelComponents {
  constructor($root) {
    super($root, {
      name: 'formula',
      listeners: ['input', 'click']
    });
  }
  static className = 'excel__formula'
  toHTML() {
    return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {

  }
  onClick(event) {

  }
}
