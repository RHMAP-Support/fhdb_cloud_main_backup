exports.fhdbInit = function(params, callback) {
  console.log("In dbInit()");
  $fh.db({
      "act" : "create",
      "type" : "fhdbExample",
      "fields" : {
        "firstName" : "Jim",
        "lastName" : "Feedhenry",
        "country" : "Henryland",
       "phone" : "555-123456"
      }
}, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log(JSON.stringify(data));
    callback(undefined, data);
  }
})};

exports.fhdbAdd = function(params, callback) {
  console.log("In fhdbAdd()");
  $fh.db({
      "act" : "create",
      "type" : "fhdbExample",
      "fields" : {
        "firstName" : params.firstname,
        "lastName" : params.lastname,
        "country" : params.country,
       "phone" : params.phone
      }
}, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log(JSON.stringify(data));
    callback(undefined, data);
  }
})};

exports.fhdbList = function(params, callback) {
console.log("In dbList()");
$fh.db({
  "act": "list",
  "type": "fhdbExample"
}, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log(JSON.stringify(data));
    callback(undefined, data);
  }
})};

exports.fhdbListLastName = function(params, callback) {
console.log("In dbListLastName()");
$fh.db({
  "act": "list",
  "type": "fhdbExample",
  "eq": {
    "lastName": params.lastname
  }
}, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log(JSON.stringify(data));
    callback(undefined, data);
  }
})};

exports.fhdbDeleteall = function(params, callback) {
console.log("In Deleteall");
$fh.db({
  "act": "deleteall",
  "type": "fhdbExample"
}, function(err, data) {
    console.log(JSON.stringify(data));
    callback(undefined, data);  
})};

exports.paramtest = function(params, callback) {
console.log("In paramtest");
console.log(params);
return callback(undefined, params);
};

/*
http://127.0.0.1:8001/cloud/fhdbDeleteall
http://127.0.0.1:8001/cloud/fhdbList
http://127.0.0.1:8001/cloud/fhdbAdd?firstname=jim&lastname=jones&country=Ireland&phone=123456
http://127.0.0.1:8001/cloud/fhdbList
http://127.0.0.1:8001/cloud/fhdbListLastName?lastname=jones


https://support-tbd8odimttbsvkhssiqdij3l-dev.df.dev.e111.feedhenry.net/cloud/fhdbDeleteall
https://support-tbd8odimttbsvkhssiqdij3l-dev.df.dev.e111.feedhenry.net/cloud/fhdbList
https://support-tbd8odimttbsvkhssiqdij3l-dev.df.dev.e111.feedhenry.net/cloud/fhdbAdd?firstname=jim&lastname=jones&country=Ireland&phone=123456
https://support-tbd8odimttbsvkhssiqdij3l-dev.df.dev.e111.feedhenry.net/cloud/fhdbList

https://support-tbd8odimttbsvkhssiqdij3l-dev.df.dev.e111.feedhenry.net/cloud/fhdbListLastName?lastname=jones

*/

exports.reqtest = function(params, callback) {
// Detail of this request module can be found at https://github.com/mikeal/request
var request = require('request');
request('https://support-tbd8odimttbsvkhssiqdij3l-dev.df.dev.e111.feedhenry.net/cloud/fhdbList', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Response is " + body);
    return callback(undefined, body);
  }
})
};

exports.health = function(params, callback) {
  return callback(undefined, 'Everything is operating normally');
};
