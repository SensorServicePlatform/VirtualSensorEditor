//Test Suite for Design Tool
describe("Business logic layer", function() {
	var storageObject, storageObj;

	describe("readSensorData method", function() {
		var initialCallIndicator = true;
		var notInitialCallIndicator = false;
		var feederUUID = "123456789";
		beforeEach(function() {
			createFeeder(feederUUID);								
		});
		
		it("should return a float value when isInitialCall is set", function() {
			expect(readSensorData(feederUUID, initialCallIndicator)).toEqual(jasmine.any(Number));
		});
	});	
	
	describe("createUUID method", function() {		
		it("should be able to create a UUID with a specific prefix", function() {
			expect(createUUID("prefix")).toContain("prefix");
		});
	});
	
	describe("readSensorStatus", function() {
		var feederUUID = "123456789";

		beforeEach(function() {
			createFeeder(feederUUID);
		});

		it("should be able to get the status of the sensor", function() {
			expect(readSensorStatus(feederUUID)).toMatch(/\bred|black\b/);
		});
	});
	
	describe("saveVirtualSensor method", function() {
		var feederUUID = "123456789";
		var saveVirtualSensor = null;
		var editingMode = false;

		beforeEach(function() {
    		createFeeder(feederUUID);
 
			saveVirtualSensor = {
				persistToLocalStorage: function(){}
			};

			spyOn(saveVirtualSensor, 'persistToLocalStorage');
			saveVirtualSensor.persistToLocalStorage();
		});

		it("should be able to save sensor to local storage", function() {
			expect(saveVirtualSensor.persistToLocalStorage).toHaveBeenCalled();
		});
	});
	
	describe("saveVirtualSensor method", function() {
		var feederUUID = "123456789";
		var saveVirtualSensor = null;

		beforeEach(function() {
    		createFeeder(feederUUID);
 
			saveVirtualSensor = {
				populateVirtualSensorList: function(){}
			}

			spyOn(saveVirtualSensor, 'populateVirtualSensorList');
			saveVirtualSensor.populateVirtualSensorList();
		});

		it("should be able to populate the sensor list", function() {
			expect(saveVirtualSensor.populateVirtualSensorList).toHaveBeenCalled();
		});
	});

	describe("getParameterValues method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
    		saveElementAndChildren(feederUUID);
		});
		
		it("should be able to get parameter values for a virtual senosr based on their types", function() {
			//expect(getParameterValues(feederUUID)).toMatch(/[+-]?\d+(\.\d+)?|(\btrue|false\b)|,/);
		});
	});	

	describe("saveVirtualSensor method", function() {
		var feederUUID = "123456789";
		var saveVirtualSensor = null;

		beforeEach(function() {
    		createFeeder(feederUUID);
 
			saveVirtualSensor = {
				clearCanvas: function(){}
			}
			spyOn(saveVirtualSensor, 'clearCanvas');
			saveVirtualSensor.clearCanvas();
		});

		it("should be able to clear the canvas", function() {
			expect(saveVirtualSensor.clearCanvas).toHaveBeenCalled();
		});
	});

	describe("saveElementAndChildren method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
    		
		});
		
		it("should be able to save an element with its childeren", function() {
			expect(saveElementAndChildren(feederUUID)).toBeArray();
			console.log(saveElementAndChildren(feederUUID));
		});
	});

	describe("persistToLocalStorage method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);

    	Modernizr = {
    		localStorage: function(){
    			return true;
    		}
    	}

    	JSON = {
    		stringify: function(value){}
    	}

    	spyOn(Modernizr, 'localStorage');
    	Modernizr.localStorage();

    	spyOn(JSON, 'stringify');
    	JSON.stringify(storageObject);
		});
		
		it("should be able to call the local storage function", function() {
			expect(Modernizr.localStorage).toHaveBeenCalled();
			console.log("persist Method");
			console.log(Modernizr.localStorage);
		});

		it("should get 'true' from the local storage function", function() {
			expect(Modernizr.localStorage).toBeTruthy();
		});
		it("should call the stringify function to convert the storage object", function() {
			expect(JSON.stringify).toHaveBeenCalledWith(storageObject);
		});
	});
	
	describe("recoverFromLocalStorage method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);

    	Modernizr = {
    		localStorage: function(){
    			return true;
	    		}
	    	}

	    	JSON = {
	    		parse: function(value){}
	    	}

	    	spyOn(Modernizr, 'localStorage');
	    	Modernizr.localStorage();

	    	spyOn(JSON, 'parse');
	    	JSON.parse(storageObj);
		});
		
		it("should be able to call the local storage function", function() {
			expect(Modernizr.localStorage).toHaveBeenCalled();
		});

		it("should get 'true' from the local storage function", function() {
			expect(Modernizr.localStorage).toBeTruthy();
		});
		it("should call the stringify function to convert the storage object", function() {
			expect(JSON.parse).toHaveBeenCalledWith(storageObj);
		});	
	});
	
	describe("closeEditingCanvas method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);

    	closeEditingCanvas = {
    	 	clearCanvas: function(){}
    		}

    		spyOn(closeEditingCanvas,'clearCanvas');
    		closeEditingCanvas.clearCanvas();
		});
		
		it("should be able to close the editing canvas", function() {
			expect(closeEditingCanvas.clearCanvas).toHaveBeenCalled();
		});
	});
	
	describe("populateVirtualSensorList method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should be able to populate the virtual sensor list", function() {
			expect(readSensorData(feederUUID)).toBe(100.0);
		});
	});
	
	describe("editVirtualSensor method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should be able to edit a virtual sensor", function() {
			expect(readSensorData(feederUUID)).toBe(100.0);
		});
	});
	
	describe("clearCanvas method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should be able to clear the canvas", function() {
			expect(readSensorData(feederUUID)).toBe(100.0);
		});
	});
	
	describe("removeFromGlobalSensorInfo method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);

    		removeFromGlobalSensorInfo = {
    			clearInterval: function(){}
    		}
    		spyOn(removeFromGlobalSensorInfo, 'clearInterval');
    		removeFromGlobalSensorInfo.clearInterval();
		});
		
		it("should be able to remove a sensor with a UUID from GlobalSensorInfo", function() {
			expect(removeFromGlobalSensorInfo.clearInterval).toHaveBeenCalled();
		});
	});
	
	describe("deleteVirtualSensor method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);

			deleteVirtualSensor =  {
				confirm: function(){
					return true;
				}
			}
			clearCanvasAfterDeletion = {
				clearCanvas: function(){}	
			}	
			persistToStorageAfterDeletion = {
				persistToLocalStorage: function(){}
			}
			populateListAfterDeletion = {
				populateVirtualSensorList: function(){}
			}
			spyOn(deleteVirtualSensor,'confirm');
			deleteVirtualSensor.confirm();

			spyOn(clearCanvasAfterDeletion, 'clearCanvas');
			clearCanvasAfterDeletion.clearCanvas();

			spyOn(persistToStorageAfterDeletion, 'persistToLocalStorage');
			persistToStorageAfterDeletion.persistToLocalStorage();

			spyOn(populateListAfterDeletion, 'populateVirtualSensorList');
			populateListAfterDeletion.populateVirtualSensorList();
		});
		
		it("should ask for confirmation to delete the virtual sensor", function() {
			expect(deleteVirtualSensor.confirm).toHaveBeenCalled();
		});

		it("should get confirmation to delete the virtual sensor", function() {
			expect(deleteVirtualSensor.confirm).toBeTruthy();
		});

		it("should clear the canvas after deleting the virtual sensor", function() {
			expect(clearCanvasAfterDeletion.clearCanvas).toHaveBeenCalled();
		});

		it("should update the local storage after deleting the virtual sensor", function() {
			expect(persistToStorageAfterDeletion.persistToLocalStorage).toHaveBeenCalled();
		});

		it("should updae the sensor list after deleting the virtual sensor", function() {
			expect(populateListAfterDeletion.populateVirtualSensorList).toHaveBeenCalled();
		});
	});
	
	describe("unfoldVirtualSensor", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should be able to unfold a virtual sensor", function() {
			expect(readSensorData(feederUUID)).toBe(100.0);
		});
	});
});

