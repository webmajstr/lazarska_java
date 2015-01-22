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
		this.oBus = sap.ui.getCore().getEventBus();
		
		this.oBus.subscribe("Details", "refreshDetails", jQuery.proxy(this.fetchData, this));

		this.detailsModel = new sap.ui.model.json.JSONModel();
		this.oView.setModel(this.detailsModel, "detailsModel");

		this.editableModel = new sap.ui.model.json.JSONModel();
		this.oView.setModel(this.editableModel, "editableModel");
		
		this.setDefaultEditableModel();

		this.setClearData();

	},

	fetchData: function(channel, fn, data) {
		var that = this;
		$.get("/car/" + data.vin, function(data) {
			that.detailsModel.setData(data);
		}).fail(function() {
			sap.m.MessageToast.show("Error while loading car details");
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
		var that = this;
		$.post("/car", JSON.stringify(that.detailsModel.getData()), function() {
			that.oBus.publish("Master", "refresh");
			sap.m.MessageToast.show("Succesfully created vehicle");
			that.setDefaultEditableModel();
		}).fail(function() {
			sap.m.MessageToast.show("Error while creating car");
		});
		
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
		
		var that = this,
		data = this.detailsModel.getData();
		
		$.ajax({
		    url: "/car/" + data.vin,
		    type: 'DELETE',
		    success: function() {
				that.oBus.publish("Master", "refresh");
				sap.m.MessageToast.show("Succesfully deleted vehicle");
				that.setDefaultEditableModel();
			},
			error: function() {
				sap.m.MessageToast.show("Error while deleting a car");
			}
		  });
	},
	onSavePress: function() {
		
		var that = this,
		data = this.detailsModel.getData();
		
		$.ajax({
		    url: "/car/" + data.vin,
		    type: 'PUT',
		    success: function() {
				that.oBus.publish("Master", "refresh");
				sap.m.MessageToast.show("Succesfully updated vehicle");
				that.setDefaultEditableModel();
			},
			error: function() {
				sap.m.MessageToast.show("Error while updating car");
			},
		    data: JSON.stringify(data)
		  });
		
		
	},
	onCancelPress: function() {
		this.detailsModel.setData(this.tempData);
		
		this.setDefaultEditableModel();
	}
});