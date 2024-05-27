const EventEmitter = require('events');

// Class: EventEmitter
// An implementation of the observer pattern, allowing objects to subscribe to events and emit them.

// emitter.on(eventName, listener)
// Adds a listener function to the specified event.

// emitter.once(eventName, listener)
// Adds a one-time listener function to the specified event.

// emitter.off(eventName, listener)
// Removes a listener function from the specified event.

// emitter.removeAllListeners([eventName])
// Removes all listeners from the specified event. If no eventName is provided, removes all listeners for all events.

// emitter.addListener(eventName, listener)
// Alias for emitter.on(eventName, listener).

// emitter.removeListener(eventName, listener)
// Alias for emitter.off(eventName, listener).

// emitter.setMaxListeners(n)
// Sets the maximum number of listeners that can be added to an event. Default is 10.

// emitter.getMaxListeners()
// Returns the maximum number of listeners that can be added to an event.

// emitter.eventNames()
// Returns an array listing the events for which the emitter has registered listeners.

// emitter.listenerCount(eventName)
// Returns the number of listeners for the specified event.

// emitter.prependListener(eventName, listener)
// Adds a listener function to the beginning of the listeners array for the specified event.

// emitter.prependOnceListener(eventName, listener)
// Adds a one-time listener function to the beginning of the listeners array for the specified event.

// emitter.listeners(eventName)
// Returns an array of listener functions for the specified event.

// emitter.rawListeners(eventName)
// Returns an array of listener functions, including any wrappers, for the specified event.

// emitter.emit(eventName[, ...args])
// Synchronously calls each of the listeners registered for the specified event, in the order they were registered, passing the supplied arguments to each.

// emitter.on(eventName, listener)
// Adds a listener function to the specified event.

// emitter.once(eventName, listener)
// Adds a one-time listener function to the specified event.

// emitter.off(eventName, listener)
// Removes a listener function from the specified event.

// emitter.removeAllListeners([eventName])
// Removes all listeners from the specified event. If no eventName is provided, removes all listeners for all events.

// emitter.addListener(eventName, listener)
// Alias for emitter.on(eventName, listener).

// emitter.removeListener(eventName, listener)
// Alias for emitter.off(eventName, listener).

// emitter.setMaxListeners(n)
// Sets the maximum number of listeners that can be added to an event. Default is 10.

// emitter.getMaxListeners()
// Returns the maximum number of listeners that can be added to an event.

// emitter.eventNames()
// Returns an array listing the events for which the emitter has registered listeners.

// emitter.listenerCount(eventName)
// Returns the number of listeners for the specified event.

// emitter.prependListener(eventName, listener)
// Adds a listener function to the beginning of the listeners array for the specified event.

// emitter.prependOnceListener(eventName, listener)
// Adds a one-time listener function to the beginning of the listeners array for the specified event.

// emitter.listeners(eventName)
// Returns an array of listener functions for the specified event.

// emitter.rawListeners(eventName)
// Returns an array of listener functions, including any wrappers, for the specified event.

// emitter.emit(eventName[, ...args])
// Synchronously calls each of the listeners registered for the specified event, in the order they were registered, passing the supplied arguments to each.
