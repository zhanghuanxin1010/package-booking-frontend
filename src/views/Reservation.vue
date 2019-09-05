
<template>
<div>
    <h1> 预约取件</h1>

  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="运单号"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          '运单号',
          {rules: [{  message: '201907240001' }]}
        ]"
        placeholder="201907240001"
      />
    </a-form-item>

     <a-form-item
      label="取件时间"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          '取件时间',
          {rules: [{  message: 'Please input your note!' }]}
        ]"
        placeholder="2019-07-26"
      />
    </a-form-item>

     
    
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
        @click="handleSubmit"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
    };
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      
     

      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }, 
  }
};
</script>