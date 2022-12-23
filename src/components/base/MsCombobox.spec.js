import { mount } from "@vue/test-utils";
import MsCombobox from "src/components/base/MsCombobox.vue";
// import { describe, it, expect } from "vitest";

describe("MsCombobox.vue", () => {

  it("should renders is page content is correct", () => {
    const wrapper = mount(MsCombobox, {
      props: { name:"nvcuong1" },
    });

    expect(wrapper.vm.options).toMatchSnapshot();
  });
})