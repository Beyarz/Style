import { selectorRadioButton, selectedItems, combinationLead } from './helper'
import { currentlyPickedStyle } from './share'

interface TargetDataset extends EventTarget {
  dataset?: {
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
    selectedItems.parentElement.parentElement.appendChild(publishButton)

    //* A weird bug occurs when loading the page with dev tool open, the paragraph doesn't fully render
    if (combinationLead !== null) {
      combinationLead.remove()
    }
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
      const targetEvent: TargetDataset = event.target

      const chosenType: string = targetEvent.dataset.type
      const src: string = targetEvent.dataset.src
      const id: string = targetEvent.dataset.id

      const chosenCard: Node = document.querySelector(`[data-id=${id}]`)
        .parentElement.parentElement.parentElement
        .cloneNode(true)

      const labelTagIndex: number = 3

      // Remove previously selected item from the same type
      selectedItems.childNodes.forEach((element: Element) => {
        if (element.dataset.type === chosenType) {
          element.remove()
        }
      })

      chosenCard.lastChild.childNodes.item(labelTagIndex).remove()
      selectedItems.appendChild(chosenCard)
      addPublishButton()
      currentlyPickedStyle(chosenType, { src, id })
    })
  }
}

module.exports = {
  addPublishButton,
  addButtonSelectionListeners
}
