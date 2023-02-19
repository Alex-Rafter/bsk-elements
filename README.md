# Bluesky Elements

Initial repo for Bluesky component library. Unfinished, but functional.

## base dir

A breakdown of the files in the base directory, and their purpose.

- ### index.js

Entry point for the library.

- ### auto-bsk-elements.js


Automatically registers all components in the library via DOM query selector.

- ### base-class.js


Base class for all components, extending the browser native HTML element.
Adds lots of useful helpers, and contains the custom call of Petite Vue used in the Bluesky Elements lib.

- ### make-component.js


Provides a function to dynamically create a new component based on params passed at function call. Makes use of the base class.

- ### store.js


Reactive global store accessible across components in the core Bluesky Elements library, and custom / auto-generated elements added during build.

## base dir