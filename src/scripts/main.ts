import '../styles/main.scss'

const cardContainer = document.getElementById('card-container')
const translate3dX: number = 420

function newCard (title: string): string {
  return `<li class="list-group-item no-border" onclick=move()>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">...</p>
              </div>
            </div>
          </li>`
}

function move (translate3dX: number) {
  translate3dX += 100
  cardContainer.style.transform = `translate3d(${translate3dX}px, 0px, 0px)`
}

for (let index = 0; index < 15; index++) {
  cardContainer.innerHTML += newCard('test')
}
