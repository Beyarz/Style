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

interface ConfigInterface {
  url: {
    protocol: string
    domain: string
    extension: string
  }
}

const items: ItemsPropertyList = require('../assets/items.json')
const config: ConfigInterface = require('../assets/config.json')

const unorderedList: HTMLCollection = document.getElementsByClassName('list-group list-group-horizontal')
const root: Element = document.getElementById('layout-root')
const selectorRadioButton: HTMLCollection = document.getElementsByClassName('no-radio')
const selectedItems: Element = document.getElementById('selected-items')
const combinationLead: Element = document.getElementById('combination-lead')
const publishSectionId: string = 'publish-section'
const sharedCollectionHash: string = window.location.hash.replace(/#/g, '')
const parentCopyButtonId: string = 'copy-button'
const shareContainerId: string = 'input-share-field'

export {
  items,
  config,
  unorderedList,
  root,
  selectorRadioButton,
  selectedItems,
  combinationLead,
  publishSectionId,
  sharedCollectionHash,
  parentCopyButtonId,
  shareContainerId
}
