function Picture(fbDetails) {
  this.full_details = fbDetails;
  this.id = fbDetails.id;
  this.thumbnail = fbDetails.thumbnail;
  this.updatedTime = fbDetails.updated_time;
  return this;
};

Picture.prototype.buildHtml = function() {
  return $([
    "<li class='js-picture' data-id='" + this.id + "'>",
    "    <img src='" + this.thumbnail + "'/>",
    "    <p>Last updated: " + this.updatedTime + "</p>",
    "</li>"
  ].join("\n"));
};