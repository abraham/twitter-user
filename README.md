&lt;twitter-user&gt;
====

Install
----

Polyfill tags if you need them. This will include ShadowDOM and Custom Elements support.

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-sd-ce.js"></script>
```

Loading this component. It would be a good idea to use a specific version instead of `latest`.

```
<script src="https://unpkg.com/twitter-user@latest/dist/twitter-user.min.js"></script>
```

Usage
----

```
<twitter-user></twitter-user>

<twitter-user></twitter-user>

<twitter-user>Slot content</twitter-user>
```

```
document.querySelector('<twitter-user>').user = User;

```

License
----

TwitterUser is released under an MIT license.

Built, tested, and published with [Nutmeg](https://nutmeg.tools).
