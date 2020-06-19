import { selectorRadioButton, selectedItems } from './helper'

interface EventTarget {
  dataset: string
}

/**
 * @export
 * @returns {Promise<void>}
 */
export default async function addButtonSelectionListeners (): Promise<void> {
  for (let index = 0; index < selectorRadioButton.length; index++) {
    const radio: Element = selectorRadioButton.item(index)

    radio.addEventListener('click', (event: Event): void => {
      const chosenId: EventTarget = event.target.dataset.id
      const chosenCard: Node = document.querySelector(`[data-id=${chosenId}]`)
        .parentElement.parentElement.parentElement
        .cloneNode(true)

      selectedItems.appendChild(chosenCard)
      // console.log(chosenCard)
    })
  }
}
