import { produceCards } from './card'
import { items, ItemsPropertyList, Suggestion } from './helper'
import { generateLayout } from './layout'
import addButtonSelectionListeners from './selection'

generateLayout(items)
  .then((items: ItemsPropertyList): void => { produceCards(items) })
  .finally((): void => {
    addButtonSelectionListeners()
  })
  .catch((reason: string): void => { console.log(reason) })

const suggestedCollection: Suggestion = null
