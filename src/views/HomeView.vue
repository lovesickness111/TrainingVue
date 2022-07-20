
<template>
  <main id="Home-view">
    <MsCombobox :options="options" v-on:selected="validateSelection" v-on:filter="getDropdownValues" :disabled="false"
      class="ms-combo-custom" name="zipcode" :maxItem="10" placeholder="Please select an option">
      <template v-slot:itemDropdown="slotData">
        <div class="nvcuong1" @click="showItem(slotData)">nvcuong2 custom: {{ slotData.data.name }}</div>

      </template>
    </MsCombobox>
    <!-- control chọn ngày tháng bằng input thuần-->
    <input class="mt-16" type="date" name="begin" placeholder="dd-mm-yyyy" :value="valueDate" min="1960-01-01"
      max="2050-12-31" @change="changeInputDateHandler($event)">

    <!-- sử dụng ms-date bằng cách dùng thư viện dx-->
    <ms-date class="mt-16" :labelMode="'hidden'" :stylingMode="'outlined'" :value="new Date()" @onValueChanged="onDateBoxChanged">

    </ms-date>
  </main>
</template>
<script setup>
import TheWelcome from '@/components/TheWelcome.vue';
import MsCombobox from '@/components/base/MsCombobox.vue';
import MsDate from '@/components/base/MsDate.vue';
import EmployeeAPI from '@/apis/EmployeeAPI.js';
import moment from "moment";
</script>

 <script type="text/javascript">
export default {

  name: 'HomeView',
  components: {
    MsCombobox,
    MsDate
  },
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
    /**
     * xử lý thay đổi giá trị date
     * @param {*} event 
     */
    changeInputDateHandler(event) {
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
        // format lại đúng định dạng "YYYY-MM-DD" thì control input mới hiển thị được giá trị, dùng thư viện moment.js
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
    },
    /**
     * khi giá trị datebox thay đổi
     * @param {*} e data thay đổi
     */
    onDateBoxChanged(e) {
      console.log("thay đổi ngày tháng");
    }
  }

}
</script>

 <style lang="scss">
 #Home-view {
   .nvcuong1 {
     height: 32px;
   }
 
   .mt-16 {
     margin-top: 16px;
   }
 
   // đặt bookmark: Ctrl Alt K
   // next bookmark: ctrl alt L
   // previous bookmark: ctrl alt J
 
   // previous pointer: alt <
   // previous pointer: alt >
   .ms-combo-custom {
     margin-right: 32px;
 
   }
 }
 </style>

