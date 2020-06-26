import { produceCards } from './card'
import { items, ItemsProperty } from './helper'
import { generateLayout } from './layout'
import addButtonSelectionListeners from './selection'

generateLayout(items)
  .then((items: ItemsProperty): void => { produceCards(items) })
  .finally((): void => {
    addButtonSelectionListeners()
  })
  .catch((reason: string): void => { console.log(reason) })
