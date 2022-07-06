
<template>
  <main>
    <MsCombobox :options="options" v-on:selected="validateSelection" v-on:filter="getDropdownValues" :disabled="false"
      name="zipcode" :maxItem="10" placeholder="Please select an option">
      <template v-slot:itemDropdown="slotData">
        <div class="nvcuong1" @click="showItem(slotData)">nvcuong1 custom: {{ slotData.data.name }}</div>

      </template>
    </MsCombobox>

    <input class="mt-16" type="date" name="begin" placeholder="dd-mm-yyyy" :value="valueDate" min="1960-01-01"
      max="2050-12-31" @change="changeInputHandler($event)">
  </main>
</template>
<script setup>
import TheWelcome from '@/components/TheWelcome.vue';
import MsCombobox from '@/components/base/MsCombobox.vue';
import EmployeeAPI from '@/apis/EmployeeAPI.js';
import moment from "moment";
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
      selected: { name: null, id: null },
      valueDate: "",
    }
  },
  created() {
    this.getEmployee();
  },
  methods: {
    changeInputHandler(event) {
      if (event.target && event.target.value) {

        this.valueDate = event.target.value;
      }
    },
    getEmployee() {
      EmployeeAPI.getTest().then(res => {
        // xử lý khi api trả về dữ liệu ở đây
        console.log("api trả về thành công");

        // giả sử server trả về date ở đây
        const dataDateFromServer = "2022-07-09";
        // format lại đúng định dạng "YYYY-MM-DD" thì control input mới hiển thị được giá trị
        this.valueDate = moment(dataDateFromServer).format("YYYY-MM-DD");
      }, err => {
        console.log("có lỗi xảy ra");


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
 
 .mt-16 {
   margin-top: 16px;
 }
 </style>