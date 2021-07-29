<template>
  <v-form>
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-text-field
              v-model="formData.contactFN"
              label="Contact First Name"
              @change="update"
              filled
              outlined
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="contactLN"
            label="Contact Last Name"
            @change="update"
            filled
            oulined
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
              v-model="cTelNum"
              label="Contact Tel Number"
              filled
              outlined
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
              v-model="cFaxNum"
              label="Contact Fax Number"
              filled
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
              v-model="cEmail"
              label="Contact Email"
              filled
              outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-text-field
            v-model="piFN"
            label="PI First Name"
            filled
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="piLN"
            label="PI Last Name"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="piTelNum"
            label="PI Tel Number"
            filled
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
              v-model="piFaxNum"
              label="PI Fax Number"
              filled
              outlined
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
              v-model="piEmail"
              label="PI Email"
              filled
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-text-field
            v-model="institution"
            label="Institution"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="school"
            label="School"
            filled
          ></v-text-field>
        </v-col>

        <v-col sm="3">
          <v-text-field
            v-model="cancerCenterMember"
            label="UCD Cancer Center Member?"
            filled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-text-field
            v-model="address"
            label="Address"
            filled
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="city"
            label="City"
            filled
            outlined
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="state_province"
            label="State/Province"
            filled
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="zip"
            label="Zip/Postal Code"
            filled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" no-gutters>
        <v-col cols="4">
          <v-select
              v-model="select"
              :items="contactforResults"
              item-text="name"
              item-value="value"
              label="Primary contact for Results"
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
      contactFN: ""//this.contactData.firstName,
    },

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
    select: null,
    contactforResults: [
      {name: 'Principal Investigator', value:'pi'},
      {name: 'Laboratory Contact', value:'lc'},
      {name: 'Both', value: 'nc'},
    ],
  }),
   methods: {
    update() {
      this.$emit("updateContact",this.$data.formData)
    }
   },
 }
</script>
