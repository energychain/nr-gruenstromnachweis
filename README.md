# nr-gruenstromnachweis
**Node-RED Node zur automatischen Zählerstandsübermittlung für den Erhalt von GrünstromNachweisen.**

[![Downloads](https://img.shields.io/npm/dt/nr-gruenstromnachweis.svg)](https://www.npmjs.com/package/nr-gruenstromnachweis)
[![License](https://img.shields.io/npm/l/nr-gruenstromnachweis.svg)](https://github.com/energychain/nr-gruenstromnachweis/blob/master/LICENSE)

Nutzt: https://tracker.gruenstromindex.de/ 

## Hintergrund
GrünstromNachweise sind digitale Zertifikate, die den Herkunftsnachweis für erzeugten Ökostrom erbringen. Sie ermöglichen eine präzise und transparente Nachweisführung von CO2-Emissionen und unterstützen Unternehmen dabei, ihre Scope-2-Emissionen zu bilanzieren. Durch den Einsatz von Blockchain-Technologie und Smart Contracts wird die Integrität und Sicherheit der Nachweise gewährleistet, wodurch die Einhaltung internationaler Standards und Normen erleichtert wird. Diese digitalen Nachweise fördern nachhaltiges Wirtschaften und den Handel mit Emissionsrechten. [weitere Informationen](https://corrently.io/books/optimierung-der-scope-2-berichterstattung-durch-digitale-nachweise-und-emissionshandel/chapter/konzept-der-digitalen-nachweisfuhrung-und-tokenokonomie)

## Nutzung in Node RED
Mit Hilfe dieses Nodes können die Zählerstände automatisch übermittelt werden. Hierzu wird bei der Konfiguration des Nodes zunächst eine Verknüpfung mit dem Tracker hergestellt. Im Anschluss erwartet das Node am Eingang einen Zählerstand in Watt-Stunden (Wh) und gibt nach erfolgreicher Übermittlung die aktuellen Trackerdaten zurück.

## Maintainer / Impressum

<addr>
STROMDAO GmbH  <br/>
Gerhard Weiser Ring 29  <br/>
69256 Mauer  <br/>
Germany  <br/>
  <br/>
+49 6226 968 009 0  <br/>
  <br/>
dev@stromdao.com  <br/>
  <br/>
Handelsregister: HRB 728691 (Amtsgericht Mannheim)<br/>
  <br/>
https://stromdao.de/<br/>
</addr>

