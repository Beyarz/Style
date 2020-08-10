import { config } from './helper'

const proto: string = config.url.protocol
const domain: string = config.url.domain
const ext: string = config.url.extension

/**
 * @export
 * @param {string} name
 * @returns {string}
 */
export function composeURL (name: string): string {
  // return `${proto}://${domain}/${name}.${ext}`
  return `${name}`
}
