// 2
import {DomListner} from '@core/DomListner'

export class ExcelComponents extends DomListner {
  constructor($root, options = {}) {
    super($root, options.listeners, options.name);
  }
  toHTML() {
    return ''
  }
  init() {
    this.initDomListner()
  }
  destroy() {
    this.removeDomListner()
  }
}
