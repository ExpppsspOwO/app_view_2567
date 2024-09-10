<template>
    <v-container>
        <h1 class="text-h5 mb-4">จัดการสถานที่ท่องเที่ยว</h1>
        <v-btn variant="outlined" color="primary" class="mb-4" href="traveladd">
            เพิ่มข้อมูล
        </v-btn>
        <span style="padding-left: 15px;"></span>
        <v-btn variant="outlined" color="" class="mb-4" href="travel">
            กลับ
        </v-btn>
        <v-table style="border-radius: 15px;">
            <thead>
                <tr>
                    <th>ชื่อ</th>
                    <th>รายละเอียด</th>
                    <th>รูปภาพ</th>
                    <th>การจัดการ</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="item in travelList" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.details }}</td>
                    <td><v-img :width="300" aspect-ratio="16/9" cover :src="item.picture"></v-img></td>
                    <td>
                        <v-btn variant="outlined" color="primary" class="mr-2" :href="'/traveledit?id=' + item.id">
                            แก้ไข
                        </v-btn>
                        <v-btn variant="outlined" color="error" @click="deleteTravel(item.id)">
                            ลบ
                        </v-btn>
                    </td>
                </tr>


            </tbody>
        </v-table>
    </v-container>
</template>

<script>
import axios from 'axios'
definePageMeta({
    layout: "iot",
});
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
}
</script>
