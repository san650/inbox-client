# inbox

Client app for `inbox` system. See [inbox](https://github.com/san650/inbox-server).

## Deployment

`API_HOST` URL to the API server.

To deploy in [Heroku](https://github.com/heroku/heroku-buildpack-emberjs)

```
$ heroku create
$ heroku buildpacks:set https://codon-buildpacks.s3.amazonaws.com/buildpacks/heroku/emberjs.tgz
$ heroku config:set API_HOST=https://my-server.herokuapp.com/
$ git push heroku master
```
