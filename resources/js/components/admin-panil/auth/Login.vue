<template>
<div>

    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <v-progress-linear :active="loading" :indeterminate="loading" absolute top color="indigo lighten-2"></v-progress-linear>
        <div class="max-w-3xl w-full">
            <div class="block lg:flex bg-white lg:shadow-lg rounded-lg">
                <div class="w-full lg:w-1/3 flex lg:border-r border-gray-200">
                    <div class="m-auto rounded-full">
                        <router-link to="/" class="flex items-base">
                            <v-img :src="'/images/logo.png'" alt="Raijin Code" class="w-24 md:w-32 lg:w-48"></v-img>
                        </router-link>
                    </div>
                </div>
                <div class="w-full lg:w-2/3 px-6 py-16">
                    <div class="mb-4 font-light tracking-widest text-2xl">
                        LOGIN
                    </div>
                    <v-form autocomplete="off" @submit.prevent>
                        <div class="mb-4">
                            <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required :error-messages="errors.email"></v-text-field>
                        </div>
                        <div class="mb-4">
                            <v-text-field v-model="form.password" type="password" :rules="passwordRules" label="password" required :error-messages="errors.password"></v-text-field>
                        </div>
                        <label class="mb-4 flex items-center">
                            <input type="checkbox" class="form-checkbox" name="remeber" id="remeber" checked />
                            <span class="ml-2">I want to remember you ?</span>
                        </label>
                        <div class="block md:flex items-center justify-between">
                            <button @click="doLogin" class="align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg">
                                LOGIN
                            </button>
                        </div>
                    </v-form>
                    <div class="block md:flex items-center justify-end">
                        <router-link to="/register" class="text-gray-600 hover:text-gray-700 font-bold no-underline block mt-3">
                            New to Rijin Code? Sign up!
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
                device_name: "browser" // 'ios/android/etc'
            },
            loading: false,
            errors: {},
            show1: false,
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            passwordRules: [
                v => !!v || 'field is required',
                v => v.length >= 8 || 'Min 8 characters'
            ],
        };
    },

    methods: {
        doLogin() {
            this.loading = true;
            axios.post("/api/login", this.form).then(response => {
                localStorage.setItem('token', response.data);
                this.$router.push('/dashboard');
            }).catch(errors => {
                this.errors = errors.response.data.errors;
            }).finally(() => {
                this.loading = false;
            });

        }
    }
}
</script>
