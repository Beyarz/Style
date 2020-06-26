export function currentChosenStyle (suggestedStyle: object): void {
  const stringifiedStyle: string = JSON.stringify(suggestedStyle)
  const encodedStyle = encodeURI(btoa(stringifiedStyle))
  window.location.hash = encodedStyle

  //! Filter out special characters from window.location.hash
  const hash = window.location.hash === '' ? encodedStyle : window.location.hash.replace(/#/g, '')
  console.log(hash)
}
