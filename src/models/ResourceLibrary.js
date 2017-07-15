var resourceContent = require('../../assets/resource.json');

class ResourceLibrary {

  constructor() {
    this.library = resourceContent;
    console.log("Resources: ", resourceContent);
  }
}

module.exports = ResourceLibrary;
