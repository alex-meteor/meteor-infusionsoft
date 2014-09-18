Package.describe({
  summary: "infusionsoft SDK packaged for Meteor",
  version: "1.0.0",
  git: 'http://github.com/ecwyne/meteor-infusionsoft',
  name: 'ecwyne:infusionsoft'
});

Npm.depends({
	infusionsoft: '0.3.2'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles('infusionsoft.js');
});
