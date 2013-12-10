Template.images.imageCollection = function() {
  return Images;
};

Template.images.metadata = {};

Template.images.images = function() {
	return Images.find();
};
