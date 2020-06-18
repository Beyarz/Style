import '../styles/main.scss'
import { ItemsProperty } from './helper'
import { addButtonEventListeners } from './card'
import { generateLayout } from './layout'
const items: ItemsProperty = require('../assets/items.json')

generateLayout(items)
addButtonEventListeners()
