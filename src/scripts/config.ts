interface ConfigInterface {
  url: {
    protocol: string
    domain: string
    extension: string
  }
}

const config: ConfigInterface = require('../assets/config.json')

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
