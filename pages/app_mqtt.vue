<template>
    <div>
      <div>Index.vue</div>
      <h1 :title="id">{{ msg }}</h1>
      <div>{{ name.toUpperCase() + sw }}</div>
      <input v-model="id" type="text">
      <button @click="add">CLICK</button>
    </div>
  </template>
  <script>
//   const mqtt = require('mqtt')
  import mqtt from "mqtt";
  definePageMeta({
  layout: "custom",
});
  export default {
    data() {
      return {
        id: 10,
        name: 'hello',
        msg: '',
        sw: '',
      }
    }, // data
  
    created() {
      this.client = mqtt.connect('ws://broker.emqx.io:8083/mqtt')
      this.client.on('connect', this.onMqttConnect.bind(this))
      this.client.on('message', this.onMqttMessage.bind(this))
    }, // created
  
    beforeDestroy() {
      // if (this.client) {
      //   this.client.end()
      // }
      this.client && this.client.end()
    }, // beforeDestroy
  
    methods: {
      add() {
        this.id++
        let sw = this.id++
        this.client.publish('op-001', String(sw))
      }, // add
  
      onMqttConnect() {
        console.log('connected')
        this.client.publish('op', 'status')
        this.client.subscribe('status', err => err)
        this.client.subscribe('room1', err => err)
      }, // onMqttConnect
  
      onMqttMessage(topic, message) {
        if (topic === 'status') {
          // message is Buffer
          console.log('GOT:', message.toString())
          this.msg = message.toString()
        }
        if (topic === 'room1') {
             console.log('lamp 1 On')
        }
      }, // onMqttMessage
    }, // methods
  }
  </script>