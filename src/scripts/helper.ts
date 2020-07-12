import '../styles/main.scss'

export interface ItemsPropertyList {
  src: Array<string>,
  id: Array<string>
}

export interface ItemsProperty {
  src: string,
  id: string
}

export interface Suggestion {
  type: string,
  selected: {
    id: string,
    src: string
  }
}

const items: ItemsPropertyList = require('../assets/items.json')
const unorderedList: HTMLCollection = document.getElementsByClassName('list-group list-group-horizontal')
const root: Element = document.getElementById('layout-root')
const selectorRadioButton: HTMLCollection = document.getElementsByClassName('no-radio')
const selectedItems: Element = document.getElementById('selected-items')
const combinationLead: Element = document.getElementById('combination-lead')

export {
  items,
  unorderedList,
  root,
  selectorRadioButton,
  selectedItems,
  combinationLead
}
