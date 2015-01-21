sap.ui.controller("cardealer.controller.DetailsView", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf cardealer.view.DetailsView
	 */
	onInit : function() {

		this.oView = this.getView();

		this.detailsModel = new sap.ui.model.json.JSONModel();
		this.oView.setModel(this.detailsModel, "detailsModel");

		this.editableModel = new sap.ui.model.json.JSONModel();
		this.oView.setModel(this.editableModel, "editableModel");
		
		this.setDefaultEditableModel();

		this.setFakeData();

	},

	setFakeData : function() {
		this.detailsModel.setData({
			vin : "JDHHSKK6678",
			brand : "Volkswagen",
			model : "Passat",
			price : 12000.00,
			productionYear : 2009,
			engineType : "Diesel",
			engineCap : 2.2,
			color : "Brown"
		});
	},
	setClearData : function() {
		this.detailsModel.setData({
			vin : "",
			brand : "",
			model : "",
			price : 0.0,
			productionYear : new Date().getFullYear(),
			engineType : "",
			engineCap : 0.0,
			color : ""
		});
	},
	
	setDefaultEditableModel: function () {
		this.editableModel.setData({
			editable : false,
			isCreating: false,
			buttons:{
				createNew: true,
				modify: true,
				'delete': true,
				save: false,
				create: false,
				cancel: false
			}
		});
	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf cardealer.view.DetailsView
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf cardealer.view.DetailsView
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf cardealer.view.DetailsView
 */
// onExit: function() {
//
// }
	onCreateNewPress: function() {
		this.tempData = this.detailsModel.getData();
		
		this.setClearData();
		
		this.editableModel.setData({
			editable : true,
			isCreating: true,
			buttons:{
				createNew: false,
				modify: false,
				'delete': false,
				save: false,
				create: true,
				cancel: true
			}
		});
		
	},
	onCreatePress: function() {
		this.setDefaultEditableModel();

	},
	onModifyPress: function() {
		this.tempData = JSON.parse(JSON.stringify(this.detailsModel.getData()));
		
		this.editableModel.setData({
			editable : true,
			isCreating: false,
			buttons:{
				createNew: false,
				modify: false,
				'delete': true,
				save: true,
				create: false,
				cancel: true
			}
		});
		
	},
	onDeletePress: function() {
		this.setDefaultEditableModel();
	},
	onSavePress: function() {
		this.setDefaultEditableModel();
	},
	onCancelPress: function() {
		this.detailsModel.setData(this.tempData);
		
		this.setDefaultEditableModel();
	}
});