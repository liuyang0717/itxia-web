<template>
  <div>
    <div class="card border-success" v-for="appointment in appointments">
      <div class="card-header text-success">
        <strong>{{ appointment.name }}</strong>
      </div>
      <div class="card-body text-success">
        <p class="card-text">
          <strong>IT侠: </strong>{{ appointment.handler }}
        </p>
        <p class="card-text">
          <strong>提交时间: </strong>{{ appointment.updatedon }}
        </p>
        <p class="card-text">
          <strong>手机号码: </strong><a href="#">{{ appointment.phone }}</a>
        </p>
        <p class="card-text">
          <strong>邮箱: </strong>{{ appointment.email }}
        </p>
        <p class="card-text">
          <strong>电脑型号: </strong><a href="#">{{ appointment.model }}</a>
        </p>
        <p class="card-text">
          <strong>操作系统: </strong>{{ appointment.os }}
        </p>
        <p class="card-text">
          <strong>问题描述: </strong>{{ appointment.desc }}
        </p>
      </div>
      <button type="button" class="btn btn-primary">我来处理</button>
      <button type="button" class="btn btn-light">展开回复信息</button>
      <div class="reply" v-for="reply in appointment.replies">
        {{ reply }}
      </div>
      <button type="button" class="btn btn-light">回复</button>
    </div>
  </div>
</template>

<script>
import httpMethod from '../utils/axios';

export default {
  name: 'appoint-card',
  data() {
    var appointments = new Array();
    return {
      appointments: appointments
    }
  },
  methods: {
    listAppointments() {
      var self = this;
      var jsonData = {
        'campus': '鼓楼',
        'status': '1'
      };
      var target = {
        method: 'post',
        url: '/admin/listAppointments',
        data: JSON.stringify(jsonData)
      };
      httpMethod(target, function(error, response) {
        if (error) {
          console.error(error);
        } else {
          var resData = response.data;
          console.log(resData);
          var vueData = new Array();
          for (var index in resData) {
            var target = resData[index];
            var returnTarget = {
              name: target.name,
              handler: target.handler,
              updatedon: target.updatedon,
              phone: target.phone,
              email: target.email,
              model: target.model,
              os: target.os,
              desc: target.desc,
              replies: target.replies
            };
            vueData.push(returnTarget);
          }
          self.appointments = vueData;
        }
      });
    },
    reply() {
      var self = this;
      var jsonData = {

      };
      var target = {
        method: 'post',
        url: '/admin/'
      }
    }
  },
  mounted() {
    this.listAppointments();
  }
}
</script>

<style>
</style>
