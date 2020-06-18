export interface ItemsProperty {
  src: Array<string>,
  id: Array<string>
}

export const items: ItemsProperty = require('../assets/items.json')
export const unorderedList: HTMLCollection = document.getElementsByClassName('list-group list-group-horizontal')
export const root: Element = document.getElementById('layout-root')
