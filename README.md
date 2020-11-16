# CS321_Team6_section001

This broswer extension displays skincare products for the user based on their anserws.

Manifet.json is the file that Google Chrome looks for when launching the extension.
popup.html is the front-end code for this extension.
background.js is the back-end portion of the extension, which also uses web_scraping.py.
web_scraping.py is where the web scraping takes place retrieving the products from Sephora.
myProductsArray.js is the file where the products are listed.

To learn how to download and run this extension, please see: https://support.google.com/chrome/a/answer/2714278?hl=en

The file myProductsArray.js is given here in this repository for convenience, but can also be retrieved from the terminal. When cloning this repository,
make your way into the folder, and run 'python web_scraping.py' or 'python3 web_scraping.py', depending on what version you have installed.
Once done, the file: myProductsArray.js should pop-up in your file. The file can now be loaded into Google Chrome for running. 

