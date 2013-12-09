//Test Suite for Design Tool
describe("Design tool", function() {
	//Context
	describe("readSensorData method", function() {
		var feederUUID = "hcjacmf";
		
		//Initialization
		beforeEach(function() {
    		createFeeder(feederUUID);
		});
		
		//Spec (Test case)
		it("should have the canvas to drop sensors on ", function() {
			expect($('design_canvas')).toBeObject();
		});
	});	
});

