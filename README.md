# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
Trong Demo này anh có sử dụng các Best Practices sau:
- Dùng vue router + lazy load. Anh em xem tại file src/router/index.js
- Sử dụng BaseAPI, tất cả lời gọi lên server sẽ chạy qua đây. Để dùng thử, anh em xem tại file EmployeeAPI.js
- Xây dựng MsCombobox: dropdown có thể tìm kiếm, custom nội dung. 
- Dùng moment.js để format date + viết control chọn ngày tháng = input và js thuần (Xem tại Homeview.vue)
- Xây dựng MsDate, được dùng như base control chọn date dùng thư viện DevExtreme (xem tại MsDate.vue)