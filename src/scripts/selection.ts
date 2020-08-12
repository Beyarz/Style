import {
  selectorRadioButton,
  selectedItems,
  combinationLead,
  publishSectionId,
  parentCopyButtonId,
  shareContainerId
} from './helper'

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
  const copyButtonContainer: Element = document.createElement('div')
  copyButtonContainer.innerHTML = `<div class="input-group mb-3 mt-3" id="${shareContainerId}">
                                      <div class="input-group-append input-group-lg container-fluid" id="${parentCopyButtonId}"></div>
                                    </div>`

  const publishSection: Element = document.createElement('input')
  publishSection.setAttribute('id', publishSectionId)
  publishSection.setAttribute('type', 'text')
  publishSection.setAttribute('class', 'form-control radius-left')
  publishSection.setAttribute('placeholder', 'Loading url...')

  const copyButton: Element = document.createElement('button')
  copyButton.setAttribute('class', 'btn btn-outline-secondary input-group-text')
  copyButton.addEventListener('click', (copyEvent: Event) => {
    console.log(copyEvent)
    console.log(copyEvent.target.baseURI)
    const copyContent: string = copyEvent.target.baseURI
    navigator.clipboard.writeText(copyContent)
  })
  copyButton.textContent = 'Copy'

  const shareButton: Element = document.createElement('button')
  shareButton.setAttribute('class', 'btn btn-outline-secondary input-group-text radius-right')
  shareButton.addEventListener('click', (copyEvent: Event) => {
    const copyContent: string = copyEvent.target.baseURI
    navigator.clipboard.writeText(copyContent)

    navigator
      .share({
        title: document.title,
        text: 'My collection title\n',
        url: copyContent
      })
      .catch(error => console.error(error))
  })
  shareButton.textContent = 'Share'

  if (selectedItems.childNodes.length !== 0 && document.getElementById(publishSectionId) === null) {
    selectedItems.parentElement.parentElement.appendChild(copyButtonContainer)

    document.getElementById(parentCopyButtonId).appendChild(publishSection)
    document.getElementById(parentCopyButtonId).appendChild(copyButton)
    document.getElementById(parentCopyButtonId).appendChild(shareButton)

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
