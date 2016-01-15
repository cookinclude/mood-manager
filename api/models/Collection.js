/**
* Collection.js
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
    fonts: {
      type: 'string'
    },
    containerHeight: {
      type: 'integer'
    },
    containerWidth: {
      type: 'integer'
    },
    minFontSize: {
      type: 'integer'
    },
    maxFontSize: {
      type: 'integer'
    },
    minLineHeight: {
      type: 'integer'
    },
    maxLineHeight: {
      type: 'integer'
    },
    signature: {
      type: 'string',
      enum: ['white', 'black'],
      defaultsTo: 'white'
    },
    packages:{
      collection: 'package',
      via: 'collections'
    }
  }
};

