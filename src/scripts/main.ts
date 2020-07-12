import { produceCards } from './card'
import { items, ItemsPropertyList } from './helper'
import { generateLayout } from './layout'
import addButtonSelectionListeners from './selection'
// import { suggestedCollection } from './share'

generateLayout(items)
  .then((items: ItemsPropertyList): void => { produceCards(items) })
  .finally((): void => {
    addButtonSelectionListeners()
  })
  .catch((reason: string): void => { console.log(reason) })
