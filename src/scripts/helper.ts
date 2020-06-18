import '../styles/main.scss'

export interface ItemsProperty {
  src: Array<string>,
  id: Array<string>
}

const items: ItemsProperty = require('../assets/items.json')
const unorderedList: HTMLCollection = document.getElementsByClassName('list-group list-group-horizontal')
const root: Element = document.getElementById('layout-root')
const selectorRadioButton: HTMLCollection = document.getElementsByClassName('no-radio')
const selectedItems: Element = document.getElementById('selected-items')

export {
  items,
  unorderedList,
  root,
  selectorRadioButton,
  selectedItems
}
