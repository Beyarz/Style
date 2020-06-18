import { items, ItemsProperty } from './helper'
import { addButtonEventListeners, displayItems } from './card'
import { generateLayout } from './layout'

generateLayout(items)
  .then((items: ItemsProperty): void => { displayItems(items) })
  .catch((reason: any) => { console.log(reason) })

addButtonEventListeners().catch((reason: any) => { console.log(reason) })
