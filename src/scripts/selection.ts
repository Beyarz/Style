import { selectorRadioButton, selectedItems } from './helper'

/**
 * @export
 * @returns {Promise<void>}
 */
export default async function addButtonSelectionListeners (): Promise<void> {
  for (let index = 0; index < selectorRadioButton.length; index++) {
    const radio: Element = selectorRadioButton.item(index)

    radio.addEventListener('click', (event: Event): void => {
      const chosenId: Event = event.target.dataset.id
      const chosenCard: Node = document.querySelectorAll(`[data-id=${chosenId}]`)
        .item(0).parentElement.parentElement.parentElement
        .cloneNode(true)

      selectedItems.appendChild(chosenCard)
      // console.log(chosenCard)
    })
  }
}
