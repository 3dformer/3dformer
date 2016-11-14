import React from 'react'

export default React.createClass({
  render() {
    return (
      <div id='reality-container'>
        <p>
          {
            [
              'Die Rohstoffe für den 3D-Druck lassen sich deutlich leichter lagern und transportieren.',
              'Ob Prototyp oder serielle Produktion. Es werden aktuell die Gegenstände gedruckt die auch tatsächlich gebraucht werden.',
              'Lange Lagerzeiten oder überflüssige  Produktionen fallen weg.',
              '3D Drucker sind nun schon seit einigen Jahren im Einsatz.',
              'Vornehmlich in der Industrie verwendet, können die 3D Drucker effizient Einzelbauteilen und Kleinserien anfertigen.',
              'Dabei werden vornehmlich Techniken wie das Laserbrennen (sintern) und Laserschmelzen eingesetzt.'
            ].join(' ')
          }
        </p>
        <br/>
        <p>
          {
            [
              'Bei diesen Anfertigungen werden dünne Schichten von Metall- oder Keramik-Pulver zusammengeführt oder verschiedene Formen von flüssigem Kunststoff durch den Laser schichtweise ausgehärtet.'
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
              'Hast Du einen 3D Drucker bereits in Betrieb oder planst die Anschaffung eines 3D Druckers. Dann werden unser Partner und melde Dein Drucker bei uns an und erhalte Druckaufträge aus dem 3D Formen Katalog.'
            ].join(' ')
          }
        </p>
      </div>
    )
  }
})
