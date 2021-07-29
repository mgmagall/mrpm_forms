<template>
  <div class="contact">
    <ContactInformation msg="Please insert your contact information."/>
  </div>
</template>

<script>

import ContactInformation from '@/components/ContactInformation.vue'

export default {
  name: 'Contact',
  components: {
    ContactInformation
  }
}
</script>