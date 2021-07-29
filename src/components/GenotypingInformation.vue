<template>
  <form>
    <v-container>
      <v-col
          class="mb-5"
          cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Genotyping Request Form
        </h2>
      </v-col>
    </v-container>

    <v-container fluid>
      <v-row no-gutters>
        <div>
          <p class="font-weight-bold text-left">
            Strain Information <br/>
          </p>
        </div>
      </v-row>

      <v-row no-gutters>
        <v-col cols="1">
          <v-subheader>Strain Name:</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field
              v-model="formData.strainName"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-subheader>
            Strain Genetic Background:<br/>
            (e.g.: C57BL6/J, Balb/CJ, 129X1/SvJ, FVB/NJ, etc.)
          </v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field>

          </v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="1">
          <v-subheader>
            MMRC/KOMP Allele:<br/>
            (if applicable)
          </v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field>

          </v-text-field>
        </v-col>
        <v-col cols="2">
          <v-subheader>
            If targeted mutant,<br/>
            ES cell line Identification:
          </v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field>

          </v-text-field>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-subheader>Is the mutation X-linked?</v-subheader>
        <v-radio-group
            v-model="row"
            row
        >
          <v-radio
              label="Yes"
              value="xlinked_Yes"
          ></v-radio>
          <v-radio
              label="No"
              value="xlinked_No"
          ></v-radio>
          <v-radio
              label="Not Known"
              value="xlinked_notKnown"
          ></v-radio>
        </v-radio-group>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row no-gutters>
        <div>
          <p class="font-weight-bold text-left">
            Standard PCR Genotyping <br/>
          </p>
        </div>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <p class="font-weight-bold">
            Service
          </p>
        </v-col>
        <v-col cols="2">
          <p class="font-weight-bold">
            UC Recharge
          </p>
        </v-col>
        <v-col cols="2">
          <p class="font-weight-bold">
            Non-Profit Fee
          </p>
        </v-col>
        <v-col cols="2">
          <p class="font-weight-bold">
            For-Profit Fee
          </p>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-radio
              label="Standard PCR Development: MBP-Generated Protocol"
              value="standardService"
          ></v-radio>
        </v-col>
        <v-col cols="2">
          <p>
            $483.00
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            $699.38
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            $747.68
          </p>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-radio
              label="Protocol Incorporation: Customer-Provided Protocol"
              value="incorporationService"
          ></v-radio>
        </v-col>
        <v-col cols="2">
          <p>
            $101.00
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            $146.25
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            $156.35
          </p>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-checkbox
              v-model="standardPCRCheckBx"
              :label="`Standard PCR: Mutant vs. Wildtype`"
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$13.00 Per Sample
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$18.82 Per Sample
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$20.12 Per Sample
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row no-gutters>
        <div>
          <p class="font-weight-bold text-left">
            Quantitative PCR Genotyping <br/>
          </p>
        </div>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <p class="font-weight-bold">
            Service
          </p>
        </v-col>
        <v-col cols="2">
          <p class="font-weight-bold">
            UC Recharge
          </p>
        </v-col>
        <v-col cols="2">
          <p class="font-weight-bold">
            Non-Profit Fee
          </p>
        </v-col>
        <v-col cols="2">
          <p class="font-weight-bold">
            For-Profit Fee
          </p>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-radio
              label="QPCR Development: MBP-Generated Protocol"
              value="qpcrMBPProtocol"
          ></v-radio>
        </v-col>
        <v-col cols="2">
          <p>
            $464.00
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            $671.87
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            $718.27
          </p>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-radio
              label="Protocol Incorporation: Customer-Provided Protocol"
              value="qpcrCustomerProtocol"
          ></v-radio>
        </v-col>
        <v-col cols="2">
          <p>
            $101.00
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            $146.25
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            $156.35
          </p>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-checkbox
              v-model="qpcrDblReact"
              :label="`QPCR Double Reaction: Zygosity Testing, Copy Number Analysis`"
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$13.00 Per Sample
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$18.82 Per Sample
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$20.12 Per Sample
          </p>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-checkbox
              v-model="qpcrSglReact"
              :label="`QPCR Single Reaction: Cre,LacZ, Gender Determination`"
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$10.00 Per Sample
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$14.48 Per Sample
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$15.48 Per Sample
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row no-gutters>
        <div>
          <p class="font-weight-bold text-left">
            Single Nucleotide Polymorphism (SNP Testing) <br/>
          </p>
        </div>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <p class="font-weight-bold">
            Service
          </p>
        </v-col>
        <v-col cols="2">
          <p class="font-weight-bold">
            UC Recharge
          </p>
        </v-col>
        <v-col cols="2">
          <p class="font-weight-bold">
            Non-Profit Fee
          </p>
        </v-col>
        <v-col cols="2">
          <p class="font-weight-bold">
            For-Profit Fee
          </p>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-checkbox
              v-model="snp"
              :label="`Single Nucleotide Polymorphism (SNP)`"
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$151.00 Per Sample
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$218.65 Per Sample
          </p>
        </v-col>
        <v-col cols="2">
          <p>
            <br/>$233.75 Per Sample
          </p>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2">
          <v-subheader>Backcross Generation:</v-subheader>
        </v-col>
        <v-col cols="5">
          <v-text-field>

          </v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2">
          <v-subheader>Donor Strain:</v-subheader>
        </v-col>
        <v-col cols="5">
          <v-text-field>

          </v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2">
          <v-subheader>Recipient Strain:</v-subheader>
        </v-col>
        <v-col cols="5">
          <v-text-field>

          </v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row no-gutters class="text-left">
        <p class="font-weight-bold text-left">
          Notes:
        </p>
      </v-row>
      <v-row no-gutters class="text-left">
        <p>
          - Service fees may change. We will provide an estimate for your review prior to project initiation.<br/>
          - An order processing will apply.<br/>
          - Please see sample submission instructions
        </p>
      </v-row>
    </v-container>
    <contact
        :contactData.sync="formData.contactData"
        @updateContact="updateContact"
    ></contact>
    <v-btn @click="submit">
      send form
    </v-btn>

  </form>
</template>

<script>

import contact from './ContactInformation';

export default {
  name: "GenotypingInformation",
  data: () => ({
    row: null,
    standardPCRCheckBx: null,
    formData: {
      formType: "genotyping",
      formVersion: "0.1",
      strainName: undefined,
      contactData: {}
    },
  }),
  components: {
    contact
  },
  methods: {
    submit: function(){
      const formData= JSON.stringify(this.$data.formData);
      console.log(formData);

},
    updateContact: function (contactInfo){
      this.$data.formData.contactData= contactInfo;
    }
  }
}
</script>

<style scoped>

</style>