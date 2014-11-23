# ReloadIt - Automatically reload web pages while developing

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

# Configuring compass to listen to callbacks
Add the following code to your `config.rb`:
```ruby
# Call ReloadIt when a stylesheet has been changed
require 'net/http'
on_stylesheet_saved do |file|
    uri = URI('http://127.0.0.1:9998/reloadrequest')
    Net::HTTP.get_response(uri)
end
```
