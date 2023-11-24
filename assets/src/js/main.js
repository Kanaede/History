import mediumZoom from 'https://cdn.jsdelivr.net/npm/medium-zoom@1.1.0/dist/medium-zoom.min.js'

const zoomDefault = mediumZoom('#zoom-default')

const observedZooms = [
  zoomDefault,
]

const history = document.querySelector('#history')

observedZooms.forEach(zoom => {
  zoom.on('open', event => {
    const time = new Date().toLocaleTimeString()
    history.innerHTML += `<li>Image "<em>${
      event.target.alt
    }</em>" was zoomed at ${time}</li>`
  })

  zoom.on('detach', event => {
    const time = new Date().toLocaleTimeString()
    history.innerHTML += `<li>Image <em>"${
      event.target.alt
    }"</em> was detached at ${time}</li>`
  })
})