function Picture(fbDetails) {
  this.full_details = fbDetails;
  this.id = fbDetails.id;
  this.thumbnail = fbDetails.thumbnail;
  this.updatedTime = fbDetails.updated_time.split('T')[0];
  return this;
};

Picture.prototype.buildHtml = function() {
  return $([
    "<li class='js-picture photo-container' data-id='" + this.id + "'>",
    "    <img src='" + this.thumbnail + "'/>",
    "    <p>Uploaded: " + this.updatedTime + "</p>",
    "</li>"
  ].join("\n"));
};