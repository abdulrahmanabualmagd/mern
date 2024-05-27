const stream = require('stream');

// stream.Readable
// A base class for readable streams.

// stream.Writable
// A base class for writable streams.

// stream.Duplex
// A base class for streams implementing both readable and writable interfaces.

// stream.Transform
// A base class for streams that transform data.

// stream.PassThrough
// A simple stream that passes inputs straight through to the output.

// stream.pipeline
// A utility function for piping streams together with proper error handling and flow control.

// stream.finished(stream[, callback])
// A utility function to asynchronously wait until a stream has emitted 'end' or 'finish' events.

// stream.Readable.from(iterable[, options])
// Creates a Readable stream from an iterable.

// stream.Writable.from(writeFunction[, options])
// Creates a Writable stream from a function that will be called with data to be written.

// stream.Readable.fromAsync(iterable[, options])
// Creates an asynchronous Readable stream from an async iterable.

// stream.Writable.fromAsync(writeFunction[, options])
// Creates an asynchronous Writable stream from an async function that will be called with data to be written.

// stream.finished(stream[, options], callback)
// An asynchronous version of stream.finished.

// stream.pipeline(source[, ...transforms], destination[, callback])
// An asynchronous version of stream.pipeline.
