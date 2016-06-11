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
        "presenter": presenter,
        "link": link,
    });

};

// Get the single most recent recommendation from the database and
// update the table with its values. This is called every time the child_added
// event is triggered on the recommendations Firebase reference, which means
// that this will update EVEN IF you don't refresh the page. Magic.
recommendations.limitToLast(1).on('child_added', function(childSnapshot) {
    // Get the recommendation data from the most recent  snapshot of data
    recommendation = childSnapshot.val();
    console.log(recommendation);

    // Update the HTML to display the recommendation text
    $("#title").html(recommendation.title);
    $("#presenter").html(recommendation.presenter);
    $("#link").html(recommendation.link);

    $("#link").attr("href", recommendation.link);

});


// When the window is fully loaded, call this function.
$(window).load(function() {

    // Find the HTML element with the id recommendationForm, and when the submit
    // event is triggered on that element, call submitRecommendation.
    $('#recommendationForm').submit(submitRecommendation);
});


