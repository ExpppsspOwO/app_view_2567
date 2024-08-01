<template>
    <div>
      <h1>Hello {{ name }}</h1>
      <!-- แสดงออกมาแต่ไม่ส่งกลับ -->
      <input type="text" :value="name"><br>
      <!-- แสดงออกมา และ ส่งกลับได้ -->
      <input type="text" v-model="name"><br>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        name: "World",
      }
    },
  }
  </script>