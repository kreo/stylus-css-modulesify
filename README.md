# stylus-cssmodulesify
an example of how stylus and css-modules can be used together.

The app source is divided into separate components that could theoretically be
moved to other modules.

Each component has it's own `index.styl` that defines the styles for that
component.

To tie everything together `main.styl` includes all of these styles and compiles
them into one css file.  This is necessary to allow stylus to inject mixins,
globals, etc.
