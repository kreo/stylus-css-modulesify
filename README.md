# stylus-cssmodulesify
an example of how stylus and css-modules can be used together.

The app source is divided into separate components that should be able to be
moved out to other modules.

Each component has it's own `index.styl` that defines the styles for that
component.

To tie everything together `main.styl` includes all of these styles and compiles
them into one css file.  This is necessary to allow stylus to inject mixins,
globals, etc.

I do not think this could be done via `css-modulesify`, because it does not need
to know how the css modules are imported and compiled, it just needs to know the 
local css selectors so it can mangle them.

So there are two tools looking at the `.styl` files:

 - `stylus` bundles and transpiles them into one css file.
 - `css-modulesify` extracts the local selectors and exposes them to
   the js modules.  It would need transpile the `styl` files to `css` to
   be able to do so.

At the moment, I can see two problems:

- `css-modulesify` is not able to understand stylus syntax.
- `stylus` does not generate the garbled names css-modules works on.


