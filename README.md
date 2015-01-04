Learnosity code test
====================

## Brief description

My app gets your details from Facebook then grabs all your albums. If you click on an album then the albums get changed out for the photos from that album.

## Instructions

* Go to [findmyfacebookid.com](http://findmyfacebookid.com/) to get your FB id.
* Email your FB id to me so I can add you as a developer to the app (this is required since I wasn't able to get the app approved in time for the demo).
* Accept your invite to be a developer on my Learnosity Code Test FB app.
* Go to [lucybain.com/learnosity-code-test](http://lucybain.com/learnosity-code-test/) to see a working version.
* You can clone this repo locally, but you won't be able to run it since the FB app is only set to my site.

## Reasons for your approach

I broke the logic into four sections - album, picture, oauth and app.

The album and picture classes are very similar to the point where they could probably be the same class. They were created as separate classes for future expansion, when it's likely an album and picture would be treated differently.

The code in oauth makes use of the `hello.js` library which makes the calls to Facebook. I would like to refactor the call to `/me` in particular as it doesn't fit the same style as the rest of the file.

Finally the app file keeps most of the logic to tie everything together. I like using small, easily reused, easily reasoned about methods. Some of these methods should be refactored for DRYer code (i.e. `displayPictures` and `displayAlbums`). Actually, this file needs the most refactoring. It became a dumping ground for all the odds and ends needed for this project. I want to move all of the picture code to `app.picture` and keep it (depending on how much there is) in the `picture.js` file or in another file of it's own - the same would apply to the code for albums. It would also have better performance if a variable for each of the jQuery objects was initiated from the beginning and the code just used the variables after that.

## Reasons for your technology

I wanted to work with something real that users might care about. I also wanted to get more experience with working with Facebook since it's often used on sites. Looking back, this was probably not the best decision for a coding test - I went over time (totaling 3.5 - 4 hours), and it can't easily be run locally. But I did enjoy working with it :)

The library I used is called [hello.js](http://adodson.com/hello.js/). I've never worked with it before (again, not a good decision for a coding test, but a good way to learn). This took longer to learn and understand than I expected. A normal AJAX call would have been simpler to work with.

## Future enhancements

* Adding tests and then completing the refactoring mentioned above.
* Of course I'd like to publish the app with Facebook so there's no weird work around with adding people to the developer list.
* Use push state (for browsers that support it) to allow use for the browser back button and remove my own.
* Mobile friendly styling and better responsive design (like making it clear the photos are clickable since there's no hover state).
* Include the photo's descriptions (if the user supplied any) and possibly comments.

