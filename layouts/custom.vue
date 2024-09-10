<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant" title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Drawer left">
          <v-card class="mx-auto" max-width="500">
            <v-card-title>
              Member List
            </v-card-title>

            <v-divider></v-divider>

            <v-virtual-scroll :items="items" height="320" item-height="48">
              <template v-slot:default="{ item }">
                <v-list-item :subtitle="`Badge #${item}`" :title="`Employee Name`">
                  <template v-slot:prepend>
                    <v-icon class="bg-primary">mdi-account</v-icon>
                  </template>
                </v-list-item>
              </template>
            </v-virtual-scroll>
          </v-card>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item title="Drawer right">
          <div>
            <v-hover v-slot="{ isHovering, props }">
              <v-card class="mx-auto" max-width="344" v-bind="props">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

                <v-card-text>
                  <h2 class="text-h6 text-primary">
                    Magento Forests
                  </h2>
                  Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                </v-card-text>

                <v-card-title>
                  <v-rating :model-value="4" background-color="orange" class="me-2" color="orange" dense
                    hover></v-rating>
                  <span class="text-primary text-subtitle-2">64 Reviews</span>
                </v-card-title>

                <v-overlay :model-value="isHovering" class="align-center justify-center" scrim="#036358" contained>
                  <v-btn variant="flat">See more info</v-btn>
                </v-overlay>
              </v-card>
            </v-hover>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <NuxtPage />
      <!-- Main Content -->
    </v-main>
    
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    items: Array.from({ length: 9 }, (k, v) => v + 1),
  }),
}
</script>