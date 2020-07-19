import { selectorRadioButton, selectedItems, combinationLead, publishSectionId, sharedUrlId } from './helper'
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
async function addPublishSection (): Promise<void> {
  const publishSection: Element = document.createElement('blockquote')
  const publishSectionClassList: Array<string> = ['blockquote', 'text-center', 'mb-3', 'mt-3', 'container']

  publishSectionClassList.forEach((element: string) => {
    publishSection.classList.add(element)
  })

  publishSection.setAttribute('id', publishSectionId)

  if (selectedItems.childNodes.length !== 0 && document.getElementById(publishSectionId) === null) {
    selectedItems.parentElement.parentElement.appendChild(publishSection)

    //* A weird bug occurs when loading the page with dev tool open, the paragraph doesn't fully render
    if (combinationLead !== null) {
      combinationLead.remove()
    }
  }

  const sharedUrl: Element = document.createElement('a')
  sharedUrl.setAttribute('id', sharedUrlId)
  publishSection.appendChild(sharedUrl)
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
      addPublishSection()
      currentlyPickedStyle(chosenType, { src, id })
    })
  }
}

export {
  addPublishSection,
  addButtonSelectionListeners
}
