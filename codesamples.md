## upload and preview image

Here's a simple example with no jQuery. Use URL.createObjectURL, which `creates a DOMString containing a URL representing the object given in the parameter`. Then, you can simply set the src of the image to that url:

```js
window.addEventListener("load", function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector("img");
        img.onload = () => {
          URL.revokeObjectURL(img.src); // no longer needed, free memory
        };

        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
    });
});
```

upload file with node

```js
app.post("/upload", function (req, res) {
  fs.readFile(req.files.image.path, function (err, data) {
    var imageName = req.files.image.name;

    /// If there's an error
    if (!imageName) {
      console.log("There was an error");
      res.redirect("/");
      res.end();
    } else {
      var newPath = __dirname + "/uploads/fullsize/" + imageName;

      /// write file to uploads/fullsize folder
      fs.writeFile(newPath, data, function (err) {
        /// let's see it
        res.redirect("/uploads/fullsize/" + imageName);
      });
    }
  });
});
```
