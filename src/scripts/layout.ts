import { ItemsPropertyList, root } from './helper'

/**
 * @param {string} type
 * @param {number} stockSize
 * @returns {string} template
 */
function createLayout (type: string, stockSize: number): string {
  const firstLetter: number = 0
  const capitalizeType: string = type[firstLetter].toUpperCase() + type.slice(firstLetter + 1)

  return `<h1 class="text-muted">
            ${capitalizeType}
            <span class="badge badge-primary badge-pill align-middle span-font-size">${stockSize}</span>
          </h1>
          <div class="container btn-group btn-group-toggle" data-toggle="buttons">
            <ul class="list-group list-group-horizontal overflow-scroll" id="${type}"></ul>
          </div>`
}

/**
 * @export
 * @param {ItemsPropertyList} contents
 * @returns {Promise<ItemsPropertyList>} interface
 */
export async function generateLayout (contents: ItemsPropertyList): Promise<ItemsPropertyList> {
  const entries = Object.entries(contents)

  entries.forEach((item: Array<any>): void => {
    const type: string = item[0]
    const stockSize: number = item[1].id.length
    const newItemsNode: Element = document.createElement('div')

    newItemsNode.classList.add('container')
    newItemsNode.innerHTML = createLayout(type, stockSize)
    root.appendChild(newItemsNode)
  })

  return contents
}

module.exports = {
  generateLayout
}
