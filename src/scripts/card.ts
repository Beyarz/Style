import { ItemsProperty } from './helper'

/**
 * @param {string} source
 * @param {string} id
 * @returns {string} template
 */
function newCard (source: string, id: string): string {
  return `<div class="card">
            <img src="${source}" class="card-img-top" alt="Image">
            <label class="btn btn-light mt-4">
              <input class="btn-group-toggle no-radio" type="radio" name="options" data-id="${id}">Select
            </label>
          </div>`
}

/**
 * @param {string} type
 * @param {string} src
 * @param {string} id
 */
function generateItems (type: string, src: string, id: string): void {
  const typeLayout: Element = document.getElementById(type)
  const typeItem: string = newCard(src, id)
  const typeNode: Element = document.createElement('li')

  const classes: Array<string> = ['list-group-item', 'no-border', 'mb-3']
  classes.forEach((element: string): void => {
    typeNode.classList.add(element)
  })

  typeNode.innerHTML = typeItem
  typeLayout.appendChild(typeNode)
}

/**
 * @export
 * @param {ItemsProperty} contents
 */
export function displayItems (contents: ItemsProperty): void {
  const entries = Object.entries(contents)

  entries.forEach(item => {
    const type: string = item[0]
    const srcProperty: Array<string> = item[1].src
    const idProperty: Array<string> = item[1].id

    for (let index = 0; index < srcProperty.length; index++) {
      generateItems(type, srcProperty[index], idProperty[index])
    }
  })
}
