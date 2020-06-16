const cardContainer: HTMLCollection = document.getElementsByClassName('list-group list-group-horizontal')

function newCard (title: string, description: string, id: string): string {
  return `<li class="list-group-item no-border">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
              </div>
              <label class="btn btn-light">
                <input class="btn-group-toggle no-radio" type="radio" name="options" data-id="${id}">Select
              </label>
            </div>
          </li>`
}

export function addRadioEventListeners (): void {
  const selectorRadioButton = document.getElementsByClassName('no-radio')

  for (let index = 0; index < selectorRadioButton.length; index++) {
    const radio = selectorRadioButton.item(index)
    radio.addEventListener('click', event => {
      const chosenItem = event.target.dataset.id
      console.log(chosenItem)
    })
  }
}

export function generateFakeCards (): void {
  const titleItems = ['title', 'title', 'title', '1', '2', '3']
  const descriptionItems = ['just a title', 'black jacket', 'white jacket with white furr', '1', '2', '3']
  const idItems = ['a', 'b', 'c', 'd', 'e', 'f']

  for (let index = 0; index < titleItems.length; index++) {
    const cardContainerLength = cardContainer.length
    for (let collection = 0; collection < cardContainerLength; collection++) {
      cardContainer.item(collection).innerHTML += newCard(titleItems[index], descriptionItems[index], idItems[index])
    }
  }
}
