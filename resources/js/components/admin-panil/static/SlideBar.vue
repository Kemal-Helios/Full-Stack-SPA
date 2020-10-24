<template>
<aside class="shadow">
    <div class="flex flex-col flex-row min-h-screen w-full">
        <div class="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
            <div class="flex-grow block px-4 pb-4 md:pb-0 overflow-y-auto">
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item>
                        <v-list-item-icon>
                            <i class='bx bxs-home'></i>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <i class='bx bxs-user-account'></i>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>

                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="flex flex-row justify-start items-start rounded-none shadow-none border-none w-full  py-4 mt-2  text-left bg-transparent  dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none " v-bind="attrs" v-on="on">
                            Dropdown
                            <div class="w-full text-right">
                                <i class='bx bxs-down-arrow'></i>
                            </div>

                        </v-btn>
                    </template>
                    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Account</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-menu>

            </div>
        </div>
    </div>
</aside>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            group: null,
        }
    }

}
</script>
