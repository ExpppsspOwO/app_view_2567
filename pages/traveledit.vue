<template>
    <br>
    <h1 style="padding-left: 5%;">แก้ไขสถานที่ท่องเที่ยว</h1>
    <v-container>
        <v-alert v-if="showAlert" type="success" dismissible @input="showAlert = false">
            ข้อมูลถูกแก้ไขเรียบร้อยแล้ว!
        </v-alert>
        <v-form v-model="valid" ref="form">
            <v-text-field 
                label="ชื่อสถานที่" 
                v-model="placeName" 
                :rules="[v => !!v || 'กรุณากรอกชื่อสถานที่']"
                required
            ></v-text-field>
            <br>
            <v-text-field 
                label="รายละเอียด" 
                v-model="details" 
                :rules="[v => !!v || 'กรุณากรอกรายละเอียด']"
                required
            ></v-text-field>
            <br>
            <v-text-field 
                label="URL รูปภาพ" 
                v-model="url" 
                :rules="[v => !!v || 'กรุณากรอก URL']"
                required
            ></v-text-field>
            <v-btn 
                :disabled="!valid" 
                variant="outlined" 
                color="success" 
                class="mb-4" 
                @click="submitForm"
            >
                บันทึกการเปลี่ยนแปลง
            </v-btn>
            <span style="padding-left: 15px;"></span>
            <v-btn 
                variant="outlined" 
                color="error" 
                class="mb-4" 
                href="travelmanage"
            >
                กลับ
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import axios from 'axios';
definePageMeta({
    layout: "iot",
});
export default {
    data() {
        return {
            valid: false,
            placeName: '',
            details: '',
            url: '',
            showAlert: false,
        };
    },
    mounted() {
        // ตรวจสอบว่ามีการระบุ ID ใน URL หรือไม่
        const id = this.$route.params.id;
        if (id) {
            this.getTravelData(id);
        }
    },
    methods: {
        async getTravelData(id) {
            try {
                this.id = id;
                const response = await axios.get(`http://localhost:7000/gettravelsedit?id=` + this.id);
                const travel = response.data.travelList;
                this.placeName = travel.placeName;
                this.details = travel.details;
                this.url = travel.url;
            } catch (error) {
                console.error('Error fetching travel data:', error);
            }
        },
        async submitForm() {
            if (this.$refs.form.validate()) {
                let datatravel = {
                    id: this.$route.params.id, // ใช้ ID จาก URL
                    placeName: this.placeName,
                    details: this.details,
                    url: this.url,
                };

                try {
                    const response = await axios.post('http://localhost:7000/edittravel', datatravel);
                    console.log(response.data);  // ตรวจสอบการตอบกลับจาก API

                    // แสดงข้อความแจ้งเตือน
                    this.showAlert = true;

                    // ล้างฟอร์ม
                    this.placeName = '';
                    this.details = '';
                    this.url = '';
                } catch (error) {
                    console.error('Error submitting form:', error);
                }
            }
        },
    },
};
</script>
