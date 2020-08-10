import { ItemsProperty, Suggestion, publishSectionId } from './helper'

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
}

/**
 * Click on a selected button based of the data-type & data-id
 * @param {object} dataId
 * @returns {void}
 */
function clickOn (dataId: object): void {
  const selectButton: HTMLButtonElement = document.querySelector(`input[data-id="${dataId}"]`)
  selectButton.click()
}

/**
 * Apply the pre-existing style
 * @param {string} [encodedCollection]
 */
function applyPreSelectedStyle (encodedCollection?: string): void {
  const decodedStyle: string = atob(encodedCollection)
  const parsedStyle: object = JSON.parse(decodedStyle)

  if (preSelectedStyleExist()) {
    const styleEntries: Array<object> = Object.entries(parsedStyle)
    const propertyIndex: number = 1

    styleEntries.forEach((entry: Array<any>) => {
      const entryPropId: object = entry[propertyIndex].id
      clickOn(entryPropId)
    })
  }
}

/**
 * See if visitor already picked a style
 * @exports
 * @returns {boolean}
 */
function preSelectedStyleExist (): boolean {
  return window.location.hash !== ''
}

/**
 * Edit the url the user should share
 * @param {string} url
 * @returns {Promise<void>}
 */
async function editSharedUrl (url: string): Promise<void> {
  const sharedUrl: Element = document.getElementById(publishSectionId)
  const formattedUrl: string = window.location.origin + '/' + '#' + url

  sharedUrl.setAttribute('href', formattedUrl)
  sharedUrl.setAttribute('value', formattedUrl)
}

export {
  suggestedCollection,
  currentlyPickedStyle,
  preSelectedStyleExist,
  applyPreSelectedStyle
}
