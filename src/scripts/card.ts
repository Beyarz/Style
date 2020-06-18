interface ItemsProperty {
  src: Array<string>,
  id: Array<string>
}

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

  // entries[X] iterate over each item
  // entries[X][X+1] properties
  // const firstItem: Array<string> = entries[0]
  // const firstItemProperty: ItemsProperty = entries[0][1]
  // const firstItemPropertySrc: Object = firstItemProperty.src
  // const firstItemPropertyId: Object = firstItemProperty.id

  entries.forEach(item => {
    const type: string = item[0]
    const srcProperty: Array<string> = item[1].src
    const idProperty: Array<string> = item[1].id

    for (let index = 0; index < srcProperty.length; index++) {
      console.log(type, srcProperty[index], idProperty[index])
    }
  })
}

structureItems(items)

export function generateItems (): void {
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
    const radio = selectorRadioButton.item(index)
    radio.addEventListener('click', (event: Event) => {
      const chosenItem: string = event.target.dataset.id
      console.log(chosenItem)
    })
  }
}
