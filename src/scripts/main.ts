import { items, ItemsProperty } from './helper'
import { addButtonEventListeners, displayItems } from './card'
import { generateLayout } from './layout'

generateLayout(items)
  .then((items: ItemsProperty): void => { displayItems(items) })
  .then((): void => {
    addButtonEventListeners().catch((reason: any) => { console.log(reason) })
  })
  .catch((reason: any) => { console.log(reason) })
