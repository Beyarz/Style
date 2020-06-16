const unOrderedList: HTMLCollection = document.getElementsByClassName('list-group list-group-horizontal')

function newCard (type: string, clothing: string, id: string): string {
  return `<li class="list-group-item no-border">
            <div class="card">
              <img src="../assets/${type}/${clothing}" class="card-img-top" alt="Image">
              <label class="btn btn-light">
                <input class="btn-group-toggle no-radio" type="radio" name="options" data-id="${id}">Select
              </label>
            </div>
          </li>`
}

export function addButtonEventListeners (): void {
  const selectorRadioButton: HTMLCollection = document.getElementsByClassName('no-radio')

  for (let index = 0; index < selectorRadioButton.length; index++) {
    const radio = selectorRadioButton.item(index)
    radio.addEventListener('click', event => {
      const chosenItem: string = event.target.dataset.id
      console.log(chosenItem)
    })
  }
}

export function generateItems (): void {
  const clothingType: Array<any> = []
  const specificClothing: Array<any> = []
  const idItems: Array<any> = []

  for (let index = 0; index < clothingType.length; index++) {
    const ulListLength: number = unOrderedList.length
    for (let collection = 0; collection < ulListLength; collection++) {
      unOrderedList.item(collection).innerHTML += newCard(clothingType[index], specificClothing[index], idItems[index])
    }
  }
}
