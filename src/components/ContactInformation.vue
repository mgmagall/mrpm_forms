<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          class="mb-5"
          cols="10"
      >
        <h2 class="headline font-weight-bold mb-3">
          Contact Information
        </h2>

      </v-col>
      </v-row>

    </v-container>
    <v-container>
      <v-row >
        <v-col cols="6" sm="12" lg="4"  >
          <v-text-field
              v-model="formData.contactFN"
              label="Contact First Name"
              @change="update"
              filled
              outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6" sm="12" lg="4" >
          <v-text-field
            v-model="formData.contactLN"
            label="Contact Last Name"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4">
          <v-text-field
              v-model="formData.cTelNum"
              label="Contact Tel Number"
              @change="update"
              filled
              outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4">
          <v-text-field
              v-model="formData.cFaxNum"
              label="Contact Fax Number"
              @change="update"
              filled
              outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4" >
          <v-text-field
              v-model="formData.cEmail"
              label="Contact Email"
              @change="update"
              filled
              outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6" sm="12" lg="4">
          <v-text-field
            v-model="formData.piFN"
            label="PI First Name"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4" >
          <v-text-field
            v-model="formData.piLN"
            label="PI Last Name"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4" >
          <v-text-field
            v-model="formData.piTelNum"
            label="PI Tel Number"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4">
          <v-text-field
              v-model="formData.piFaxNum"
              label="PI Fax Number"
              @change="update"
              filled
              outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4" >
          <v-text-field
              v-model="formData.piEmail"
              label="PI Email"
              @change="update"
              filled
              outlined
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row >
        <v-col cols="6" sm="12" lg="4" >
          <v-text-field
            v-model="formData.institution"
            label="Institution"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4">
          <v-text-field
            v-model="formData.school"
            label="School"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4" >
          <v-text-field
            v-model="formData.cancerCenterMember"
            label="UCD Cancer Center Member?"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6" sm="12" lg="4">
          <v-text-field
            v-model="formData.address"
            label="Address"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4">
          <v-text-field
            v-model="formData.city"
            label="City"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4" >
          <v-text-field
            v-model="formData.state_province"
            label="State/Province"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="12" lg="4" >
          <v-text-field
            v-model="formData.zip"
            label="Zip/Postal Code"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" no-gutters>
        <v-col cols="4">
          <v-select
              v-model="formData.contactForRslts"
              :items="contactforResults"
              item-text="name"
              item-value="value"
              label="Primary contact for Results"
              @change="update"
              required
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

  </v-form>
</template>

<script>
 export default {
  name: "contact",
   props:["contactData"],
  data: () => ({
    formData: {
      contactFN: "",//this.contactData.firstName,
      contactLN: null,
      cTelNum: null,
      cFaxNum: null,
      cEmail: null,
      piFN: null,
      piLN: null,
      piTelNum: null,
      piFaxNum: null,
      piEmail: null,
      institution: null,
      school: null,
      cancerCenterMember: null,
      address: null,
      city: null,
      state_province: null,
      zip: null,
      contactForRslts: null,
    },
    contactforResults: [
      {name: 'Principal Investigator', value:'Principal Investigator'},
      {name: 'Laboratory Contact', value:'Laboratory Contact'},
      {name: 'Both', value: 'Both'},
    ],
  }),
   methods: {
    update() {
      this.$emit("updateContact",this.$data.formData)
    }
   },
 }
</script>
