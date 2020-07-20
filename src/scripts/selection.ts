import { selectorRadioButton, selectedItems, combinationLead, publishSectionId, sharedUrlId } from './helper'
import { currentlyPickedStyle } from './share'

interface TargetDataset extends EventTarget {
  dataset?: {
    type: string,
    id: string,
    src: string
  }
}

interface ElementDataset extends Element {
  dataset: {
    type: string
  }
}

/**
 * @returns {Promise<void>}
 */
async function addPublishSection (): Promise<void> {
  const publishSection: Element = document.createElement('input')
  publishSection.setAttribute('id', publishSectionId)

  const publishSectionClassList: Array<string> = ['form-control', 'mb-5', 'mt-5']
  publishSectionClassList.forEach((element: string) => {
    publishSection.classList.add(element)
  })


  if (selectedItems.childNodes.length !== 0 && document.getElementById(publishSectionId) === null) {
    selectedItems.parentElement.parentElement.appendChild(publishSection)

    //* A weird bug occurs when loading the page with dev tool open on Safari,
    //* the paragraph doesn't fully render
    if (combinationLead !== null) {
      combinationLead.remove()
    }
  }

  // document.getElementById(publishSectionId).parentElement.innerHTML = `<div class="input-group mb-3">
  //   <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  //   <div class="input-group-append" data-clipboard-target="#foo">
  //     <span class="input-group-text" id="basic-addon2">@example.com</span>
  //   </div>
  // </div>`
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
      selectedItems.childNodes.forEach((element: ElementDataset) => {
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
