<template>
    <br>
    <h1 style="text-align: center;">สถานที่ท่องเที่ยว</h1>
    <v-container>
        <v-btn variant="outlined"color="primary" href="travelmanage">
            เพิ่มข้อมูล
        </v-btn>
        <br><br>
        <v-row>
            <v-col cols="6" sm="4" v-for="item in travelList" :key="item.id">
                <v-card class="mx-auto" max-width="344" elevation="16">
                    <v-img height="200px" :src="item.picture" cover></v-img>

                    <v-card-title>
                        {{ item.name }}
                    </v-card-title>

                    <v-card-subtitle>
                        {{ item.details }}
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
definePageMeta({
    layout: "iot",

});
import axios from 'axios'
export default {
    data() {
        return {
            id: 0,
            travelList: [],  // เก็บข้อมูลสถานที่ท่องเที่ยว
            
        };
    },
    mounted() {
        this.getTravelList();
    },
    methods: {
        async getTravelList() {
            try {
                const response = await axios.get('http://localhost:7000/gettravels');
                this.travelList = response.data.travelList;  // เก็บข้อมูล API ที่ได้มาใน travelList
                console.log(this.travelList)
            } catch (error) {
                console.error('Error fetching travel data:', error);
            }
        },
        async deleteTravel(id) {
            this.id = id;
            // console.log(this.id)
            try {
                const response = await axios.get(`http://localhost:7000/deletetravel?id=` + this.id);
                this.getTravelList();  // รีเฟรชข้อมูลหลังจากลบ
               
            } catch (error) {
                console.error('Error deleting travel:', error);
            }
        },
    }
}</script>