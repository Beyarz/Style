import { selectorRadioButton, selectedItems, combinationLead } from './helper'
import { currentChosenStyle } from './share'

interface EventTargetDataset extends EventTarget {
  dataset: {
    type: string,
    id: string,
    src: string
  }
}

/**
 * @returns {Promise<void>}
 */
async function addPublishButton (): Promise<void> {
  const publishButton: Element = document.createElement('button')
  const publishButtonClassList: Array<string> = ['btn', 'btn-secondary', 'btn-lg', 'btn-block', 'mb-3', 'mt-3']

  publishButtonClassList.forEach((element: string) => {
    publishButton.classList.add(element)
  })

  const publishButtonId: string = 'publish-button'
  publishButton.setAttribute('id', publishButtonId)
  publishButton.textContent = 'Publish'

  if (selectedItems.childNodes.length !== 0 && document.getElementById(publishButtonId) === null) {
    combinationLead.remove()
    selectedItems.parentElement.parentElement.appendChild(publishButton)
  }
}

/**
 * @export
 * @returns {Promise<void>}
 */
export default async function addButtonSelectionListeners (): Promise<void> {
  for (let index = 0; index < selectorRadioButton.length; index++) {
    const selectButton: Element = selectorRadioButton.item(index)

    selectButton.addEventListener('click', (event: Event): void => {
      const targetEvent: EventTargetDataset = event.target

      const chosenType: string = targetEvent.dataset.type
      const chosenId: string = targetEvent.dataset.id
      const chosenSrc: string = targetEvent.dataset.src

      const chosenCard: Node = document.querySelector(`[data-id=${chosenId}]`)
        .parentElement.parentElement.parentElement
        .cloneNode(true)

      // Remove previously selected item from the same type
      selectedItems.childNodes.forEach(element => {
        if (element.dataset.type === chosenType) {
          element.remove()
        }
      })

      currentChosenStyle({ chosenType, chosenSrc, chosenId })

      const labelTag: number = 3
      chosenCard.lastChild.childNodes.item(labelTag).remove()
      selectedItems.appendChild(chosenCard)

      addPublishButton()
    })
  }
}
