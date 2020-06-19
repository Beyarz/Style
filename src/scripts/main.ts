import { produceCards } from './card'
import { items, ItemsProperty } from './helper'
import { generateLayout } from './layout'
import addButtonSelectionListeners from './selection'

generateLayout(items)
  .then((items: ItemsProperty): void => { produceCards(items) })
  .then((): void => {
    addButtonSelectionListeners().catch((reason: any) => { console.log(reason) })
  })
  .catch((reason: any) => { console.log(reason) })
