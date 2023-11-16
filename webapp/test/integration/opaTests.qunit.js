sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fedemo/test/integration/FirstJourney',
		'fedemo/test/integration/pages/TravelList',
		'fedemo/test/integration/pages/TravelObjectPage',
		'fedemo/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fedemo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);