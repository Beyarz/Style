import '../styles/main.scss'

export interface ItemsPropertyList {
  type?: string,
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

const items: ItemsPropertyList = require('../assets/items.json')
const sharedCollectionHash: string = window.location.hash.replace(/#/g, '')

const unorderedList: HTMLCollection = document.getElementsByClassName('list-group list-group-horizontal')
const root: Element = document.getElementById('layout-root')
const selectorRadioButton: HTMLCollection = document.getElementsByClassName('no-radio')
const selectedItems: Element = document.getElementById('selected-items')
const combinationLead: Element = document.getElementById('combination-lead')

const publishSectionId: string = 'publish-section'
const parentCopyButtonId: string = 'copy-button'
const shareContainerId: string = 'input-share-field'

export {
  items,

  sharedCollectionHash,

  unorderedList,
  root,
  selectorRadioButton,
  selectedItems,
  combinationLead,

  publishSectionId,
  parentCopyButtonId,
  shareContainerId
}
