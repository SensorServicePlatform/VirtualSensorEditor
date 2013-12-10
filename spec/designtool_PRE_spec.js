//Test Suite for Design Tool
describe("Presentation Layer", function() {
	describe("createNewElementInCanvas method", function() {
		var feederUUID = "123456789";
		var data = {"inputvalue" : 100.0};

		beforeEach(function() {
    		createNewElementInCanvas = { 
				createOutputElement: function(){}
    		}

    		spyOn(createNewElementInCanvas, 'createOutputElement');
    		createNewElementInCanvas.createOutputElement(true);	
		});
		
		it("should be able to create a new element on canvas", function() {
			expect(createNewElementInCanvas.createOutputElement).toHaveBeenCalledWith(true);
		});
	});	
	
	describe("deleteElement method ", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);

    		deleteElement = {
    			removeFromGlobalSensorInfo: function(){}
    		}

    		spyOn(deleteElement,'removeFromGlobalSensorInfo');
    		deleteElement.removeFromGlobalSensorInfo();
		});
		
		it("should be able to delete an element", function() {
			expect(deleteElement.removeFromGlobalSensorInfo).toHaveBeenCalled();
		});
	});	
	
	describe(" createOutputElement method ", function() {
		var feederUUID = "123456789";
		
		it("should have a div called Design Canvas", function() {
			expect($('#design_canvas')).toBe('div');
		});				
	});	
	
	describe("createNewPhysicalSensorInCanvas method ", function() {
		var feederUUID = "123456789";
		var x = 180;
		var y = 120;
		
		beforeEach(function() {
    		createFeeder(feederUUID);

    		createNewPhysicalSensorInCanvas = {
    			setupChart: function(){}
    		}	

    		spyOn(createNewPhysicalSensorInCanvas,'setupChart');
    		createNewPhysicalSensorInCanvas.setupChart(feederUUID, x, y);
		});

		it("should have a div called Design Canvas", function() {
			expect($('#design_canvas')).toBe('div');
		});	

		it("should have a class called window", function() {
			expect($('<div class="window" id="' + feederUUID + '" >')).toHaveClass("window");
		});
				
		it("should have a sensor value object on canvas", function() {
			expect($("#sensor_value_" + feederUUID)).toBeObject();
		});

		it("should call the setup chart function", function() {
			expect(createNewPhysicalSensorInCanvas.setupChart).toHaveBeenCalled();
		});

		it("should construct the JSON string with the UUID", function() {
			expect(globalSensorInfo).toBeObject();
		});	
	});	
	
	describe("createNewVirtualSensorInCanvas method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
			var x = 180;
			var y = 120;	

    		unfoldVirtualSensorInCanvas = {
    			unfoldVirtualSensor: function(){}
    		}

       		createNewVirtualSensorInCanvas = {
    			setupChart: function(){}
    		}

			spyOn(unfoldVirtualSensorInCanvas,'unfoldVirtualSensor');
    		unfoldVirtualSensorInCanvas.unfoldVirtualSensor();

    		spyOn(createNewVirtualSensorInCanvas,'setupChart');
    		createNewVirtualSensorInCanvas.setupChart(feederUUID, x, y);
		});

		it("should have a div called Design Canvas", function() {
			expect($('#design_canvas')).toBe('div');
		});	

		it("should have a class called Window", function() {
			expect($('<div class="window" id="' + feederUUID + '" >')).toHaveClass("window");
		});
				
		it("should have a Sensor Value object on canvas", function() {
			expect($("#sensor_value_" + feederUUID)).toBeObject();
		});

		it("should call the unfold virtual sensor function", function() {
			expect(unfoldVirtualSensorInCanvas.unfoldVirtualSensor).toHaveBeenCalled();
		});

		it("should call the setup chart function", function() {
			expect(createNewVirtualSensorInCanvas.setupChart).toHaveBeenCalled();
		});

		it("should construct the JSON string with the UUID", function() {
			expect(globalSensorInfo).toBeObject();
		});	
	});	
	
	describe("createNewTemplateInCanvas method", function() {
		var feederUUID = "123456789";
		var x = 180;
		var y = 120;
		
		beforeEach(function() {
    		createFeeder(feederUUID);

    		createNewTemplateInCanvas = {
    			setupChart: function(){}
    		}	

    		spyOn(createNewTemplateInCanvas,'setupChart');
    		createNewTemplateInCanvas.setupChart(feederUUID, x, y);
		});

		it("should have a div called Design Canvas", function() {
			expect($('#design_canvas')).toBe('div');
		});	

		it("should have a class called window", function() {
			expect($('<div class="window" id="' + feederUUID + '" >')).toHaveClass("window");
		});
				
		it("should have a sensor value object on canvas", function() {
			expect($("#sensor_value_" + feederUUID)).toBeObject();
		});

		it("should call the setup chart function", function() {
			expect(createNewTemplateInCanvas.setupChart).toHaveBeenCalled();
		});	
		
		it("should construct the JSON string with the UUID", function() {
			expect(globalSensorInfo).toBeObject();
		});	
	});	
	
	describe("createNewFeederInCanvas method", function() {
		var feederUUID = "123456789";
		var data = {"inputvalue" : 100.0};

		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should have a div with the UUID", function() {
			console.log("Here in feeder");
			expect($('<div class="window" id="' + feederUUID + '" >')).toBe('div');
		});

		it("should have a class 'Window' with the UUID", function() {
			console.log("Here in feeder");
			expect($('<div class="window" id="' + feederUUID + '" >')).toHaveClass('window');
		});

		it("should construct the JSON string with the UUID", function() {
			expect(globalSensorInfo).toBeObject();
		});	
	});	
	
	describe("createNewMonitorInCanvas method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should have a div called Design Canvas", function() {
			expect($('#design_canvas')).toBe('div');
		});	

		it("should have a class called window", function() {
			expect($('<div class="window" id="' + feederUUID + '" >')).toHaveClass("window");
		});

	});	
	
	describe("monitorClick method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should hava a hidden field status object", function() {
			expect($("#hidden_field_status_" + feederUUID)).toBeObject();
		});

		it("should hava a monitor button object for the sensor", function() {
			expect($("#monitor_button_" + feederUUID)).toBeObject();//toBeObject();
		});
	});	
	
	describe("setCustomFunction method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should hava a hidden code object", function() {
			expect($("#hidden_code_" + feederUUID)).toBeObject();
		});
		
		it("should hava a hidden field is valid object", function() {
			expect($("#hidden_field_is_valid_" + feederUUID)).toBeObject();
		});

		it("should construct the JSON string with the UUID", function() {
			expect(globalSensorInfo[feederUUID]).toBeObject();
		});	

	});	
	
	describe("drag method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should be able to drag the method", function() {
			expect(readSensorData(feederUUID)).toBe(100.0);
		});
	});	
	
	describe("drop_window method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should be able to drop a window", function() {
			expect(readSensorData(feederUUID)).toBe(100.0);
		});
	});	
	
	describe("fixEndpoints method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should be able to fix the end points", function() {
			expect(readSensorData(feederUUID)).toBe(100.0);
		});
	});	
	
	describe("calculateEndpointPosition method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should be able to calculate the end point position", function() {
			expect(readSensorData(feederUUID)).toBe(100.0);
		});
	});	
	
	describe(" addTargetEndpoint method", function() {
		var feederUUID = "123456789";
		var obj;
		var targetEndpoints;
		
		beforeEach(function() {
    		createFeeder(feederUUID);

    		addTargetEndpoint = {
    			getEndPointsOfElement: function(){}
    		}	
    		spyOn(addTargetEndpoint,'getEndPointsOfElement');
    		addTargetEndpoint.getEndPointsOfElement();
		});
		
		it("should be get the end points of an element", function() {
			expect(addTargetEndpoint.getEndPointsOfElement).toHaveBeenCalled();
		});

		it("should be able to add a targe end point", function() {
			expect(readSensorData(feederUUID)).toBe(100.0);
		});
	});	
	
	describe("removeTargetEndpoint method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should be able to remove a targe end point", function() {
			expect(readSensorData(feederUUID)).toBe(100.0);
		});
	});	
	
	describe("feederLabelClick method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should be able to click on a label", function() {
			expect($("#sensor_value_" + feederUUID)).toHaveClass('sensor_value');
		});
	});	
	
	describe("codeView method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should have a function container object", function() {
			expect($('#vsFuncCont_'+feederUUID)).toBeObject();
		});
		
		it("should have a chart container object", function() {
		expect($('#vsChartCont_'+feederUUID)).toBeObject();
		});
	});	
	
	describe("timeSeriesView method", function() {
		var feederUUID = "123456789";
		
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		it("should have a function container object", function() {
			expect($('#vsFuncCont_'+feederUUID)).toBeObject();
		});
		
		it("should have a chart container object", function() {
		expect($('#vsChartCont_'+feederUUID)).toBeObject();
		});
	});	
});
