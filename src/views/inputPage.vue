
<template>
<div>
    <h1> 包裹入库</h1>

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
          'id',
          {rules: [{  message: '201907240001' }]}
        ]"
        placeholder="201907240001"
      />
    </a-form-item>

     <a-form-item
      label="收件人"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'clientName',
          {rules: [{  message: 'Please input your note!' }]}
        ]"
        placeholder="张小五"
      />
    </a-form-item>

     <a-form-item
      label="电话"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'phone',
          {rules: [{ message: 'Please input your note!' }]}
        ]"
        placeholder="18327789749"
      />
    </a-form-item>

     <a-form-item
      label="重量"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'weight',
          {rules: [{  message: 'Please input your note!' }]}
        ]"
          placeholder="3 KG"
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
     
       //this.$store.dispatch("createTodos",e);

      this.form.validateFields((err, values) => {
        if (!err) {
            console.log(values)
            this.$store.dispatch("createTodos",values)
        
        }
      });
    }, 
  }
};
</script>