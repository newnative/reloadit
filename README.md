# ReloadIt - Automatically reload web pages while developing

A little like [LiveReload](http://livereload.com/), but simpler.

# Installing
```bash
npm install -g reloadit
```

# Running
Simply run the `reloadit` command in your browser
```bash
$ reloadit
ReloadIt server running at http://127.0.0.1:9998
```

# Make your software call ReloadIt
Currently ReloadIt doesn't automatically reload pages right out of the box.

This integration work has to be done manually. You can trigger ReloadIt by doing an HTTP-GET request to the URL: `/reloadrequest`.
With the default configuration, this will be `http://127.0.0.1:9998/reloadrequest`.

## Integrating with Compass
Add the following code to your `config.rb`:
```ruby
# Call ReloadIt when a stylesheet has been changed
require 'net/http'
on_stylesheet_saved do |file|
    uri = URI('http://127.0.0.1:9998/reloadrequest')
    Net::HTTP.get_response(uri)
end
```

# License
Use of this software is governed by a MIT-style license that can be found in the LICENSE file.
