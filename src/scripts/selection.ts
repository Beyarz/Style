import { selectorRadioButton } from './helper'

/**
 * @export
 * @returns {Promise<void>}
 */
export default async function addButtonEventListeners (): Promise<void> {
  for (let index = 0; index < selectorRadioButton.length; index++) {
    const radio: Element = selectorRadioButton.item(index)

    radio.addEventListener('click', (event: Event) => {
      const chosenId: Event = event.target.dataset.id
      const chosenCard: Element = document.querySelectorAll(`[data-id=${chosenId}]`).item(0).parentElement.parentElement.parentElement
      console.log(chosenCard)
    })
  }
}
