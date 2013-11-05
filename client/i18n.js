Meteor.startup(function () {

    i18n.setDefaultLanguage('en');

    HTTP.get(Meteor.absoluteUrl() + 'labels.json', {}, function (error, result) {
        var labels = JSON.parse(result.content);
        _.each(labels, function (languageLabels) {
            i18n.map(languageLabels.language, languageLabels.labels);
        });
    });
});


Template.hello.testLabel = function () {
    return i18n('testLabel');
};

Template.hello.events(
    {
        'click': function() {
            if (i18n.getLanguage() == 'fr') {
                i18n.setLanguage('en');
            } else {
                i18n.setLanguage('fr');
            }
        }
    }
);