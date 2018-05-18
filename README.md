## Sixteen Squares Walking Tour Redesign

[Original Website](http://tobweb.org/WalkingTour/)

This project is a redesign of the original virtual tour of Blacksburg's Sixteen Squares Historic District. It is made by Lucas Cuba(@lcuba) with help from Neal Feierabend(@nealf) as a volunteer project of Code for NRV. Code for NRV is a volunteer group local to the Blacksburg area and is under the larger Code for America Brigade.

You may look at the original website for the walking tour and think, "Hmm... This doesn't look so bad. Why was a redesign necessary?" Well, we found that this original website was a little clunky in a few ways, and updates to it from the original developer ESRI would be a little pricey. So I volunteered to create a redesign from scratch using the already present assets and iron out those issues that we saw in the original. For one, the original, despite being a virtual companion to the walking tour implied to be used on a mobile device, is utterly broken on mobile and there is no real responsive design. Second, the load on the processor and network associated with the original is a bit high for a mobile device. Lastly, the map didn't have a satellite option and didn't allow for closer zooming.

To address these issues, I went for a mobile-first design with an emphasis on responsiveness and keeping things clean to improve performance and maximize screen real estate. This application uses Jquery and the Google Maps Javascript API to deliver a smooth experience on a mobile device walking around the tour. 
