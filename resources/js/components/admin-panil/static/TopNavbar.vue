<template>
<header class="bg-white shadow">
    <div class="flex items-center justify-between mx-2 py-2 px-8">
        <div>
            <img class="inline mb-1" src="/images/logo.png" alt="Workcation" style="width:4rem">
        </div>
        <div class="px-2 pt-2 pb-4 inline">
            <div class="relative inline mx-2">
                <button @click="isOpen = !isOpen" class="relative z-10   inline h-8  overflow-hidden focus:outline-none focus:border-white">
                    <img class="inline w-full object-cover" src="/images/translator.png" alt="Your icon" />
                </button>
                <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"></button>
                <div v-if="isOpen" class="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20 fixed">
                    <a :href="linkEn" ref="account" class="block px-4 py-2   text-gray-600 hover:bg-gray-100" @keydown.up.exact.prevent="" @keydown.tab.exact="focusNext(false)" @keydown.down.exact.prevent="focusNext(true)" @keydown.esc.exact="hideDropdown">
                        <span class="ml-2">English</span>
                    </a>
                    <a :href="linkAr" class="block px-4 py-2  text-gray-600 hover:bg-gray-100" @keydown.shift.tab="focusPrevious(false)" @keydown.up.exact.prevent="focusPrevious(true)" @keydown.down.exact.prevent="" @keydown.tab.exact="hideDropdown" @keydown.esc.exact="hideDropdown">
                        <span class="ml-2">Arabic</span>
                    </a>
                </div>
            </div>
            <router-link to="/#" class="inline lg:px-2 py-2 font-semibold rounded text-gray-600 hover:bg-gray-100">Dashboard</router-link>
            <router-link to="/#" class="inline lg:px-2 py-2 font-semibold rounded text-gray-600 hover:bg-gray-100">Users</router-link>
        </div>
    </div>
</header>
</template>

<script>
export default {
    props: ["locale", "link-en", "link-ar"],
    data() {
        return {
            isVisible: false,
            focusedIndex: 0,
            isOpen: false,

        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        hideDropdown() {
            this.isVisible = false;
            this.focusedIndex = 0;
        },
        startArrowKeys() {
            if (this.isVisible) {
                // this.$refs.account.focus()
                this.$refs.dropdown.children[0].children[0].focus();
            }
        },
        focusPrevious(isArrowKey) {
            this.focusedIndex = this.focusedIndex - 1;
            if (isArrowKey) {
                this.focusItem();
            }
        },
        focusNext(isArrowKey) {
            this.focusedIndex = this.focusedIndex + 1;
            if (isArrowKey) {
                this.focusItem();
            }
        },
        focusItem() {
            this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
        },
        setLocale(locale) {
            this.$i18n.locale = locale;
            this.$router.push({
                params: {
                    lang: locale
                }
            });
            this.hideDropdown();
        }
    },
    beforeCreate: function () {
        if (this.$options.propsData.locale == 'ar') {
            this.$vuetify.rtl = true
        } else {
            this.$vuetify.rtl = false
        }
    },

    created() {
        const handleEscape = e => {
            if (e.key === "Esc" || e.key === "Escape") {
                this.isOpen = false;
            }
        };
        document.addEventListener("keydown", handleEscape);
        this.$once("hook:beforeDestroy", () => {
            document.removeEventListener("keydown", handleEscape);
        });

    }
};
</script>

<style scoped>
button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
}

.flex {
    display: flex;
    align-items: center;
}

img {
    width: 2rem;
    height: 2rem;
}

ul {
    list-style-type: none;
    padding-left: 0;
    position: absolute;
    z-index: 30;
    right: 0;
}

.relative {
    position: relative;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
    transition: all 0.1s ease-in-out;
}

.dropdown-fade-enter,
.dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
}
</style>
