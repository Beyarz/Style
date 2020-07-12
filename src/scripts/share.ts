import { ItemsProperty, Suggestion } from './helper'

const suggestedCollection: Suggestion = {}

/**
 * Store the picked item
 * @param {string} type
 * @param {ItemsProperty} style
 */
function currentlyPickedStyle (type: string, style: ItemsProperty): void {
  suggestedCollection[type] = {
    id: style.id,
    src: style.src
  }
  encodeStyle(suggestedCollection)
  console.log(suggestedCollection)
}

/**
 * Encode the collection
 * @param {Suggestion} collection
 */
function encodeStyle (collection: Suggestion): void {
  const stringifiedStyle: string = JSON.stringify(collection)
  const encodedStyle: string = encodeURI(btoa(stringifiedStyle))
  const hash: string = encodedStyle

  window.location.hash = encodedStyle
  console.log(hash)
}

/**
 * See if visitor already picked a style
 * @returns {boolean}
 */
function preSelectedStyleExist (): boolean {
  return window.location.hash === ''
}

export {
  suggestedCollection,
  currentlyPickedStyle,
  preSelectedStyleExist
}
