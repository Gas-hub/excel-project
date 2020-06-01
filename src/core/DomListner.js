// 1
import {capitalize} from '@core/utils';

export class DomListner {
  constructor($root, listeners = [], name) {
    if (!$root) {
      throw new Error(`no $root provided for DomListner`)
    }
    this.$root = $root
    this.name = name
    this.listners = listeners
  }
  initDomListner() {
    this.listners.forEach((listner)=>{
      const method = getMethodName(listner)
      if (!this[method]) {
        throw new Error(
            // eslint-disable-next-line max-len
            `Method ${method} is not implemented in ${this.name || ''} component`
        )
      }
      this[method] = this[method].bind(this)
      this.$root.on(listner, this[method])
    })
  }
  removeDomListner() {
    this.listners.forEach((listner)=>{
      const method = getMethodName(listner)
      this.$root.off(listner, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on'+ capitalize(eventName)
}
