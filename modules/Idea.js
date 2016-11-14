import React from 'react'

export default React.createClass({
  render() {
    return (
      <div id='idea-container'>
        <p>
          {
            [
              'Wir sind begeistert von der Idee der 3D Formen und des 3D Drucken.',
              'Eine mögliche Welt ohne unnötige Transportwege, Lagerungskosten und Überproduktion von Dingen jeglicher Art.',
              'Diese Zukunft wollen wir mit 3D Former.de mitgestalten. Dabei kommt es auf Dich an.',
              'Jede 3D Form die Du erfunden und als Datei erstellt hast kannst Du in unserem 3D Katalog zeigen und anderen anbieten.',
              'Mehr noch! Du hast einen 3D Drucker in Betrieb und siehst Dich in der Lage noch Leerzeiten des Druckers zu nutzen um 3D Formen aus dem Katalog zu drucken? '
            ].join(' ')
          }
        </p>
        <br/>
        <p>
          {
            [
              'Dann melde Dich einfach kostenfrei an und erstelle einen Eintrag mit Deinen 3D Formen!',
              'Jede 3D Form kannst Du dann als Download anbieten und / oder auch direkt für Interessenten ausdrucken.'
            ].join(' ')
          }
        </p>
        <br/>
        <p>
          {
            [
              'Sofern Du „nur“ einen 3D Drucker in unser Portal einbringen möchtest, kannst Du diesen ebenfalls in einem Account anmelden und unserem Netzwerk von 3D Druckern anschließen.',
              'Mit Blick auf die Leistung deines 3D Drucker wählst Du dann bereits eingetragene 3D Formen aus dem Katalog aus und bestimmst einen Preis für den Ausdruck.',
              'Sofern dann aus dem Katalog ein Kunde einen Druckauftrag starten möchte kann er ggf. auf dein Angebot zurückkommen und Dich mit einem konkreten Druckauftrag einer 3D Form anfragen und buchen.'
            ].join(' ')
          }
        </p>
        <br/>
        <p>
          {
            [
              'In letzter Zeit nun sind Geräte auf dem Markt die 3D Drucken auch für den Hausgebrauch interessant machen.',
              'Diese Geräte funktionieren zumeist nach dem FDM Verfahren.',
              'Bei dieser Technologie werden verschiedene Kunststoff geschmolzen und schichtweise aufgebaut.',
              'Hast Du einen 3D Drucker bereits in Betrieb oder planst die Anschaffung eines 3D Druckers.',
              'Dann werden unser Partner und melde Dein Drucker bei uns an und erhalte Druckaufträge aus dem 3D Formen Katalog.'
            ].join(' ')
          }
        </p>
      </div>
    )
  }
})
