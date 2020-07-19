import { ItemsProperty, Suggestion, sharedUrlId } from './helper'

const suggestedCollection: Suggestion = {}

/**
 * Store the picked item
 * @exports
 * @param {string} type
 * @param {ItemsProperty} style
 */
function currentlyPickedStyle (type: string, style: ItemsProperty): void {
  suggestedCollection[type] = {
    id: style.id,
    src: style.src
  }
  encodeStyle(suggestedCollection)
  console.log('Parsed: ', suggestedCollection)
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
  applyPreSelectedStyle(hash)
  editSharedUrl(hash).catch(error => { console.log(error) })
  console.log('Encoded: ', hash)
}

function applyPreSelectedStyle (encodedCollection: string) {
  const decodedStyle: string = atob(encodedCollection)
  console.log('Decoded: ', decodedStyle)
}

/**
 * See if visitor already picked a style
 * @exports
 * @returns {boolean}
 */
function preSelectedStyleExist (): boolean {
  return window.location.hash === ''
}

/**
 * Edit the url the user should share
 * @param {string} url
 * @returns {Promise<void>}
 */
async function editSharedUrl (url: string): Promise<void> {
  const sharedUrl: Element = document.getElementById(sharedUrlId)
  const formattedUrl: string = window.location.origin + '/' + '#' + url

  sharedUrl.setAttribute('href', formattedUrl)
  sharedUrl.textContent = 'Share me!'
}

export {
  suggestedCollection,
  currentlyPickedStyle,
  preSelectedStyleExist
}
