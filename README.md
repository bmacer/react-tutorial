# npm vs npx

## npm

npm is local, npx is executing

`sudo npm install -g cowsay` (cowsay is a simple executable "cowsay")

`npm list cowsay` is empty, because we installed it globally

`npm list -g cowsay` and we'll see it, because it's global

`npm uninstall -g cowsay` to uninstall

To run this in the package (not globally), we need to install it without the -g
`npm install cowsay`

Now it is in our `package.json` file.  But we need to add the script to the `package.json` file.  The full file:

```
{
  "scripts": {
    "say": "cowsay"
  },
  "dependencies": {
    "cowsay": "^1.5.0"
  }
}
```

We can uninstall with `npm uninstall cowsay` (or just delete all the package and node files).

## npx

`npx` will directly install all the files, and executes it immediately

`npx cowsay hello` will download, execute, and delete immediately.  This prevents clogging the disk for one-time uses.

Thus, when we run `npx create-react-app monsters-rolodex`, we're downloading a bunch of temporary stuff we don't need and will get deleted when we're done with it.
