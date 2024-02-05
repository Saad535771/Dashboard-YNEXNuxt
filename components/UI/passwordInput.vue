<template>
    <input :type="inputType" v-model="inputValue" :name="name" :id="id" :placeholder="placeholder" class="form-control form-control-lg" :required="required">
    <button @click="changeInputType" class="btn btn-light" type="button" id="button-addon2"><i class=" align-middle"
            :class="inputType === 'text' ? 'ri-eye-line' : 'ri-eye-off-line'"></i></button>
</template>
  
<script>
import { ref } from 'vue';

export default {
    props: {
        initialValue: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        required: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        // Define a reactive variable to track the input type
        const inputType = ref('password');
        // Define a reactive variable to track the input value
        const inputValue = ref(props.initialValue);

        // Function to change the input type
        const changeInputType = () => {
            // Toggle between text and password types
            inputType.value = inputType.value === 'text' ? 'password' : 'text';
        };

        // Watch for changes in inputValue and emit an event to notify the parent
        watch(inputValue, () => {
            emit('input', inputValue.value);
        });
        // Return values and functions to be used in the template
        return {
            inputType,
            inputValue,
            changeInputType,
        };
    },


};
</script>
  