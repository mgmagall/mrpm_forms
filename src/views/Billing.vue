<template>
  <div class="billing">
    <BillingInformation msg="Please insert your billing information."/>
  </div>
</template>

<script>
import BillingInformation from "@/components/BillingInformation";

export default {
  name: "Billing",
  components: {BillingInformation}
}
</script>
