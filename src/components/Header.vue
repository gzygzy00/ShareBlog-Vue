<template>
  <div id="header" :class="{'login': isLogin, 'logout': !isLogin}">
    <template v-if="isLogin">
      <h1>let's share</h1>
      <p>精品博客汇聚</p>
      <div class="button">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
    <template v-else>
      <h1>let's share</h1>
      <div class="user-avatar">
        <div class="icon">icon</div>
        <div class="avatar">avatar</div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        isLogin: true,
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/base.less";

  #header {
    border: 1px solid green;
    color: #FFF;
    background-color: @themeColor;
  }

  #header.login {
    text-align: center;

    .button {
      margin: 20px;
    }

    .icon {
      border: 1px solid black;
    }

    .avatar {
      border: 1px solid red;
    }
  }

  #header.logout {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-avatar {
      border: 1px solid red;
      display: flex;
    }

    .icon {
      border: 1px solid black;
    }

    .avatar {
      border: 1px solid green;
    }
  }
</style>