import { ItemsProperty, items, unorderedList } from './helper'

function newCard (source: URL, id: string): string {
  return `<li class="list-group-item no-border">
            <div class="card">
              <img src="${source}" class="card-img-top" alt="Image">
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
    const ulListLength: number = unorderedList.length

    for (let collection = 0; collection < ulListLength; collection++) {
      unorderedList.item(collection).innerHTML += newCard(itemSource[index], id[index])
    }
  }
}

export async function addButtonEventListeners (): Promise<void> {
  const selectorRadioButton: HTMLCollection = document.getElementsByClassName('no-radio')

  for (let index = 0; index < selectorRadioButton.length; index++) {
    const radio: Element = selectorRadioButton.item(index)

    radio.addEventListener('click', (event: Event) => {
      const chosenItem: Event = event.target.dataset.id
      console.log(chosenItem)
    })
  }
}
