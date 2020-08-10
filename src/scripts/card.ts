import { ItemsPropertyList } from './helper'
import { composeURL } from './config'

class Card {
  type: string
  src: string
  id: string

  constructor (type: string, src: string, id: string) {
    this.type = type
    this.src = src
    this.id = id
  }

  /**
   * @private
   * @param {string} [type=this.type]
   * @param {string} [src=this.src]
   * @param {string} [id=this.id]
   * @returns {string}
   * @memberof Card
   */
  private createByTemplate (type: string = this.type, src: string = this.src, id: string = this.id): string {
    const composedSrc: string = composeURL(src)
    return `<div class="card">
              <img src="${composedSrc}" class="card-img-top" alt="Image">
              <label class="btn btn-light mt-4">
                <input class="btn-group-toggle no-radio" type="radio" data-type="${type}" data-id="${id}" data-src="${composedSrc}">Select
              </label>
            </div>`
  }

  /**
   * @param {string} [type=this.type]
   * @memberof Card
   */
  public display (type: string = this.type): void {
    const typeLayout: Element = document.getElementById(type)
    const typeItem: string = this.createByTemplate()
    const typeNode: HTMLElement = document.createElement('li')

    const classes: Array<string> = ['list-group-item', 'no-border', 'mb-3']
    classes.forEach((element: string): void => {
      typeNode.classList.add(element)
    })

    typeNode.dataset.type = type
    typeNode.innerHTML = typeItem
    typeLayout.appendChild(typeNode)
  }
}

/**
 * @export
 * @param {ItemsPropertyList} contents
 */
function produceCards (contents: ItemsPropertyList): void {
  const entries = Object.entries(contents)

  //* The first index is the type
  //* The second index is object with src & id property
  entries.forEach((item: [string, ItemsPropertyList]) => {
    const type: string = item[0]
    const srcProperty: Array<string> = item[1].src
    const idProperty: Array<string> = item[1].id

    for (let index = 0; index < srcProperty.length; index++) {
      const card = new Card(type, srcProperty[index], idProperty[index])
      card.display()
    }
  })
}

export {
  produceCards
}
