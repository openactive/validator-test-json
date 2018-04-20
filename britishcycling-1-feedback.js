{
  "@context": [
    "https://www.openactive.io/ns/oa.jsonld",
    "https://www.openactive.io/ns-beta/oa.jsonld"
  ],
  "type": "Event",
  "identifier": 305,
  "url": "http://bclr.uat.rroom.net/rides/mayor-of-londons-sky-ride",
  "activity": {
    "id": "http://openactive.io/activity-list/#2a41c553-84be-4970-b3d0-42f9ef6bd9a4",
    "prefLabel": "Road Cycling",
    "type": "Event", /* should be "type":"Concept" */
    "inScheme": "https://www.openactive.io/activity-list/activity-list.jsonld"
  },
  "duration": 0, /* must be ISO 8601 duration. Can do this in .NET with System.Xml.XmlConvert.ToString(TimeSpan.FromMinutes(ClassDuration)) */
  "beta:activityDuration": 0, /* must be ISO 8601 duration. Can do this in .NET with System.Xml.XmlConvert.ToString(TimeSpan.FromMinutes(ClassDuration)) */
  "startDate": "2010-09-05 09:30:00", /* must be ISO 8601 date, see https://www.openactive.io/realtime-paged-data-exchange/#date-and-time-formats */
  "endDate": "2010-09-05 09:30:00", /* must be ISO 8601 date, see https://www.openactive.io/realtime-paged-data-exchange/#date-and-time-formats  */
  "maximumAttendeeCapacity": null, /* property should not be included if null */ 
  "remainingAttendeeCapacity": 1,
  "beta:attendeeCount": 0,
  "ageRange": {
     "type": "QuantifiedValue",
     "minValue": 18, /* min, or leave out if none */
     "maxValue": 55  /* max, or leave out if none */
  }
  "distance": {
    "value": "25.00",
    "unitCode": "SMI"
  },
  "genderRestriction": null, /* property should not be included if null - possible values include "http://openactive.io/ns#Male", "http://openactive.io/ns#Female" or "http://openactive.io/ns#None" */
  "offer": {
    "type": "Offer",
    "url": "http://bclr.uat.rroom.net/rides/mayor-of-londons-sky-ride/book",
    "price": "0"
  },
  "name": "Mayor of London's Sky Ride",
  "description": "Sky Ride events are over until next spring, but there are still tons of opportunities for you to get out on your bike.Whether you&rsquo;re saving money, considering the environment, avoiding the traffic jams, getting fit or wanting to take in some breathtaking scenery &ndash; let us point you in the right direction with cycling tips, clubs and routes in your local area.Cycling support in LondonIf you&rsquo;re looking for a brilliant place to cycle; London is it. The city has rides and routes for all abilities and all the family.&nbsp; Greater London Authority provides information on&nbsp; Cycle Hire, Cycle Superhighways, cycle parking, London's year of cycling, Biking Boroughs, cycle safety and training. For more information, click here. London Cycle Campaign - LCC campaigns for better cycling facilities, supports their 11,000 members, and promotes cycling to all Londoners. For more information, click here.&nbsp;&nbsp;The Barclays Cycle Hire scheme: click here for more information.\r\nIf the Mayor of London&rsquo;s Sky Ride inspired you to do more cycling in central London then Westminster Council offers information about cycling in the Borough, including maps of cycle routes. Click here for more details. Westminster Cycling Campaign is also a source of information on rides and events in central London - click here for more details. Ealing Council is a great source of information on cycling in the Borough. Find out more about bicycle health checks, local cycle routes and local practice circuits - click here.Ealing Cycling Campaign organises cycle rides and social events, as well as training - click here for more information. Redbridge Council is a brilliant source of information on cycling in the borough. Find out more about your local cycle liaison group as well as local cycle maps - click here.Redbridge Cycling Campaign organises cycle rides and a fantastic &lsquo;commuter buddies&rsquo; scheme to help people find someone to ride to work with. For more information, click here.Places to cycle There are a number of amazing routes and venues in the London area to help you make the most of your cycling experience &ndash; there really is something for everyone. London is one of the best cities in the world for cycling, whatever your ability or reason for getting on a bike. You can find out more about routes, tracks and trails on the following links:Pre-mapped cycle routes around the capital - click here.&nbsp;Transport for London's Journey Planner is a handy tool for cyclists as well as those wanting to plan a journey on public transport - click here.Sustrans offer invaluable and easy to use cycle route maps for navigating the capital - click here. London Cycle Network is a 900km network of radial and orbital routes for cyclists covering the whole of London - for more information, click here.&nbsp; FacilitiesBMX Brixton BMX Track www.brixtonbmxclub.com Peckham BMX Track&nbsp; www.peckhambmx.co.uk/TrackHerne Hill Velodromehttp://www.hernehillvelodrome.com/Closed road circuitsHillingdon Cycle Circuit, Hounslow T: 0208 5703230Eastway Cycle Circuitwww.londoncyclesport.com Lee Valley Cycle Circuit T:0208 5346085 &nbsp;E: cycle@leevalleypark.org.ukJoining a local cycling clubBritish Cycling can help you to find a club that&rsquo;s right for you. Click here to&nbsp;use the &lsquo;club finder&rsquo; to find a club near you. If you&rsquo;re looking to join a club to improve your cycling or simply for a bit of fun, there are some great British Cycling affiliated clubs in London that will be happy for you to go along and ride with them.Disability cycling clubs: There are a number of disability cycling clubs in and around the capital. Cycling for All is a Croydon-based project that encourages cycling among disabled people.&nbsp; They provide instruction in the use of specially adapted cycles at Croydon Sports Arena - for further information, please click here.",

/*Note the description should not include &nbsp; , and should replace <p> and <br> with \n */

  "beta:formattedDescription": "<p><img src='{{image:}}' alt=\"Cycling in your city\" /><br /><br />Sky Ride events are over until next spring, but there are still tons of opportunities for you to get out on your bike.<br /><br />Whether you&rsquo;re saving money, considering the environment, avoiding the traffic jams, getting fit or wanting to take in some breathtaking scenery &ndash; let us point you in the right direction with cycling tips, clubs and routes in your local area.<br /><br /><strong>Cycling support in London</strong><br />If you&rsquo;re looking for a brilliant place to cycle; London is it. The city has rides and routes for all abilities and all the family.&nbsp; <br /><br /><strong>Greater London Authority </strong>provides information on&nbsp; Cycle Hire, Cycle Superhighways, cycle parking, London's year of cycling, Biking Boroughs, cycle safety and training. For more information, <a href=\"http://www.london.gov.uk/priorities/transport/cycling-revolution\">click here</a>. <br /><br /><strong>London Cycle Campaign </strong>- LCC campaigns for better cycling facilities, supports their 11,000 members, and promotes cycling to all Londoners. For more information, <a href=\"http://lcc.org.uk\">click here</a>.&nbsp;&nbsp;<br /><br />The<strong> Barclays Cycle Hire </strong>scheme: <a href=\"http://www.tfl.gov.uk/roadusers/cycling/11598.aspx\">click here</a> for more information.</p>\r\n<p>If the Mayor of London&rsquo;s Sky Ride inspired you to do more cycling in central London then <strong>Westminster Council </strong>offers information about cycling in the Borough, including maps of cycle routes. <a href=\"http://www.westminster.gov.uk/services/transportandstreets/cycling/\">Click here</a> for more details. <strong>Westminster Cycling Campaign </strong>is also a source of information on rides and events in central London - <a href=\"http://www.westminstercyclists.org.uk\">click here</a> for more details. <br /><br /><strong>Ealing Council </strong>is a great source of information on cycling in the Borough. Find out more about bicycle health checks, local cycle routes and local practice circuits - <a href=\"http://www.ealing.gov.uk/services/transport_and_streets/cycling/\">click here</a>.<br /><br /><strong>Ealing Cycling Campaign </strong>organises cycle rides and social events, as well as training - <a href=\"http://www.ealingcycling.org.uk/\">click here</a> for more information. <br /><br /><strong>Redbridge Council </strong>is a brilliant source of information on cycling in the borough. Find out more about your local cycle liaison group as well as local cycle maps - <a href=\"http://www.redbridge.gov.uk/cms/parking_rubbish_and_streets/general_street_information/cycling.aspx\">click here</a>.<br /><br /><strong>Redbridge Cycling Campaign </strong>organises cycle rides and a fantastic &lsquo;commuter buddies&rsquo; scheme to help people find someone to ride to work with. For more information, <a href=\"http://www.redbridgelcc.org.uk/\">click here</a>.<br /><br /><br /><strong><img src='{{image:}}' alt=\"Where to Ride\" /><br /><br />Places to cycle </strong><br />There are a number of amazing routes and venues in the London area to help you make the most of your cycling experience &ndash; there really is something for everyone. <br /><br />London is one of the best cities in the world for cycling, whatever your ability or reason for getting on a bike. You can find out more about routes, tracks and trails on the following links:<br /><br />Pre-mapped cycle routes around the capital - <a href=\"http://www.cycle-route.com/routes/London-Routes-89.html\">click here</a>.&nbsp;<br /><br /><strong>Transport for London</strong>'s Journey Planner is a handy tool for cyclists as well as those wanting to plan a journey on public transport - <a href=\"http://journeyplanner.tfl.gov.uk/user/XSLT_TRIP_REQUEST2?language=en\">click here.</a><br /><br /><strong>Sustrans</strong> offer invaluable and easy to use cycle route maps for navigating the capital - <a href=\"http://www.sustrans.org.uk/map?searchKey=london&amp;searchType=search#533404,179027,1\">click here</a>. <br /><br /><strong>London Cycle Network</strong> is a 900km network of radial and orbital routes for cyclists covering the whole of London - for more information, <a href=\"http://www.londoncyclenetwork.org.uk/html/DynaLink/menu_type/1/menu_id/25/submenu_id/51/main_page.asp\">click here</a>.&nbsp; <br /><br /><strong>Facilities<br /></strong><br /><strong>BMX </strong><br /><strong>Brixton BMX Track </strong><br /><a href=\"http://www.brixtonbmxclub.com\">www.brixtonbmxclub.com</a> <a href=\"http://www.rythumandflow.com/dorkingdirtriders\"><br /></a><br /><strong>Peckham BMX Track&nbsp; </strong><br /><a href=\"http://www.peckhambmx.co.uk/\">www.peckhambmx.co.uk/<br /></a><br /><strong>Track</strong><br /><strong>Herne Hill Velodrome</strong><br /><a href=\"http://www.hernehillvelodrome.com/\">http://www.hernehillvelodrome.com/</a><br /><br /><strong>Closed road circuits</strong><br /><strong>Hillingdon Cycle Circuit</strong>, Hounslow <br />T: 0208 5703230<br /><br /><strong>Eastway Cycle Circuit</strong><br /><a href=\"http://www.londoncyclesport.com\">www.londoncyclesport.com <br /></a><br /><strong>Lee Valley Cycle Circuit </strong><br />T:0208 5346085 &nbsp;E: <a href=\"mailto:cycle@leevalleypark.org.uk\">cycle@leevalleypark.org.uk</a><strong><br /><br /><img src='{{image:}}' alt=\"Find a club\" /><br /><br />Joining a local cycling club</strong><br />British Cycling can help you to find a club that&rsquo;s right for you. <a href=\"http://new.britishcycling.org.uk/clubfinder\">Click here</a> to&nbsp;use the &lsquo;club finder&rsquo; to find a club near you. <br /><br />If you&rsquo;re looking to join a club to improve your cycling or simply for a bit of fun, there are some great British Cycling affiliated clubs in London that will be happy for you to go along and ride with them.<br /><br />Disability cycling clubs: There are a number of disability cycling clubs in and around the capital. <strong>Cycling for All </strong>is a Croydon-based project that encourages cycling among disabled people.&nbsp; They provide instruction in the use of specially adapted cycles at Croydon Sports Arena - for further information, please <a href=\"http://www.wheelsforwellbeing.org.uk/index.php/cycling_for_all\">click here</a>.</p>",
  "organizer": { /* should be omitted if no organizer, instead of false */
    "type": "Organization",
    "identifier": "breezelancs",
    "url": "http://bclr.uat.rroom.net/groups/breezelancs",
    "sameAs": "Breeze Network Lancashire ", /* should be Facebook URL */
    "name": "Breezelancs",
    "foundingDate": "2017-01-21 21:37:14",  /* must be ISO 8601 date, see https://www.openactive.io/realtime-paged-data-exchange/#date-and-time-formats  */
    "description": "Breeze ladies who love to ride, chat and eat - not sure which is the most important lol!",
    "image": "http://media.bclr.uat.rroom.net/image/f8786941a5fe4343015327a299c7242e",
    "beta:numberOfMembers": 94,
    "aggregateRating": {
      "type": "AggregateRating",
      "reviewCount": 28,
      "ratingValue": 9.71,
      "bestRating": 10, /* as rating is out of 10 and not 5, must include these to qualify it (5 is the default value) */
      "worstRating": 0,/* include this if the lowest score is 0 instead of 1 (1 is the default value) */
    }
  },

  "programme": {
    "type": "Brand",
    "identifier": "events",
    "name": "HSBC UK Let’s Ride",
    "description": "City Rides are fun days out where cyclists take over the streets of a town or city. Riding on roads normally full of cars is an unforgettable experience. There’s loads of other stuff going on too, from music and market stalls, to extreme cycling and competitions.",
    "url": "http://bclr.uat.rroom.net/events",
    "logo": "http://media.bclr.uat.rroom.net/view/afb09c56e6fd90144f5248af7e99a0d3/CityRide_Full Colour_sRGB.svg"
  },

   /* For all of the below properties, in the null case the property should be omitted, not "unknown" */

  "britishcycling:stoppingPoints": "unknown",
  "britishcycling:otherInformation": "unknown",
  "britishcycling:gpxFile": "unknown",
  "britishcycling:terrain": "unknown",
  "britishcycling:topography": "unknown",
  "britishcycling:publicTransport": false,
  "britishcycling:publicTransportDetails": null,
  "britishcycling:routePhotos": [],

  "accessibilityInformation": false,
  "meetingPoint": "",
  "attendeeInstructions": null,
  "level": "Easygoing",

  "location": {
    "type": "Place",
    "description": "London Sky Ride City",
    "address": {
      "type": "PostalAddress",
      "addressCountry": "GB", /* always GB for UK */
      "addressLocality": "London",
      "addressRegion": "London",
      "postalCode": "SW1A 2BJ",
      "streetAddress": "St James Westminster"
    },
    "geo": {
      "type": "GeoCoordinates",
      "latitude": 51.50303124,
      "longitude": -0.13020879
    },

    /* replace "britishcycling:changingFacilities", "britishcycling:toilets" and "britishcycling:toiletsDetails" with the below, omitting the object from the array if it is of value "unknown" */
    "amenityFeature":[
      {
        "name":"Changing Facilities",
        "value":true, /* previously "britishcycling:changingFacilities" */
        "type":"ChangingFacilities"
      },
      {
        "name":"Toilets",
        "value":false, /* previously "britishcycling:toilets" */
        "description":"Small hut", /* previously "britishcycling:toiletsDetails" */
        "type":"Toilets"
      },
      {
        "name":"Parking",
        "value":true, /* routes.parking */
        "description": "Pay & Display Near Start Point ", /* previously beta:parking.description */
        "type":"Parking"
      }
    ]

  },
  "image": []
 }
