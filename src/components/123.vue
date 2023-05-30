<template>
  <div class="box">
    <form>
      <img src="logo.png" alt="image" width="480" height="80" class="positioned-image">
      <label for="myInput">帳號(工號/學號):</label>
      <input type="text"  id="myInput" oninput="changeColor()"  />
      <label for="myInput2">密碼(同校務系統):</label>
      <input type="password" id="myInput2" oninput="changeColor2()"  />
    </form>
      <!-- 表單內容 -->
      <input type="submit" name="" value="                   登錄                    " />
  </div>
</template>

<script>
export default {
  name: "123"
}
</script>

<style scoped>
.box {
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  text-align: center;
}

.box input[type="text"],
.box input[type="password"] {
  background: #ececec;
  text-align: left;
  border: 1px solid #18A5A5;
  padding: 10px 43px;
  width: 225px;
  outline: none;
  color: black;
  transition: 0.25s;
  border-radius: 3px;
}
.box input[type="submit"] {
  border: 0;
  background: #1BB6B7;
  margin: 20px auto;
  text-align: center;
  padding: 10px 30px;
  outline: none;
  color: white;
  transition: 0.25s;
  cursor: pointer;
  border-radius: 3px;
}

.positioned-image {
  position: absolute;
  left: -60px;
  top: -80px;
}
label{
  color:gray;
}
</style>