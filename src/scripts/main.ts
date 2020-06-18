import { displayItems } from './card'
import { items, ItemsProperty } from './helper'
import { generateLayout } from './layout'
import addButtonEventListeners from './selection'

generateLayout(items)
  .then((items: ItemsProperty): void => { displayItems(items) })
  .then((): void => {
    addButtonEventListeners().catch((reason: any) => { console.log(reason) })
  })
  .catch((reason: any) => { console.log(reason) })
