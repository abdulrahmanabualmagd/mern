    // [One-To-One]            => [hasOne &  belongsTo]
    // [One-To-Many]           => [hasMany &  belongsTo]
    // [Many-To-Many]          => [belongsToMany & belongsToMany ]

// Common Options for All Associations:

    // [as]                 :Defines a custom name (alias) to refer to the related model.
    // [foreignKey]         :Specifies the name of the foreign key column in the target model that references the source model's primary key.
    // [sourceKey]          :(optional): Defines the name of the key in the source model used for the relationship. Only needed if the foreign key doesn't match the source model's primary key.
    // [targetKey]          :(optional): Specifies the name of the key in the target model used for the relationship. Only needed if the foreign key doesn't match the target model's primary key.
    // [onDelete]           :(string, optional): Specifies the action to take when a record in the associated model is deleted (e.g., 'CASCADE', 'SET NULL').
    // [onUpdate]           :(string, optional): Defines the action to perform when the key in the associated model is updated (e.g., 'CASCADE').
    // [constraints]        :(boolean, default: true): Determines whether to enforce database constraints like foreign key checks.
    // [hooks]              :(boolean, default: true): Controls whether to run lifecycle hooks (functions) before/after association operations.
    // [through]            :(required for belongsToMany): Specifies the join table model or name used for the many-to-many relationship.
    // [scope]              :(function, optional): Sets a custom scope (filter) to be applied to queries for the association.
    // [uniqueKey]          :(optional, belongsToMany): Defines the name of the unique constraint for the foreign keys in the join table (ensures a record only appears once for each model).
