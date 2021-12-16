const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    return this.journeys.map((journey) => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey) => totalDistance + journey.distance, 0);
};

// Initial attempt, but uses a set and required test to be edited, until a helpful reminder from Del that I could switch it back to an array!

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportArr  = this.journeys.map((journey) => journey.transport);
  return [... new Set(transportArr)];
};

// Second attempt, works but uses foreach()

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const filteredTransport = [];
//   this.journeys.forEach((journey) => {
//     if (!filteredTransport.includes(journey.transport)){
//       filteredTransport.push(journey.transport);
//     }
//   });
//   return filteredTransport;
// };

// Third attempt refactors above, but found with help of Stack Overflow!

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const transportTypes = this.journeys.map((journey) => journey.transport);
//   return transportTypes.filter((transport, pos) => transportTypes.indexOf(transport) === pos);
// };



module.exports = Traveller;
