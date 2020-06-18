import '../styles/main.scss'
import { items } from './helper'
import { addButtonEventListeners } from './card'
import { generateLayout } from './layout'

generateLayout(items)
addButtonEventListeners()
