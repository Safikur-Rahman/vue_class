<script setup>
import { defineProps } from 'vue';
  defineProps({
    title: String,
    price:{
      type: String,
      default:0
    },
    button:{
      type:String,
      default:'sign up for Free'
    },
    btnClass:{
      type:String,
      default:'btn-primary'
    },
    isDisabled:Boolean
   
  });
</script>

<template>
   
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">{{ title }}</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  {{price}}<small class="text-body-secondary fw-light">{{title}}</small>
                </h1>
                <slot>same as free plan </slot>
                
                <button
                  type="button"
                  :class='`w-100 btn btn-lg ${btnClass}`' :disabled="isDisabled">
                 {{button}}
                </button>
              </div>
            </div>
          </div>
          

</template>