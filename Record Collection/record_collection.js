//problem link : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection

var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  var collectionCopy = JSON.parse(JSON.stringify(collection));
  // Only change code below this line
  function updateRecords(id, prop, value) {
    if(prop === "tracks" && value !== ""){
        if(collection[id][prop]){
            collection[id][prop].push(value);
        }else{
            collection[id][prop] = [value];
        }
    }else if(value !== ""){
        collection[id][prop] = value;
    }else {
        delete collection[id][prop];
    }
  
    return collection;
  }
  
  // Alter values below to test your code
  console.log(updateRecords(2548, "tracks", "Loose Goose"));
  //console.log(updateRecords(5439, "artist", "ABBA"));