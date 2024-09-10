<template>
    <br>
    <h1 style="padding-left: 5%;">เพิ่มสถานที่ท่องเที่ยว</h1>
    <v-container>
        <v-alert v-if="showAlert" type="success" dismissible @input="showAlert = false">
            ข้อมูลถูกเพิ่มเรียบร้อยแล้ว!
        </v-alert>
        <v-form v-model="valid" ref="form">
            <v-text-field label="ชื่อสถานที่" v-model="placeName" :rules="[v => !!v || 'กรุณากรอกชื่อสถานที่']"
                required></v-text-field>
            <br>
            <v-text-field label="รายละเอียด" v-model="details" :rules="[v => !!v || 'กรุณากรอกรายละเอียด']"
                required></v-text-field>
            <br>
            <v-text-field label="URL รูปภาพ" v-model="url" :rules="[v => !!v || 'กรุณากรอก URL']"
                required></v-text-field>
            <v-btn :disabled="!valid" variant="outlined" color="success" class="mb-4" @click="submitForm">
                เพิ่มข้อมูล
            </v-btn>
            <span style="padding-left: 15px;"></span>
            <v-btn variant="outlined" color="error" class="mb-4" href="travelmanage">
                กลับ
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            valid: false,
            placeName: '',
            details: '',
            url: '',
            showAlert: false,  // ควบคุมการแสดงผลของ v-alert
        };
    },
    methods: {
        async submitForm() {
            if (this.$refs.form.validate()) {
                // ดำเนินการเมื่อกรอกข้อมูลครบ
                let datatravel = {
                    placeName: this.placeName,
                    details: this.details,
                    url: this.url,
                };

                try {
                    const response = await axios.post('http://localhost:7000/inserttravel', datatravel);
                    console.log(response.data);  // สามารถตรวจสอบการตอบกลับจาก API ได้ที่นี่
                    // แสดงข้อความแจ้งเตือน
                    this.showAlert = true;

                    // ล้างฟอร์ม
                    this.placeName = '';
                    this.details = '';
                    this.url = '';
                } catch (error) {
                    console.error(error);  // จัดการกรณีเกิดข้อผิดพลาด
                }
            }
        }

    },
};
definePageMeta({
    layout: "iot",
});
</script>
