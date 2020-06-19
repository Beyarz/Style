import { ItemsProperty } from './helper'

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
   * @param {string} [src=this.src]
   * @param {string} [id=this.id]
   * @returns {string}
   * @memberof Card
   */
  private create (src: string = this.src, id: string = this.id): string {
    return `<div class="card">
              <img src="${src}" class="card-img-top" alt="Image">
              <label class="btn btn-light mt-4">
                <input class="btn-group-toggle no-radio" type="radio" name="options" data-id="${id}">Select
              </label>
            </div>`
  }


  /**
   * @param {string} [type=this.type]
   * @memberof Card
   */
  public display (type: string = this.type): void {
    const typeLayout: Element = document.getElementById(type)
    const typeItem: string = this.create()
    const typeNode: Element = document.createElement('li')

    const classes: Array<string> = ['list-group-item', 'no-border', 'mb-3']
    classes.forEach((element: string): void => {
      typeNode.classList.add(element)
    })

    typeNode.innerHTML = typeItem
    typeLayout.appendChild(typeNode)
  }
}

/**
 * @export
 * @param {ItemsProperty} contents
 */
export function produceCards (contents: ItemsProperty): void {
  const entries = Object.entries(contents)

  entries.forEach(item => {
    const type: string = item[0]
    const srcProperty: Array<string> = item[1].src
    const idProperty: Array<string> = item[1].id

    for (let index = 0; index < srcProperty.length; index++) {
      const newCard = new Card(type, srcProperty[index], idProperty[index])
      newCard.display()
    }
  })
}
