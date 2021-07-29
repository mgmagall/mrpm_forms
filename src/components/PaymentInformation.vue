<template>
<v-form>
  <v-container>
    <v-col
        class="mb-5"
        cols="12"
    >
      <h2 class="headline font-weight-bold mb-3">
        Payment Information
      </h2>
    </v-col>
  </v-container>

  <v-container fluid>
    <v-radio-group v-model="radioGroup">
     <v-row no-gutters>
       <v-col md="8">
      <v-radio
        label="International Investigators are required to provide prepayment with check, credit card, or wire transfer:"
      ></v-radio>
       </v-col>
       <v-col>
         <v-select
          v-model="select1"
          :items="paymentOption1"
          item-text="name"
          item-value="value"
          required
         ></v-select>
       </v-col>
     </v-row>

      <v-row no-gutters>
      <v-col md="8">
      <v-radio
        label="Domestic (U.S.) Investigators have the following options:"
      ></v-radio>
      </v-col>
      <v-col>
        <v-select
            v-model="select2"
            :items="paymentOption2"
            item-text="name"
            item-value="value"
            required
        ></v-select>
      </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col md="8">
          <v-radio
            label="University of California Investigators are required to pay with a UC recharge to qualify for UC pricing:"
          ></v-radio>
        </v-col>
        <v-col>
          <v-select
              v-model="select3"
              :items="paymentOption3"
              item-text="name"
              item-value="value"
              required
          ></v-select>
        </v-col>
      </v-row>
    </v-radio-group>
  </v-container>

  <v-divider></v-divider>

  <v-row no-gutters>
    <v-col cols="7">
      <div class="text-decoration-underline">
        <p class="font-weight-bold text-left">
            Checks:
        </p>
      </div>
      <p class="text-left">
        Please make all checks payable to:
      </p>
      <p class="font-weight-bold text-center">
        The Regents of U.C.
      </p>
    </v-col>

    <v-col>
      <div class="text-decoration-underline">
        <p class="font-weight-bold text-left">
          Purchase Orders:
        </p>
      </div>
      <p class="text-left">
        PO's should be made out to:
      </p>
      <p class="font-weight-bold text-center">
        University of California, Davis
      </p>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col cols="7">
      <p class="font-weight-bold text-left">
        Remit Address:
      </p>
      <p>
        The Regents of U.C.<br/>Cashier's Office<br/>University of California, Davis
        <br/>P.O.Box 989602<br/>West Sacramento, CA 95798-9062
      </p>
      <p class="text-left">You will receive an MBP-Project# to reference upon project initiation.</p>
    </v-col>
    <v-col>
      <p class="font-weight-bold text-left">
        Company Name:
      </p>
      <p>
        Mouse Biology Program<br/>University of California, Davis
      </p>
      <p class="font-weight-bold text-left">
        Mailing Address:
      </p>
      <p>
        UCD MBP Facility<br/>2795 2nd Street, Suite 400<br/>Davis, CA 95618
      </p>
      <p class="text-left">You will receive an MBP-Project# to reference upon project initiation.</p>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="7">
      <div class="text-decoration-underline">
        <p class="font-weight-bold text-left">
          Wire Transfers/Credit Card Payments:
        </p>
      </div>
      <p class="text-left">
        We will send you instructions via email on how to pay with a credit card or wire transfer.
      </p>
    </v-col>
    <v-col>
      <p class="text-left">
        Please fax a copy of the PO to (530)757-3284 (Attn: Project Coordination) or email to
        <a
            href="mailto:mbp@ucdavis.edu"
            target="_blank"
        >mbp@ucdavis.edu</a>

      </p>
      <p class="text-left">
        A completed W-9 form can be found
        <a
          href="https://financeandbusiness.ucdavis.edu/finance"
          target="_blank"
          >here.</a>
      </p>
    </v-col>
  </v-row>

  <v-row no-gutters>
    <div class="text-decoration-underline">
      <p class="font-weight-bold text-left">
        UC Davis Campus Recharge
      </p>
    </div>
  </v-row>

  <v-row no-gutters>
    <v-col cols="3">
      <p>
        Please fill out the following:
      </p>
    </v-col>
    <v-col cols="2">
      <v-subheader>Chart Code</v-subheader>
    </v-col>
    <v-col cols="2">
      <v-text-field>

      </v-text-field>
    </v-col>
    <v-col cols="2">
      <v-subheader>Account Number</v-subheader>
    </v-col>
    <v-col cols="2">
      <v-text-field>

      </v-text-field>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col cols="5">
      <v-subheader>
        Are you a member of the Comprehensive Cancer Center?
      </v-subheader>
    </v-col>
    <v-col cols="2">
      <v-select
        v-model="cancerCenterSelect"
        :items="cancerCenterMember"
        item-text="name"
        item-value="value"
        required
      ></v-select>
    </v-col>
    <v-col cols="3">
      <v-subheader>
        If yes, is this project cancer related?
      </v-subheader>
    </v-col>
    <v-col cols="1">
      <v-select
          v-model="projCancerRelated"
          :items="cancerRelated"
          item-text="name"
          item-value="value"
          required
      ></v-select>
    </v-col>
  </v-row>

  <v-row no-gutters>
    <div class="text-decoration-underline">
      <p class="font-weight-bold text-left">
        Intercampus String (for other UC campuses)
      </p>
    </div>
  </v-row>
  <v-row no-gutters>
    <p class="text-left">
      Orders placed by one of the University of California campuses must be paid by intercampus recharge. The required fields of the account
      strting are campus-specific and can be found
      <a
          href=""
          target="_blank"
      >here.</a>
      Please be sure to provide all of the required fields of the account string, along with your project number, to mbp@ucdavis.edu.
    </p>
  </v-row>

  <v-row no-gutters class="font-weight-bold font-italic justify-center">
    <v-card class="justify-center text-center">
      *The UC Davis Mouse Biology Program is a non-profit institution*
    </v-card>
  </v-row>
</v-form>
</template>

<script>
export default {
  name: "PaymentInformation",

  data: () => ({
    select1: null,
    select2: null,
    select3: null,
    cancerCenterSelect: null,
    projCancerRelated: null,
    paymentOption1:[
      {name:'Check', value: 'check'},
      {name: 'Credit Card', value: 'creditCard'},
      {name: 'Wire Transfer', value: 'wireTransfer'},
    ],
    paymentOption2:[
      {name:'Purchase Order', value: 'purchaseOrder'},
      {name: 'Check', value: 'check'},
      {name: 'Credit Card', value: 'creditCard'},
    ],
    paymentOption3:[
      {name:'Campus Recharge (UCD)', value: 'campusRecharge'},
      {name: 'Intercampus String (other UCs)', value: 'instercampusString'},
      {name: 'Purchase Order', value: 'purchaseOrder'},
      {name: 'Check', value: 'check'},
      {name: 'Credit Card', value: 'creditCard'},
    ],
    cancerCenterMember:[
      {name:'Yes', value: 'yes'},
      {name: 'No', value: 'no'},
    ],
    cancerRelated:[
      {name:'Yes', value: 'yes'},
      {name: 'No', value: 'no'},
    ],
  })
}
</script>
