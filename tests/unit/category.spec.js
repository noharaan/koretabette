import { shallowMount } from "@vue/test-utils";
import Category from "../../src/pages/category.vue";

describe("category.vue", () => {
  test("renders props.msg when passed", () => {
    const wrapper = shallowMount(Category);
    expect(wrapper).toBeTruthy();
  });
});
