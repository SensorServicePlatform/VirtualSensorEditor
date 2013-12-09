function createFeeder(feederUUID) {
	var data = {"inputvalue" : 100.0}
    createNewFeederInCanvas(feederUUID, data);
}

function createPhysicalSensor(UUID) {
	var data = {"inputvalue" : 100.0}
    createNewPhysicalSensorInCanvas(feederUUID, data);
}

function createVirtualSensor(UUID) {
	var data = {"inputvalue" : 100.0}
    createNewVirtualSensorInCanvas(feederUUID, data);
}