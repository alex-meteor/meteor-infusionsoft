Meteor.infusionsoftSDK.prototype.fsGoal = function(integration, name, contactId, callback){
	var ca = [this.apiKey, integration, name, contactId];
	this.methodCaller('FunnelService.achieveGoal', ca, callback);
}