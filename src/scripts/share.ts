import { ItemsProperty, Suggestion } from './helper'

export const suggestedCollection: Suggestion = {}

/**
 * Store the picked item
 * @exports
 * @param {string} type
 * @param {ItemsProperty} style
 */
export function currentlyPickedStyle (type: string, style: ItemsProperty): void {
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
 * @exports
 * @returns {boolean}
 */
export function preSelectedStyleExist (): boolean {
  return window.location.hash === ''
}

module.exports = {
  suggestedCollection,
  currentlyPickedStyle,
  preSelectedStyleExist
}
