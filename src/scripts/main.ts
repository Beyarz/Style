import { produceCards } from './card'

import {
  ItemsPropertyList,
} from './helper'

import { generateLayout } from './layout'
import addButtonSelectionListeners from './selection'
import { preSelectedStyleExist, applyPreSelectedStyle } from './share'

const items: ItemsPropertyList = require('../assets/items.json')
const sharedCollectionHash: string = window.location.hash.replace(/#/g, '')

generateLayout(items)
  .then((items: ItemsPropertyList): void => { produceCards(items) })

  .finally((): void => {
    addButtonSelectionListeners()

    if (preSelectedStyleExist()) {
      applyPreSelectedStyle(sharedCollectionHash)
    }
  })

  .catch((reason: string): void => { console.log(reason) })
