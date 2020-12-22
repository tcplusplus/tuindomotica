// const axios = require('axios');

const ARDUINO_IP = '192.168.1.184'   // uw device moet in dezelfde range zitten als de arduino
const STATUS_UPDATE_INTERVAL = 2000

function checkStatus () {
  axios.get(`http://${ARDUINO_IP}/S`, { timeout: 2000 }).then(response => {
    // deze logs kun je zien in chrome door rechts te klikken op de pagina
    // kies 'inspect'
    // in het nieuwe verster ga naar 'console'
    // Ik heb deze code niet kunnen testen, dus het is mogelijk dat het niet response.text is maar iets anders.
    // hier in de console kun je allesinds zien wat er terug komt.
    console.log('Status van de arduino', response)
    const status = response.text === '0' ? 'Uit' : 'Aan'
    setStatusInHTML(status)
  }).catch(error => {
    console.warn('Kan geen verbinding maken met de arduino', error)
    setStatusInHTML('Geen connectie')
  })
}

function setLightStatus (enabled) {
  const url = enabled ? `http://${ARDUINO_IP}/H` : `http://${ARDUINO_IP}/L`
  axios.get(url).then(() => {
    const status = enabled === '0' ? 'Uit' : 'Aan'
    setStatusInHTML(status)
  })
}

function setStatusInHTML(status) {
  // Update the <b> in de html met id 'status'
  document.getElementById('status').innerHTML = status
}


// Check status om de zoveel seconden
setInterval(checkStatus, STATUS_UPDATE_INTERVAL)

