import { produceCards } from './card'
import { ItemsPropertyList } from './helper'
import { generateLayout } from './layout'
import addButtonSelectionListeners from './selection'
import { preSelectedStyleExist, applyPreSelectedStyle } from './share'

class Engine {
  items: ItemsPropertyList
  sharedCollectionHash: string

  /**
   * Creates an instance of Engine.
   * @param {string} srcPath
   * @memberof Engine
   */
  constructor(srcPath: string) {
    this.items = require(srcPath) || require('../assets/items.json')
    this.sharedCollectionHash = window.location.hash.replace(/#/g, '')
  }

  /**
   * Renders the items
   * @param {ItemsPropertyList} [items=this.items]
   * @memberof Engine
   */
  public async renderItems(items: ItemsPropertyList = this.items) {
    await generateLayout(items).catch((reason: string) => { console.log(reason) })

    produceCards(items)
    addButtonSelectionListeners().catch((reason: string) => { console.log(reason) })

    if (preSelectedStyleExist()) {
      applyPreSelectedStyle(this.sharedCollectionHash)
    }
  }
}

const app = new Engine('../assets/items.json')
app.renderItems()
