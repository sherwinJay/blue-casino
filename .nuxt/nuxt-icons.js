export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.46472c.png","120x120":"/_nuxt/icons/icon_120.46472c.png","144x144":"/_nuxt/icons/icon_144.46472c.png","152x152":"/_nuxt/icons/icon_152.46472c.png","192x192":"/_nuxt/icons/icon_192.46472c.png","384x384":"/_nuxt/icons/icon_384.46472c.png","512x512":"/_nuxt/icons/icon_512.46472c.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
