import { ItemsProperty, Suggestion } from './helper'

export function currentlyPickedStyle (suggestedType: string, suggestedStyle: ItemsProperty): void {
  // const stringifiedStyle: string = JSON.stringify(suggestedStyle)
  // const encodedStyle: string = encodeURI(btoa(stringifiedStyle))
  // window.location.hash = encodedStyle
  // const hash: string = encodedStyle

  const type = suggestedType
  const selected = {
    id: suggestedStyle.id,
    src: suggestedStyle.src
  }
  const assembleSuggestion: Suggestion = { type, selected }
  console.log(assembleSuggestion)
}

export function PreSelectedStyleExist (): boolean {
  return window.location.hash === ''
}
