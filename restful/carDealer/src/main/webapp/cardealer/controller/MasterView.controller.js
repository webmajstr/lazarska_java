sap.ui.controller("cardealer.controller.MasterView", {

	onInit : function() {
		this.oView = this.getView();
		this.oBus = sap.ui.getCore().getEventBus();

		this.pullToRefresh = this.oView.byId("pullToRefresh");
		
		this.masterModel = new sap.ui.model.json.JSONModel([]);
		this.oView.setModel(this.masterModel, "masterModel");
		
		this.oBus.subscribe("Master", "refresh", jQuery.proxy(this.fetchData, this));

		 this.fetchData(false);

	},

	onRefresh : function() {
		this.fetchData(true);
	},
	fetchData : function(showSuccess) {
		var that = this;
		$.get("/car", function(data) {
			that.masterModel.setData(data);
			
		}).done(function() {
			if (showSuccess === true) {
				sap.m.MessageToast.show("List updated succesfully");
			}
			
		}).fail(function() {
			sap.m.MessageToast.show("Error while loading list");
		}).always(function() {
			that.pullToRefresh.hide();
		});
	},

	onSelectionChange : function(oEvent) {
		var vin = this.masterModel.getProperty(oEvent.getParameters("listItem").listItem.oBindingContexts.masterModel.sPath + "/vin");
		this.oBus.publish("Details", "refreshDetails", {vin: vin});
	}
});