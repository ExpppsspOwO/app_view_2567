<template>
    <v-parallax src="https://media.tenor.com/MGamxKH-C9gAAAAd/blue-archive.gif">
        <div class="text-center">
            <v-progress-circular :model-value="value" :rotate="360" :size="100" :width="15" color="teal">
                {{ value }}
            </v-progress-circular>

            <v-progress-circular :model-value="value" :rotate="-90" :size="100" :width="15" color="primary">
                {{ value }}
            </v-progress-circular>

            <v-progress-circular :model-value="value" :rotate="90" :size="100" :width="15" color="red">
                {{ value }}
            </v-progress-circular>

            <v-progress-circular :model-value="value" :rotate="180" :size="100" :width="15" color="pink">
                {{ value }}
            </v-progress-circular>
        </div>
        <v-card color="basil" style="opacity: 0.9;">
            <v-card-title class="text-center justify-center py-6">
                <h1 class="font-weight-bold text-h2 text-basil">
                    Deboard
                </h1>
            </v-card-title>
            <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg    ">
                <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
                    <v-tab v-for="item in items" :key="item" :text="item" :value="item"></v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab">
                    <v-tabs-window-item v-for="item in items" :key="item" :value="item">
                        <v-card color="basil" flat>
                            <v-card-text>{{ text }}</v-card-text>
                        </v-card>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-parallax>
        </v-card>
    </v-parallax>
</template>
<script>
export default {
    data() {
        return {
            interval: {},
            value: 0,
            tab: 'Appetizers',
            items: [
                'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    },
    beforeUnmount() {
        clearInterval(this.interval)
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.value === 100) {
                return (this.value = 0)
            }
            this.value += 10
        }, 1000)
    },
}
</script>
<style scoped>
.v-progress-circular {
    margin: 1rem;
}
</style>