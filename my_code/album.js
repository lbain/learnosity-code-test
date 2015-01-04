function Album(fbDetails) {
  this.full_details = fbDetails;
  this.id = fbDetails.id;
  this.name = fbDetails.name;
  this.thumbnail = fbDetails.thumbnail;
  this.updatedTime = fbDetails.updated_time.split('T')[0];
  return this;
};

Album.prototype.buildHtml = function() {
  return $([
    "<li class='js-album photo-container album' data-id='" + this.id + "'>",
    "    <h3>" + this.name + "</h3>",
    "    <img src='" + this.thumbnail + "'/>",
    "    <p>Last updated: " + this.updatedTime + "</p>",
    "</li>"
  ].join("\n"));
};