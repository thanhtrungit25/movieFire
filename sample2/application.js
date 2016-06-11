var myFirebaseApp = "todo25";

// Reference to the recommendations object in your Firebase
var recommendations = new Firebase("https://"+ myFirebaseApp +".firebaseio.com/recommendations");

var submitRecommendation = function () {

    var title = $('#talkTitle').val();
    var presenter = $('#talkPresenter').val();
    var link = $('#talkLink').val();

    //  Push a new recommendation to the database using those values
    recommendations.push({
        "title": title,
        "presente": presenter,
        "link": link,
    });

};

// When the window is fully loaded, call this function.
$(window).load(function() {

    // Find the HTML element with the id recommendationForm, and when the submit
    // event is triggered on that element, call submitRecommendation.
    $('#recommendationForm').submit(submitRecommendation);
});


