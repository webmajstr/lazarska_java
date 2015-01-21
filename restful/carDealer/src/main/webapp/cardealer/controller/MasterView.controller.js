sap.ui.controller("cardealer.controller.MasterView", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf cardealer.view.MasterView
	 */
	onInit : function() {
		this.oView = this.getView();

		this.masterModel = new sap.ui.model.json.JSONModel([]);
		this.oView.setModel(this.masterModel, "masterModel");
		
		
		this.setFakeData();

	},

	setFakeData : function() {
		this.masterModel.setData([ {
			vin : "JDHHSKK6678",
			brand : "Volkswagen",
			model : "Passat",
			price : 12000.00,
			productionYear : 2009,
			engineType : "Diesel"
		},
		{
			vin : "TDHJL54678",
			brand : "Toyota",
			model : "Auris",
			price : 14000.00,
			productionYear : 2011,
			engineType : "Petrol"
		}]);
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf cardealer.view.MasterView
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf cardealer.view.MasterView
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf cardealer.view.MasterView
	 */
	// onExit: function() {
	//
	// }
	onSelectionChange : function(oEvent) {

	}
});