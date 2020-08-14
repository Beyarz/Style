import '../styles/main.scss'

export interface ItemsPropertyList {
  type?: string,
  src: Array<string>,
  id: Array<string>
}

const root: Element = document.getElementById('layout-root')
const publishSectionId: string = 'publish-section'

export {
  root,
  publishSectionId
}
