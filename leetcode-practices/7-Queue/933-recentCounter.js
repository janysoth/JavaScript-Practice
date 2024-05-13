/**
 * You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:

RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.
 */

// Define the RecentCounter class
const RecentCounter = function () {
  // Initialize an empty array to store timestamps of recent requests
  this.requests = [];
};

// Define the ping method which adds a new request and returns the number of requests within the last 3000 milliseconds
RecentCounter.prototype.ping = function (t) {
  // Add the current timestamp to the requests array
  this.requests.push(t);

  // Initialize a variable to keep track of the count of recent requests
  let count = 0;

  // Iterate over the requests array starting from the end
  for (let i = this.requests.length - 1; i >= 0; i--) {
    // Check if the timestamp at index i is within the range [t - 3000, t]
    if (this.requests[i] >= t - 3000) {
      // Increment the count if the timestamp is within the range
      count++;
    } else {
      // Break the loop if the timestamp is outside the range
      break;
    }
  }

  // Return the count of recent requests within the last 3000 milliseconds
  return count;
};