<template>
    <v-responsive class="border rounded" max-height="auto">
        <v-app>
            <v-app-bar :elevation="2">
                <template v-slot:prepend>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </template>

                <v-app-bar-title>Application Bar {{ username }} E-mail= {{ email }}</v-app-bar-title>
                <div class="text-center">
                    <v-btn append-icon="mdi-account-circle" prepend-icon="mdi-check-circle" @click="logOut">
                        <template v-slot:prepend>
                            <v-icon color="success"></v-icon>
                        </template>

                        Logout

                        <template v-slot:append>
                            <v-icon color="warning"></v-icon>
                        </template>
                    </v-btn>
                </div>
            </v-app-bar>

            <!-- <v-navigation-drawer>
                <v-list>
                    <v-list-item title="Navigation drawer"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <v-container>
                    <h1>Main Content</h1>
                </v-container>
            </v-main> -->
            <v-carousel show-arrows="hover" hide-delimiters>
                <v-carousel-item src="@/img/banner1.png" cover></v-carousel-item>

                <v-carousel-item src="@/img/banner2.png" cover></v-carousel-item>

                <v-carousel-item src="@/img/banner3.png" cover></v-carousel-item>
            </v-carousel>
            <v-row align="center" justify="center" dense>
                <v-col cols="12 pt-3" md="6">
                    <v-card elevation="16" append-icon="mdi-check" class="mx-auto" prepend-icon="mdi-account"
                        subtitle="prepend-icon and append-icon" title="Icons">
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod.</v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12 pt-3" md="6">
                    <v-card elevation="16" class="mx-auto" subtitle="prepend and append" title="Icons">
                        <template v-slot:prepend>
                            <v-icon color="primary" icon="mdi-account"></v-icon>
                        </template>
                        <template v-slot:append>
                            <v-icon color="success" icon="mdi-check"></v-icon>
                        </template>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod.</v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card elevation="16" append-avatar="https://cdn.vuetifyjs.com/images/john.jpg" class="mx-auto"
                        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                        subtitle="prepend-avatar and append-avatar" title="Avatars">
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod.</v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card elevation="16" class="mx-auto" subtitle="prepend and append" title="Avatars">
                        <template v-slot:prepend>
                            <v-avatar color="blue-darken-2">
                                <v-icon icon="mdi-alarm"></v-icon>
                            </v-avatar>
                        </template>
                        <template v-slot:append>
                            <v-avatar size="24">
                                <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                            </v-avatar>
                        </template>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod.</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <div style="padding-top: 5%;"></div>
            <v-card>
                <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
                    <v-tab :value="1">Landscape</v-tab>
                    <v-tab :value="2">City</v-tab>
                    <v-tab :value="3">Abstract</v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab">
                    <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
                        <v-container fluid>
                            <v-row>
                                <v-col v-for="i in 6" :key="i" cols="12" md="4">
                                    <v-img :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                        :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`" height="205"
                                        cover></v-img>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card>
        </v-app>
    </v-responsive>

</template>
<script>
import axios from 'axios'

export default {
    // beforeRouteEnter(to, from, next) {
    //     // let useremail = window.sessionStorage.getItem('email')
    //     // console.log('user = ', useremail)
    //     // if (!useremail) { //หรือ (!useremail) เพื่อย่อโค้ด
    //     //     // this.$router.replace('/login');
    //     //     return next('/login');
    //     // }
    // },
    data: () => ({
        username: '',
        email: '',
        password: '',
        status: '',
        picture: '',
        tab: null,

    }),
   
    async mounted() {
        // let useremail = window.sessionStorage.getItem('email')
        let user = window.sessionStorage.getItem("email");
        // console.log('user = ', useremail)
        // if (!useremail) { //หรือ (!useremail) เพื่อย่อโค้ด
        //     this.$router.replace('/login');
        // }
        const response = await axios.get('http://localhost:7000/listid?email=' + user) // get "id?email="+
        let data = response.data
        console.log('userindata=', data)
        this.email = data.row.email
        this.username = data.row.username
    },
    methods: {
        logOut() {
            window.sessionStorage.clear();
            this.$router.replace('/login');
        },


    },
};
</script>