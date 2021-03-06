define( {

  template_todos: {
    module: 'hbs!template/todos'
  },

  view: {
    create: {
      module: 'view/todo'
    },

    // Attach properties
    properties: {
      // Dom elements need to be found in the view after the rendering of the template
      input: '.todo-input',
      checkbox: '.check',

      // Class names
      editing: 'editing',

      // Pass in our template
      template: { $ref: 'template_todos' }
    },

    // Connect events
    connect: {
      model: {
        'change': 'render'
      }
    },

    // Call these functions to destory this view
    destroy: {
      'undelegateEvents': [], // Clear bound dom events
      'remove': []
    }
  },

  model: {

    create: {
      module: 'model/todo',
      args: [

        // Attributes
        { $ref: 'todo_attributes' }, // Set the models initial attributes to those passed into the wire spec

        // Options
        {
          // Add the collection to the model so backbone has access to it
          collection: { $ref: 'collection' },
          parse: true
        }

      ]
    },

    // Attach properties
    properties: {
      // attach the view to our model, so
      // the views/app view can access it from a collection change
      view: { $ref: 'view' }
    },

    // Connect events
    connect: {
      view: {
        'destroy': 'destroy',
        'changeContent': 'save',
        'changeDone': 'save'
      }
    },

    // Save model to localstorage after creating it
    init: {
      'save': []
    }
  },

  plugins: [
    { module: 'wire/debug', // Uncomment to see what's going on inside this spec
      trace: {
        pointcut: /^((?!(model$|constructor$|_)).*)$/ // Stop constructors being wrapped as functions
      }
    },
    { module: 'wire/backbone/events' }
  ]

} );
