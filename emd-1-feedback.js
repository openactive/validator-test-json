{
  "next": "https://www.emduk.org/openactive/classes/public?afterTimestamp=1521640430&afterId=58845", /* Must be absolute URL */
  "items": [
    { /* ODI note: useful to have validator output return fields in the same order as the input */
      "state": "updated",
      "kind": "session", /* should always be "session" */
      "id": 61655, /* should be an int */
      "modified": 1521565719, /* should be an int */
      "data": {
        "@context": "https://www.openactive.io/ns/oa.jsonld", /* a reference to the schema must be included */
        "type": "Event", /* use Event or BroadcastEvent, depending on the event type */
        "name": "daoist Yoga and tai chi",
        "level": ["Beginners", "Intermediate", "Advanced"], /* should be an array of "Beginners", "Intermediate", Advanced" */
        "eventStatus": "http://schema.org/EventScheduled", /* should be a url of similar type to this - http://schema.org/EventScheduled, http://schema.org/EventCancelled */
        "maximumAttendeeCapacity": 20, /* should be int */
        "accessibilitySupport": [
          "Visual impairment",
          "Hearing impairment",
          "Physical impairment"
        ],
        "accessibilityInformation": "",
        "attendeeInstructions": "Clothing instructions: Sportswear/gym clothes, Comfortable loose clothing, Trainers. No equipment required.",
        "description": "Very friendly welcoming class to learn daoist chi gong, daoist yoga, daoist breathing, massage, tai chi forms and daoist soft self defence.",
        "identifier": 61655, /* should be an integer if a number */
        "activity": { /* should use "activity" instead of "classType" in the following format */
          "type": "Concept",
          "id": "http://openactive.io/activity-list/#2a41c553-84be-4970-b3d0-42f9ef6bd9a4", /* note classType should be included as a URI as shown here, be prepending "http://openactive.io/activity-list/#" for all records */
          "prefLabel": "Road Cycling", /* must also include the activity type name here */
          "inScheme": "http://openactive.io/activity-list/activity-list.jsonld"
        },
        "genderRestriction": "", /* property should not be included if null - possible values include "http://openactive.io/ns#Male", "http://openactive.io/ns#Female" or "http://openactive.io/ns#None" */
        "beta:specialRequirements": [],
        "beta:accessibilityWheelchairAccess": "", /* property should not be boolean true or false */
        "leader": {
          "type": "Person", /* Include type */
          "name": "Mr John Smith",
          "gender": "http://schema.org/Male", /* use http://schema.org/Male or http://schema.org/Female */
          "identifier": 24633
        },
        "url": "https://london.lishi.org/classes/hackney", /* URL of class should be in the Event, not the leader */
        "location": {
          "type": "Place", /* Include type */
          "name": "The Bath House, ",
          "address": {
            "type": "PostalAddress", /* Include type */
            "streetAddress": "76 Shacklewell Lane<br />Hackney, Dalston", /* streetAddress should be plaintext without any HTML formatting, e.g. replace <br /> with \n */
            "addressLocality": "London",
            "postalCode": "E8 2EY",
            "addressCountry": "GB" /* include country, always GB for UK */
          },
          "geo": {
            "type": "GeoCoordinates", /* the type of the object should be referenced */
            "latitude": 51.552079, /* this field should be a float */
            "longitude": -0.071399 /* this field should be a float */
          },
          "identifier": 59168, /* should be int */
          "amenityFeature":[ /*  amenityFeature must be an array of structure objects - see https://github.com/openactive/modelling-opportunity-data/issues/70 */
            {
              "name":"Changing Facilities",
              "value":true,
              "type":"ChangingFacilities"
            },
            {
              "name":"Showers",
              "value":false,
              "type":"Showers"
            },
            {
              "name":"Lockers",
              "value":true,
              "type":"Lockers"
            },
            {
              "name":"Towels",
              "value":false,
              "type":"Towels"
            },
            {
              "name":"Creche",
              "value":false,
              "type":"Creche"
            },
            {
              "name":"Parking", /* note this replaces beta:parking, which can be removed */
              "value":true,
              "type":"Parking"
            }
        },
        "eventSchedule": { /* event schedules should be in this format */
            "type": "Schedule",
            "startDate": "2017-01-01", /* must include the date that the schedule was entered or started */
            "endDate": "2017-12-31", /* schedules must have a limit (they can't just be set to run forever as are unlikely to be accurate), suggest 6 months max as schedule duration */
            "frequency": "weekly", /* note not "Weekly" */
            "byDay": "http://schema.org/Friday", /* note must use schema.org days of week */
            "startTime": "19:00Z", /* note not "7:00pm", and time in UTC with timezone marker 'Z' */
            "endTime": "20:00Z" /* note not "8:00pm", and time in UTC with timezone marker 'Z' */
        },
        "ageRange": { /* note capitalisation of ageRange */
           "type": "QuantifiedValue", /* should include a type as per https://github.com/openactive/modelling-opportunity-data/issues/68 */
           "minValue": 18, /* should be 'minValue', and min <= max (the sample data had min = 60, max = 16 ?) */
           "maxValue": 55 /* should be 'maxValue' */
        },
        "offer": [
          {
            "type": "Offer", /* should include a type */
            "acceptedPaymentMethod": [ /* These should be a string from http://schema.org/PaymentMethod such as "http://purl.org/goodrelations/v1#Cash" or "http://purl.org/goodrelations/v1#PaymentMethodCreditCard" not just "Cash". See "EMD Field Mapping V2" sheet "Drupal Option Lists". */
              "http://purl.org/goodrelations/v1#Cash" /* instead of 'Cash' */
            ],
            "price": "7.00", /* @jade this has value "£7-10" but we shouldn't be using price ranges based on our discussions? These should be exact price? e.g. "6.00" */
            "priceCurrency": "GDP", /* always include currency, if the activity is non-free (it's optional for free events) */
            "eligibleCustomerType": "" /* property should not be included if blank, and "http://openactive.io/ns#Member" for "membership required" */
          },
          { /* instead of "Free to gym/centre members" as an acceptedPaymentMethod this should be a separate offer with price 0.00 and "eligibleCustomerType": "http://openactive.io/ns#Member" */
            "type": "Offer", /* should include a type */
            "name": "Free to gym/centre members",
            "price": "0.00",
            "eligibleCustomerType": "http://openactive.io/ns#Member"
          },
          { /* instead of "Bulk class purchase available" as an acceptedPaymentMethod this should be a separate offer */
            "type": "Offer", /* should include a type */
            "name": "Bulk class purchase"
          }
        ],
        "organizer": {
          "type": "Organization", /* should include a type */
          "telephone": "01344 874787",
          "url": "",
          "name": "The Fitness League"
        }
      }
    }
  ],
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
