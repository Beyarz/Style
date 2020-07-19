import { produceCards } from './card'
import { items, ItemsPropertyList, sharedCollectionHash } from './helper'
import { generateLayout } from './layout'
import addButtonSelectionListeners from './selection'
import { preSelectedStyleExist, applyPreSelectedStyle } from './share'

generateLayout(items)
  .then((items: ItemsPropertyList): void => { produceCards(items) })
  .finally((): void => {
    addButtonSelectionListeners()

    if (preSelectedStyleExist()) {
      applyPreSelectedStyle(sharedCollectionHash)
    }
  })
  .catch((reason: string): void => { console.log(reason) })
