&lt;twitter-user&gt;
====

[![Version Status](https://img.shields.io/npm/v/twitter-user.svg?style=flat&label=version&colorB=4bc524)](https://npmjs.com/package/twitter-user)
[![macOS Build Status](https://img.shields.io/circleci/project/github/abraham/twitter-user.svg?style=flat&label=macos)](https://circleci.com/gh/abraham/twitter-user)
[![Linux Build Status](https://img.shields.io/travis/abraham/twitter-user.svg?style=flat&label=linux)](https://travis-ci.org/abraham/twitter-user)
[![Windows Build Status](https://img.shields.io/appveyor/ci/abraham/twitter-user.svg?style=flat&label=windows)](https://ci.appveyor.com/project/abraham/twitter-user)
[![Dependency Status](https://david-dm.org/abraham/twitter-user.svg?style=flat)](https://david-dm.org/abraham/twitter-user)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/twitter-user.svg?style=flat&colorB=4bc524)](https://bundlephobia.com/result?p=twitter-user)

Twitter User Web Component

Examples
----

[Live demo](https://codepen.io/abraham/pen/dJaEpq)

![Example](/images/jack.png)
![Example with description](/images/abraham.png)

Install
----

Polyfill tags if you need them. This will include ShadowDOM and Custom Elements support.

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/bundles/webcomponents-sd-ce.js"></script>
```

Loading this component. It would be a good idea to use a specific version instead of `latest`.

```
<script src="https://unpkg.com/twitter-user@latest/dist/twitter-user.min.js"></script>
```

Usage
----

User must be the full response of [GET users/show](https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-show).

```
<twitter-user></twitter-user>

<twitter-user user="{\"id_str\":\"12\",...}"></twitter-user>
```

```
document.querySelector('twitter-user').user = { "id_str": "12", ... };

```

&lt;twitter-status&gt;
----

Looking for a way to embed tweets? Check out [&lt;twitter-status&gt;](https://github.com/abraham/twitter-status).

License
----

TwitterUser is released under an MIT license.

TwitterUser is not affiliated Twitter, Inc.

Built, tested, and published with [Nutmeg](https://nutmeg.tools).
