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
  type?: {
    id: string,
    src: string
  }
}

export const items: ItemsPropertyList = require('../assets/items.json')
export const unorderedList: HTMLCollection = document.getElementsByClassName('list-group list-group-horizontal')
export const root: Element = document.getElementById('layout-root')
export const selectorRadioButton: HTMLCollection = document.getElementsByClassName('no-radio')
export const selectedItems: Element = document.getElementById('selected-items')
export const combinationLead: Element = document.getElementById('combination-lead')

module.exports = {
  items,
  unorderedList,
  root,
  selectorRadioButton,
  selectedItems,
  combinationLead
}
