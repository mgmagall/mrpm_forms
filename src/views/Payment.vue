<template>
  <div class="payment">
    <PaymentInformation msg="Please insert your payment information."/>
  </div>
</template>

<script>
import PaymentInformation from "@/components/PaymentInformation";
export default {
  name: "Payment",
  components: {PaymentInformation}
}
</script>

<style scoped>

</style>