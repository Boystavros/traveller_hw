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

// Uses set and test edited
Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportArr  = this.journeys.map((journey) => journey.transport);
  return new Set(transportArr);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const filteredTransport = [];
  this.journeys.forEach((journey) => {
    if (!filteredTransport.includes(journey.transport)){
      filteredTransport.push(journey.transport);
    }
  });
  return filteredTransport;
};






module.exports = Traveller;
