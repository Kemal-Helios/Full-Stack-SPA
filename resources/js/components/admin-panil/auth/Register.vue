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
                        Register
                    </div>
                    <v-form autocomplete="off" @submit.prevent>
                        <div class="mb-3">
                            <v-text-field v-model="form.name" label="Full Name" required :error-messages="errors.name"></v-text-field>
                        </div>
                        <div class=" mb-3">
                            <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required :error-messages="errors.email"></v-text-field>
                        </div>
                        <div class="mb-3">
                            <v-text-field label="Password" v-model="form.password" type="password" required :rules="passwordRules" :error-messages="errors.password"></v-text-field>
                        </div>
                        <div class="mb-3">
                            <v-text-field label="Confirm Password" v-model="form.password_confirmation" type="password" required :rules="[
                                                        form.password === form.password_confirmation ||
                                                        'Password must match'
                                                                        ]" :error-messages="errors.password_confirmation">
                            </v-text-field>
                        </div>
                        <div class="block md:flex items-center justify-between">
                            <button @click="doRegister" class="align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg">
                                Register
                            </button>
                        </div>
                    </v-form>
                    <div class="block md:flex items-center justify-end">
                        <router-link to="/login" class="text-gray-600 hover:text-gray-700 font-bold no-underline block mt-3">
                            Do you already have an account? Login!
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <v-snackbar v-model="snackbar" top color="success" timeout="-1">
            Register Success
            <template v-slot:action="{ attrs }">
                <v-btn color="primary" v-bind="attrs" @click="goLogin">
                    Sing In NOW !
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
            loading: false,
            snackbar: false,
            errors: {},
            show1: false,
            valid: true,
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
        doRegister() {
            this.loading = true;
            axios.post("/api/register", this.form).then(response => {
                this.snackbar = true;
                this.form.name = '';
                this.form.email = '';
                this.form.password = '';
                this.form.password_confirmation = '';
                this.emailRules = false;
                this.passwordRules = false;
                this.errors = {};
            }).catch(errors => {
                this.errors = errors.response.data.errors;
            }).finally(() => {
                this.loading = false;
            });

        },
        goLogin() {
            this.snackbar = false;
            setTimeout(() => {
                this.$router.push('/login')
            }, 300);
        }
    }
};
</script>
