// Define the tour!
var tour =
        {
            id: "startTourBtn",
            steps: [
                {
                    target: "header",
                    title: "Welcome to Hopscotch!",
                    content: "Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let's just take some time to see how Hopscotch actually works.",
                    placement: "bottom",
                    arrowOffset: 60
                },{
                    target: document.querySelector("#content-id p"),
                    title: "Welcome to Hopscotch!",
                    content: "Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let's just take some time to see how Hopscotch actually works.",
                    placement: "bottom",
                    arrowOffset: 60
                }
            ],
            showPrevButton: true,
            scrollTopMargin: 100
        };

// Start the tour!
hopscotch.startTour(tour);

var calloutMgr = hopscotch.getCalloutManager();
calloutMgr.createCallout({
    id: 'attach-icon',
    target: 'attach-btn',
    placement: 'bottom',
    title: 'Now you can share images &amp; files!',
    content: 'Share a project you\'re proud of, a photo from a recent event, or an interesting presentation.'
});


