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
          <v-text-field
              v-model="formData.strainGeneticBckg"
          ></v-text-field>
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
          <v-text-field
              v-model="formData.allele"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-subheader>
            If targeted mutant,<br/>
            ES cell line Identification:
          </v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field
              v-model="formData.esCellLnID"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-subheader>Is the mutation X-linked?</v-subheader>
        <v-radio-group
            v-model="formData.row"
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

      <v-radio-group v-model="formData.stndPCRService">
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
      </v-radio-group>

      <v-row no-gutters>
        <v-col>
          <v-checkbox
              v-model="formData.standardPCRCheckBx"
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

      <v-radio-group v-model="formData.qntPCRService">
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
      </v-radio-group>

      <v-row no-gutters>
        <v-col>
          <v-checkbox
              v-model="formData.qpcrDblReact"
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
              v-model="formData.qpcrSglReact"
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
              v-model="formData.snp"
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

    <v-data-table
      :headers="computed.headers()"
      :items="samples"
      class="elevation-1"
      >
      <template v-slot:top>
        <v-toolbar
          flat
          >
          <v-toolbar-title>Sample Information</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
            ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
            >
            <template v-slot:activator="{on,attrs}">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                >
                New Sample
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{formTitle}}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                      >
                      <v-text-field
                        v-model="editedSample.id"
                        label="Sample ID"
                        ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                      >
                      <v-text-field
                        v-model="editedSample.sex"
                        label="Sex"
                        ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                      >
                      <v-text-field
                        v-model="editedSample.parentalGeno"
                        label="Parental Genotypes: Mother/Father"
                        ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                  >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                  >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteSampleConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          color="blue"
          @click="editSample(item)"
          >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          color="red"
          @click="deleteSample(item)"
          >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
          >
          Reset
        </v-btn>
      </template>
    </v-data-table>

    <contact
        :contactData.sync="formData.contactData"
        @updateContact="updateContact"
    ></contact>

    <BillingInformation
        :billingInformationDatat.sync="formData.billingInformationData"
        @updateBillingInformation="updateBillingInformation"
    ></BillingInformation>

    <PaymentInformation
      :paymentInformationData.sync="formData.paymentInformationData"
      @updatePaymentInformation="updatePaymentInformation"
    ></PaymentInformation>



    <v-btn @click="submit">
      send form
    </v-btn>

  </form>
</template>

<script>

import contact from './ContactInformation';
import PaymentInformation from "./PaymentInformation";
import BillingInformation from "./BillingInformation";

export default {
  name: "GenotypingInformation",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    samples:[{id:"", sex:"", parentalGeno:""},
      {id:"", sex:"", parentalGeno:""},
      {id:"", sex:"", parentalGeno:""},
      {id:"", sex:"", parentalGeno:""},
      {id:"", sex:"", parentalGeno:""}],
    editedIndex: -1,
    editedSample: {
      id: '',
      sex: '',
      parentalGeno: ''
    },
    defaultSample:{
      id: '',
      sex: '',
      parentalGeno: '',
    },

    computed: {
      headers() {
        return [
          {text: 'Sample ID', align: 'start', value: 'id'},
          {text: 'Sex', value: 'sex'},
          {text: 'Parental Genotypes: Mother/Father', value: 'parentalGeno', sortable: false},
          {text: 'Actions', value: 'actions', sortable: false}
        ]
      },

      formTitle () {
        return this.editedIndex === -1 ? 'Edit Sample' : 'New Sample'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created(){
      this.initialize()
    },

    formData: {
      formType: "genotyping",
      formVersion: "0.1",
      strainGeneticBckg: null,
      allele: null,
      esCellLnID: null,
      strainName: null,
      row: null,
      stndPCRService: null,
      standardPCRCheckBx: null,
      qntPCRService: null,
      qpcrDblReact: null,
      qpcrSglReact: null,
      snp: null,
      //strainName: undefined
      contactData: {},
      paymentInformationData: {},
      billingInformationData: {}
    },
  }),
  components: {
    contact,
    PaymentInformation,
    BillingInformation,
  },
  methods: {
    initialize(){
      this.samples = [
        {id: "",
        sex: "",
        parentalGeno:""
        },
        {id: "",
          sex: "",
          parentalGeno:""
        },
        {id: "",
          sex: "",
          parentalGeno: ""
        },
        {id: "",
          sex: "",
          parentalGeno: ""
        },
        {id: "",
          sex: "",
          parentalGeno: ""
        },
      ]
    },

    editSample (sample) {
      this.editedIndex = this.samples.indexOf(sample)
      this.editedSample = Object.assign({},sample)
      this.dialog = true
    },

    deleteSample (sample) {
      this.editedIndex = this.samples.indexOf(sample)
      this.editedSample = Object.assign({},sample)
      this.dialogDelete = true
    },

    deleteSampleConfirm () {
      this.samples.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog =false
      this.$nextTick(() => {
        this.editedSample = Object.assign({},this.defaultSample)
        this.editedIndex=-1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedSample = Object.assign({}, this.defaultSample)
        this.editedIndex = -1
      })
    },

    save () {
      if(this.editedIndex > -1){
        Object.assign(this.samples[this.editedIndex],this.editedSample)
      } else{
        this.samples.push(this.editedSample)
      }
      this.close()
    },

    submit: function(){
      const formData= JSON.stringify(this.$data.formData);
      console.log(formData);
    },

    updateContact: function (contactInfo){
      this.$data.formData.contactData= contactInfo;
    },

    updatePaymentInformation: function(paymentInfo){
      this.$data.formData.paymentInformationData= paymentInfo;
    },

    updateBillingInformation: function (billingInfo){
      this.$data.formData.billingInformationData= billingInfo;
    },
  },
}
</script>

<style scoped>

</style>