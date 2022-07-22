
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
    <ms-date class="mt-16" :labelMode="'hidden'" :stylingMode="'outlined'" :value="new Date()"
      @onValueChanged="onDateBoxChanged">

    </ms-date>

    <button class="mt-16"  @click="showItem($event)">Open Popup</button>

    <!-- <MsPopup id="popup" v-if="visiblePopup" :visible="visiblePopup" :width="'80vw'" :height="'80vh'" @hidden="visiblePopup = false"> -->
    <MsPopup id="popup" v-if="visiblePopup">
      <template v-slot:popup-content="slotData">
        <div class="iframe-wrapper">
          <div class="iframe-loading" v-if="iframeLoading">
            {{slotData}}
          </div>
          <MsIFrame ref="iframeEl" :style="{ 'display': iframeLoading ? 'none' : 'block' }" :src="srcIframe"
            @load="onLoad" @iframe-load="onIframeLoad" frameborder="0" gesture="media" allow="encrypted-media"
            sandbox="allow-same-origin allow-scripts">

          </MsIFrame>
        </div>
      </template>
    </MsPopup>
  </main>
</template>
<script>
import TheWelcome from '@/components/TheWelcome.vue';
import MsCombobox from '@/components/base/MsCombobox.vue';
import MsDate from '@/components/base/MsDate.vue';
import MsIFrame from '@/components/base/MsIFrame.vue';
import EmployeeAPI from '@/apis/EmployeeAPI.js';
import moment from "moment";
import  MsPopup  from '@/components/base/MsPopup.vue';

export default {

  name: 'HomeView',
  components: {
    MsCombobox,
    MsDate,
    MsIFrame,
    MsPopup
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
      srcIframe: "http://localhost:3000/",
      iframeLoading: true,
      visiblePopup: false
    }
  },
  created() {
    this.getEmployee();
  },
  methods: {
    onLoad() {
      console.log('iframe loaded');

      this.iframeLoading = false;
    },
    onIframeLoad() {
      console.log('iframe loaded');
    }
    ,
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
      this.visiblePopup = true;
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
 
 .iframe-wrapper {
   border: 1px solid gray;
   height: 600px;
 
   .ms-iframe {
     height: 100%;
     width: 100%;
 
     iframe {
       height: 100%;
       width: 100%;
     }
   }
 }
 </style>

