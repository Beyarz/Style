import { ItemsProperty } from './helper'
const unOrderedList: HTMLCollection = document.getElementsByClassName('list-group list-group-horizontal')
const items: ItemsProperty = require('../assets/items.json')

function newCard (itemSource: URL, id: string): string {
  return `<li class="list-group-item no-border">
            <div class="card">
              <img src="${itemSource}" class="card-img-top" alt="Image">
              <label class="btn btn-light">
                <input class="btn-group-toggle no-radio" type="radio" name="options" data-id="${id}">Select
              </label>
            </div>
          </li>`
}

function structureItems (contents: ItemsProperty): void {
  const entries = Object.entries(contents)

  entries.forEach(item => {
    const srcProperty: Array<string> = item[1].src
    const idProperty: Array<string> = item[1].id

    for (let index = 0; index < srcProperty.length; index++) {
      console.log(srcProperty[index], idProperty[index])
    }
  })
}

function generateItems (): void {
  structureItems(items)

  const itemSource: Array<URL> = []
  const id: Array<string> = []

  for (let index = 0; index < itemSource.length; index++) {
    const ulListLength: number = unOrderedList.length

    for (let collection = 0; collection < ulListLength; collection++) {
      unOrderedList.item(collection).innerHTML += newCard(itemSource[index], id[index])
    }
  }
}

export function addButtonEventListeners (): void {
  const selectorRadioButton: HTMLCollection = document.getElementsByClassName('no-radio')

  for (let index = 0; index < selectorRadioButton.length; index++) {
    const radio: Element = selectorRadioButton.item(index)

    radio.addEventListener('click', (event: Event) => {
      const chosenItem: Event = event.target.dataset.id
      console.log(chosenItem)
    })
  }
}
