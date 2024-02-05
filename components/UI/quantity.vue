<template>
  <button class="btn btn-icon btn-primary input-group-text flex-fill product-quantity-minus border-end-0"
    @click="decrementValue"><i class="ri-subtract-line"></i></button>
  <input type="text" class="form-control form-control-sm text-center w-100" :placeholder="placeholder" :name="name"
    aria-label="quantity" v-model="inputValue">
  <button class="btn btn-icon btn-primary input-group-text flex-fill product-quantity-plus border-start-0"
    @click="incerementValue"><i class="ri-add-line"></i></button>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    initialValue: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'password',
    }
  },
  setup(props, { emit }) {
    // Define a reactive variable to track the input value
    let inputValue = ref(props.initialValue);

    // Function to change the input type
    const incerementValue = () => {
      // Increase the count By one
      if (isNaN(inputValue.value)) {
        // If of Value is Not a Number then make the value to 1
        inputValue.value = 1;
      }
      inputValue.value = Number(inputValue.value) + 1;
    };
    const decrementValue = () => {
      // decrease the count by 1, but not less than 1
      if (isNaN(inputValue.value)) {
        // If of Value is Not a Number then make the value to 1
        inputValue.value = 1;
      } else if (inputValue.value > 1) {
        inputValue.value = Number(inputValue.value) - 1;
      }
    };

    // Watch for changes in inputValue and emit an event to notify the parent
    watch(inputValue, () => {
      emit('input', inputValue.value);
    });
    // Return values and functions to be used in the template
    return {
      inputValue,
      incerementValue,
      decrementValue,
    };
  },


};
</script>
