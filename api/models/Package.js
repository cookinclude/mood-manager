/**
* Package.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      unique: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    publishStartDate: {
      type: 'datetime'
    },
    publishEndDate: {
      type: 'datetime'
    },
    enabled: {
      type: 'boolean',
      defaultsTo: false
    },
    collections:{
      collection: 'collection',
      via: 'packages'
    }
  }
};

