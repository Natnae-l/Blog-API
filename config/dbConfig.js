const express = require('express')
const mongoose = require('mongoose');

module.exports = async function database(){
    try {
        await mongoose.connect(process.env.MongoDB);
      } catch (error) {
        console.log(error);
      }
}
