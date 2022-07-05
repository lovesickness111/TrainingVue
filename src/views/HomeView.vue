
<template>
  <main>
    <MsCombobox :options="options" v-on:selected="validateSelection" v-on:filter="getDropdownValues" :disabled="false"
      name="zipcode" :maxItem="10" placeholder="Please select an option">
      <template v-slot:itemDropdown="slotData">
        <div class="nvcuong1" @click="showItem(slotData)">nvcuong1 custom: {{ slotData.data.name }}</div>

      </template>
    </MsCombobox>
  </main>
</template>
<script setup>
import TheWelcome from '@/components/TheWelcome.vue';
import MsCombobox from '@/components/base/MsCombobox.vue';
import EmployeeAPI from '@/apis/EmployeeAPI.js';
</script>

 <script type="text/javascript">
export default {

  name: 'HomeView',
  data() {
    return {
      options: [
        { name: 'Cat', id: 'cat' },
        { name: 'Dog', id: 'dog' },
        { name: 'Elephant', id: 'elephant' },
        { name: 'Girafe', id: 'girafe' },
        { name: 'Snake', id: 'snake' },
        { name: 'Spider', id: 'spider' },
        { name: 'Unicorn', id: 'unicorn' }
      ],
      selected: { name: null, id: null }
    }
  },
  created() {
    this.getEmployee();
  },
  methods: {
    getEmployee() {
      EmployeeAPI.getTest().then(res => {
        // xử lý khi api trả về dữ liệu ở đây
        debugger
      }, err => {
        console.log("có lỗi xảy ra");
        debugger

      });
    },
    // sự kiện khi 1 item dc chọn
    validateSelection(selection) {
      this.selected = selection;
      console.log(selection.name + ' has been selected');
    },
    // sự kiện khi tìm kiếm trong input
    getDropdownValues(keyword) {
      console.log('You could refresh options by querying the API with ' + keyword);
    },
    // sự kiện bấm vào 1 item custom
    showItem(slotData) {
      console.log(slotData);
    }
  }

}
</script>

 <style lang="scss" scoped>
 .nvcuong1 {
   height: 32px;
 }
 </style>