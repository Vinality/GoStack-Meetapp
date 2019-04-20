/* eslint-disable no-undef */
'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meetup extends Model {
  user () {
    return this.hasMany('App/Models/User')
  }
  
  file () {
    return this.hasOne('App/Models/File')
  }
}

module.exports = Meetup
