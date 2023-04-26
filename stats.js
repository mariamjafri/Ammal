console.log("stats running");

const submitButton = document.querySelector("#hit");

console.log(submitButton);

submitButton.addEventListener ("click", (e) => {
  console.log("clicked");
  alert("Thank you for your information. We'll get back to you soon.");
});



























// var RefugeeStatisticsApi = require('refugee_statistics_api');
// console.log("Stats running");
// // Create an instance of the API class
// var api = new RefugeeStatisticsApi.DefaultApi()
// var opts = {
//   'limit': 56, // {Integer} The numbers of items to return.
//   'page': 56, // {Integer} If pagination is available, send the number of page you wish to fetch.
//   'yearFrom': 56, // {Integer} The start year from which results will be filtered.  The data results are inclusive of the given year (e.g. 2010 would result in data from and including 2010 up until the latest year, or the year specified in yearTo).
//   'yearTo': 56, // {Integer} The end year up to which results will be filtered.  The data results are inclusive of the given year (e.g. 2015 would result in data up to and including 2015 back through the available data, or the year specified in yearFrom).
//   'year': 2020 // {array[Integer]} Send array of years.
//   'download': true, // {Boolean} Get the result as a CSV file.
//   'coo': coo_example, // {String} Filter the data to one or more countries of origin.  The countries are specified using the three character country codes (e,g, AFG for Afghanistan).  Use a comma separated list to filter to multiple countries (e.g. “AFG,PAK”) or use the array notation e.g. “coo[]=AFG&coo[]=PAK”. By default, UNHCR’s country codes are used.  To use three character ISO codes instead, see the cfType parameter.  See the lookup between UNHCR and ISO3 country codes, including also the regions. If not specified, data for this dimension will be summed and aggregated to one row.
//   'coa': coa_example, // {String} Filter the data to one or more countries of asylum.  The countries are specified using the three character country codes (e,g, AFG for Afghanistan).  Use a comma separated list to filter to multiple countries (e.g. “AFG,PAK”) or use the array notation e.g. “coo[]=AFG&coo[]=PAK”. By default, UNHCR’s country codes are used.  To use three character ISO codes instead, see the cfType parameter.  See the lookup between UNHCR and ISO3 country codes, including also the regions. If not specified, data for this dimension will be summed and aggregated to one row.
//   'cooAll': true, // {Boolean} Automatically includes all countries of origin in the response if set to “true”.  If set, this overrides the specific selection of countries provided to CoO.
//   'coaAll': true, // {Boolean} Automatically includes all countries of asylum in the response if set to “true”.  If set, this overrides the specific selection of countries provided to CoA.
//   'cfType': cfType_example // {String} If set to “ISO” will cause the searches by origin and asylum to use the ISO3 codes.  See the summary lookup table between UNHCR and ISO codes.
// };

// var callback = function(error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ' + data);
//   }
// };
// api.asylumApplications(opts, callback);
