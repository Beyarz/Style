import { ItemsProperty, root } from './helper'

function newItemsLayout (type: string, stockSize: number): string {
  const capitalizeType = type[0].toUpperCase() + type.slice(1)

  return `<h1>
            ${capitalizeType}
            <span class="badge badge-primary badge-pill align-middle span-font-size">${stockSize}</span>
          </h1>
          <div class="container btn-group btn-group-toggle" data-toggle="buttons">
            <ul class="list-group list-group-horizontal overflow-scroll" id="${type}"></ul>
          </div>`
}

export function generateLayout (contents: ItemsProperty): void {
  const entries = Object.entries(contents)

  entries.forEach(item => {
    const type: string = item[0]
    const stockSize: number = item[1].id.length
    const newItemsNode: Element = document.createElement('div')

    newItemsNode.classList.add('container')
    newItemsNode.innerHTML = newItemsLayout(type, stockSize)
    root.appendChild(newItemsNode)
  })
}
