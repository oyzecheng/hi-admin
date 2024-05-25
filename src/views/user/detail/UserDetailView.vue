<template>
  <div class="user-detail">
    <div class="user-avatar-container module-container">
      <div class="avatar-box">
        <a-avatar :src="userInfo?.avatar" />
        <div>
          <h6 class="user-name">{{ userInfo?.name }}</h6>
          <p class="role">{{ roleDic.getLabelByValue(userInfo?.role) }}</p>
        </div>
      </div>
      <div class="operator-bar"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type IUser, UserManageDetail } from '@/api/userManage'
import { useRoute } from 'vue-router'
import { roleDic } from '@/views/user/pageConfig'
import { getParamsId } from '@/utils/index.js'

const route = useRoute()
const userInfo = ref<IUser | null>(null)

onMounted(() => {
  getUserInfo()
})

const getUserInfo = async () => {
  const { data } = await UserManageDetail(getParamsId(route))
  userInfo.value = data
}
</script>

<style scoped lang="less">
.user-detail {
  .user-avatar-container {
    position: relative;
    height: 290px;
    padding: 0;
    background:
      linear-gradient(rgba(0, 75, 80, 0.8), rgba(0, 75, 80, 0.8)) center center / cover no-repeat,
      url(https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_4.jpg);
    .avatar-box {
      position: absolute;
      left: 50px;
      bottom: 30px;
      display: flex;
      color: #fff;
      z-index: 2;
      .ant-avatar {
        width: 128px;
        height: 128px;
        border: 2px solid #fff;
        margin-right: 20px;
      }
      .user-name {
        font-size: 28px;
        font-weight: bold;
        margin-top: 30px;
      }
      .role {
        opacity: 0.5;
      }
    }
    .operator-bar {
      background-color: #fff;
      height: 50px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
